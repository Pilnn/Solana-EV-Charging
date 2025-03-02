import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import AccountListFeature from '../components/account/account-list-feature';

const TransactionPage = ({ stations }) => {
  const { stationId } = useParams(); // Get the station ID from URL
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connect, connected } = useWallet();
  const [amount, setAmount] = useState(0.1); // Example amount to transfer

  const station = stations.find(station => station.id === parseInt(stationId));
  const toPublicKey = station ? new PublicKey(station.owner) : null;

  const handleTransaction = async () => {
    if (!connected) {
      await connect();
    }

    if (!toPublicKey) {
      alert('Invalid station owner address');
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: toPublicKey,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'confirmed');
      alert(`Transaction successful! Signature: ${signature}`);
    } catch (error) {
      console.error('Transaction failed', error);
      alert('Transaction failed');
    }
  };

  return (
    <div>
      <h1>Transaction for Station {stationId}</h1>
      <p>Process your Solana transaction here.</p>
      <AccountListFeature />
      <div>
        <label>
          Amount (SOL):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0.01"
            step="0.01"
          />
        </label>
        <button onClick={handleTransaction}>Send Transaction</button>
      </div>
    </div>
  );
};

export default TransactionPage;