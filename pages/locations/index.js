import React, { useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { locations } from '../../data/locations';
import Link from 'next/link';

const Locations = () => {
  const [chosenLocation, setChosenLocation] = useState('');
  return (
    <>
      <select
        name='locationName'
        onChange={e => setChosenLocation(e.target.value)}
      >
        <option selected='true'>Choose location...</option>
        {locations.map(location => (
          <option name={location.name} value={location.slug}>
            {location.name} - {location.city} - {location.country}
          </option>
        ))}
      </select>
      {chosenLocation && (
        <Link href={`/locations/${chosenLocation}`}>
          <a>Go to location</a>
        </Link>
      )}
    </>
  );
};

export default Locations;
