import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerTweetMemos } from '../modules/MarkerTweetMemos';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

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
      <MarkerTweetMemos />
    </MapContainer>
  );
};
