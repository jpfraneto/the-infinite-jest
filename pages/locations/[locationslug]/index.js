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

const Location = ({ thisLocation }) => {
  return (
    <div>
      <h2>This is the dashboard for {thisLocation.name}</h2>
    </div>
  );
};

export default Location;
