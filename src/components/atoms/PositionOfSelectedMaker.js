import React from 'react';
import { useSelector } from 'react-redux';
import { Marker } from 'react-leaflet';

const ICON = {
  DOWN_ARROW_IMAGE_PATH: '/marker_down_arrow.svg',
  SIZE: [30, 30],
  ANCHOR: [15, 71],
};

export const PositionOfSelectedMaker = () => {
  const positionOfSelectedMaker = useSelector(
    (state) => state.positionOfSelectedMaker
  );

  const downArrowPath = ICON.DOWN_ARROW_IMAGE_PATH;
  const iconForSelection = window.L.icon({
    iconUrl: downArrowPath,
    iconRetinaUrl: downArrowPath,
    iconSize: ICON.SIZE,
    iconAnchor: ICON.ANCHOR,
  });

  const markerForDisplay = () => {
    const longitude = positionOfSelectedMaker.longitude;
    if (longitude) {
      return (
        <Marker
          position={[longitude, positionOfSelectedMaker.latitude]}
          icon={iconForSelection}></Marker>
      );
    }
    return null;
  };

  return markerForDisplay();
};
