import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { PopupList } from './PopupList';

const MapBase = () => {
  const position = [49.538899206736, 31.355015984449953];
  return (
    <MapContainer
      center={position}
      zoom={6.4}
      scrollWheelZoom={false}
      style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PopupList />
    </MapContainer>
  );
};

export default MapBase;
