import React from 'react';
import { useSelector } from 'react-redux';
import { MarkerPopup } from '../modules/MarkerPopup';

export const MarkerPopups = () => {
  const markerPopups = useSelector((state) => state.markerPopups);

  return markerPopups.map((markerPopup) => {
    return <MarkerPopup markerPopup={markerPopup} key={markerPopup.id} />;
  });
};
