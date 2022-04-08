import React from 'react';
import { Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

export const MarkerTweetMemo = (props) => {
  const tweetMemo = props.tweetMemo;
  const position = [tweetMemo.longitude, tweetMemo.latitude];

  const navigate = useNavigate();

  const markerCliked = (navigate) => {
    const tweetMemoId = tweetMemo.id;
    const tweetMemoPath = 'tweet-memo';
    navigate(`/${tweetMemoPath}/${tweetMemoId}`);
  };

  return (
    <Marker
      position={position}
      eventHandlers={{
        click: () => {
          markerCliked(navigate);
        },
      }}></Marker>
  );
};
