import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PopupTag } from './PopupTag';
import { MarkerCircle } from './MarkerCircle';

export const MarkerPopup = (props) => {
  const mapData = props.mapData;
  const position = [mapData.longitude, mapData.latitude];

  const tags = PopupTags(mapData.tags);
  return (
    <Marker position={position}>
      <Popup maxWidth="800">
        <TwitterTweetEmbed tweetId={mapData.twitterId} />
        {mapData.explanation}
        <br />
        <br />
        {tags}
      </Popup>
      <MarkerCircle position={position} />
    </Marker>
  );
};

const PopupTags = (tags) => {
  if (!tags) {
    return null;
  }
  if (!tags.length) {
    return null;
  }

  const popupTags = tags.map((tag, index) => {
    return <PopupTag tag={tag} key={index} />;
  });
  return popupTags;
};
