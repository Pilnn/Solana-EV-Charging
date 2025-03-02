import React from 'react';

const AccountListFeature = () => {
  // Example data, replace with actual data as needed
  const accounts = [
    { id: 1, name: '50kW', balance: ' 0.05 SOL' },
    { id: 2, name: '100kW', balance: '0.1 SOL' },
    { id: 3, name: '200kW', balance: '0.2 SOL' },
  ];

  return (
    <div>
      <h2>Conversion Table</h2>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.name}: {account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountListFeature;