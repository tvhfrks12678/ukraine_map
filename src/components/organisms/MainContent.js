import React, { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerTweetMemos } from '../modules/MarkerTweetMemos';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import { mapContext } from './Main';
import { PositionOfSelectedMaker } from '../atoms/PositionOfSelectedMaker';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

const INIT = {
  LONGITUDE: 49.538899206736,
  LATITUDE: 31.355015984449953,
  ZOOM: 6.4,
  IS_SCROLL_WHEEL_ZOOM: false,
  HEIGHT: '100vh',
};

export const MainContent = () => {
  const { setMap } = useContext(mapContext);

  const mapSettingInit = {
    center: [INIT.LONGITUDE, INIT.LATITUDE],
    zoom: INIT.ZOOM,
    whenCreated: setMap,
    scrollWheelZoom: INIT.IS_SCROLL_WHEEL_ZOOM,
    style: { height: INIT.HEIGHT },
  };

  return (
    <MapContainer {...mapSettingInit}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerTweetMemos />
      <PositionOfSelectedMaker />
    </MapContainer>
  );
};
