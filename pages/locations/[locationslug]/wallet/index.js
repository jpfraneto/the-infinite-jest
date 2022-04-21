import React, { useState, useEffect } from 'react';
import {
  movements,
  futureMovements,
} from '../../../../data/la-broma-infinita/wallet';
import styles from '../../../../styles/Wallet.module.css';

const LocationWallet = () => {
  const [balance, setBalance] = useState(0);
  const date = new Date();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.balanceSummary}>
        <h5>Saldo</h5>
        <h2>{balance}</h2>
        <h5>21 Abril 2022</h5>
      </div>
      <div className={styles.movementsContainer}>
        {movements.map((mov, index) => {
          return (
            <div key={index}>
              <span>{mov.date}</span> |<span>{mov.details}</span> |
              <span>
                {mov.sign}
                {mov.amount}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationWallet;
