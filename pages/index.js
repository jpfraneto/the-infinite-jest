import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import EdibleCard from '../components/EdibleCard';
import { quotes } from '../data/quotes';

export default function Home() {
  const [aloja, setAloja] = useState(null);
  const [randomQuote, setRandomQuote] = useState('');
  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handleClick = async () => {
    try {
      const reqOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      };
      const response = await fetch('http://localhost:3000/api', reqOptions);
      const data = await response.json();
      setAloja(data);
    } catch (error) {
      console.log(error);
      console.log('there was an error fetching the api route');
    }
  };
  return (
    <div className={styles.mainContainer}>
      <h4>"{randomQuote}"</h4>
      <h2>We strive to create full-on experiences that transform lives</h2>
      <div className={styles.ediblesContainer}>
        <EdibleCard />
        <EdibleCard />
        <EdibleCard />
      </div>
    </div>
  );
}
