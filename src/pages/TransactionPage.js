// filepath: /home/palan/Solana-EV-Charging/src/pages/TransactionPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TransactionPage = () => {
  const { stationId } = useParams(); // Get the station ID from URL

  return (
    <div>
      <h1>Transaction for Station {stationId}</h1>
      <p>Process your Solana transaction here.</p>
    </div>
  );
};

export default TransactionPage;