import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerPopups } from '../organisms/MarkerPopups';

export const MainContent = () => {
  const position = [49.538899206736, 31.355015984449953];
  const zoomInit = 6.4;
  const isscrollWheelZoom = false;
  const heightInit = '100vh';

  return (
    <MapContainer
      center={position}
      zoom={zoomInit}
      scrollWheelZoom={isscrollWheelZoom}
      style={{ height: heightInit }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPopups />
    </MapContainer>
  );
};
