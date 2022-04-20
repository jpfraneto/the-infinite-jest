import { useState } from 'react';
import styles from './Navbar.module.css';
import { TiThMenu } from 'react-icons/ti';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <a href='/' className={styles.brandName}>
        The Infinite Jest
      </a>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <TiThMenu />
      </button>
      <div
        className={
          isNavExpanded
            ? `${styles.navigationMenu} ${styles.expanded}`
            : `${styles.navigationMenu}`
        }
      >
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/locations'>Locations</a>
          </li>
          <li>
            <a href='/project'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
