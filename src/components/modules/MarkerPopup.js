import React from 'react';
import { Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

export const MarkerPopup = (props) => {
  const markerPopup = props.markerPopup;
  const position = [markerPopup.longitude, markerPopup.latitude];

  const navigate = useNavigate();

  const postId = markerPopup.id;

  return (
    <Marker
      position={position}
      eventHandlers={{
        click: () => {
          navigate(`/post/${postId}`);
        },
      }}></Marker>
  );
};
