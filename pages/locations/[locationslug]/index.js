import React from 'react';
import { locations } from '../../../data/locations';
import styles from '../../../styles/Location.module.css';

export async function getStaticPaths() {
  const paths = locations.map(location => {
    return { params: { locationslug: location.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisLocation = locations.find(x => params.locationslug === x.slug);
  return { props: { thisLocation } };
}

export default function Location({ thisLocation }) {
  return (
    <div>
      <div className={styles.secondaryNav}>
        <div className={styles.leftSecondaryNav}>
          {thisLocation.name} - {thisLocation.city} - {thisLocation.country}
        </div>
        <div className={styles.rightSecondaryNav}>
          <a href='?billetera'>Billetera</a>
          <a href='?miembros'>Miembros</a>
          <a href='?calendario'>Calendario</a>
        </div>
      </div>
      <h2>This is the dashboard for {thisLocation.name}</h2>
    </div>
  );
}
