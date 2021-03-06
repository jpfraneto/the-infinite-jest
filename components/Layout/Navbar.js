import { useState } from 'react';
import styles from './Navbar.module.css';
import { TiThMenu } from 'react-icons/ti';
import Link from 'next/link';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <Link href='/'>
        <a className={styles.brandName}>The Infinite Jest</a>
      </Link>

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
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/locations'>
            <a>Locations</a>
          </Link>
          <Link href='/project'>
            <a>About</a>
          </Link>
          <Link href='/coworking'>
            <a>CoWorking</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
