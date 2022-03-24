import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { PopupList } from './PopupList';
import { POPUP_DB } from './PopupDb';

export const PopupDataListContext = React.createContext();

export const MapBase = () => {
  const position = [49.538899206736, 31.355015984449953];
  const [popupDataList, setPopupDataList] = useState(POPUP_DB);
  return (
    <PopupDataListContext.Provider value={{ popupDataList, setPopupDataList }}>
      <MapContainer
        center={position}
        zoom={6.4}
        scrollWheelZoom={false}
        style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PopupList popupDataList={popupDataList} />
      </MapContainer>
    </PopupDataListContext.Provider>
  );
};
