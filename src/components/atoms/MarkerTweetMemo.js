import React from 'react';
import { Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

export const MarkerTweetMemo = (props) => {
  const tweetMemo = props.tweetMemo;
  const position = [tweetMemo.longitude, tweetMemo.latitude];

  const navigate = useNavigate();

  const postId = tweetMemo.id;

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
