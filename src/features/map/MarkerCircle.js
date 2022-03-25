import React, { useContext } from 'react';
import { Circle } from 'react-leaflet';
import { TagSearchWordContext } from './MapBase';

export const MarkerCircle = (props) => {
  const { tagSearchWord } = useContext(TagSearchWordContext);
  let radiusKm = 0;
  if (tagSearchWord === 'S-300') {
    radiusKm = 100;
  }
  if (tagSearchWord === 'Kalibr-NK') {
    radiusKm = 2000;
  }
  if (tagSearchWord === '火星17') {
    radiusKm = 15000;
  }

  if (!radiusKm) {
    return null;
  }

  return <Circle center={props.position} radius={radiusKm * 1000} />;
};
