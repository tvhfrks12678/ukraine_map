import React from 'react';
import { useSelector } from 'react-redux';
import { Marker } from 'react-leaflet';

export const MarkerSelected = () => {
  const markerSelectPosition = useSelector((state) => state.markerSelect);
  const downArrowIcon = window.L.icon({
    iconUrl: '/marker_down_arrow.svg',
    iconRetinaUrl: '/marker_down_arrow.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 71],
  });

  const markerSelected = () => {
    if (markerSelectPosition) {
      return (
        <Marker position={markerSelectPosition} icon={downArrowIcon}></Marker>
      );
    }
    return null;
  };

  return markerSelected();
};
