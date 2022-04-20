import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const Locations = () => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  return (
    <Wrapper apiKey={'AIzaSyDjZe_vk11_uwlWVFnu9RDHpfLlIcUGQq0'} render={render}>
      <YourComponent />
    </Wrapper>
  );
};

export default Locations;
