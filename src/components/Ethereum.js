import React from 'react';
import { TransactionsProvider } from '../context/TransactionContext';
import Services from './Services';
import Transactions from './Transactions';
import Welcome from './Welcome';
// import '../index.css';

const Ethereum = () => {
  console.log('Ethereum');
  return (
    <div className="bg-gray-900">
      <TransactionsProvider>
        <Welcome />
        <Services />
        <Transactions />
      </TransactionsProvider>
    </div>
  );
};

export default Ethereum;
