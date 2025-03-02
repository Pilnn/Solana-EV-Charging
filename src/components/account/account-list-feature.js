import React from 'react';

const AccountListFeature = () => {
  // Example data, replace with actual data as needed
  const accounts = [
    { id: 1, name: 'Account 1', balance: '10 SOL' },
    { id: 2, name: 'Account 2', balance: '5 SOL' },
    { id: 3, name: 'Account 3', balance: '20 SOL' },
  ];

  return (
    <div>
      <h2>Account List</h2>
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