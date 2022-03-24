import React from 'react';
import { Marker, Popup, Circle } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export const MarkerPopup = (props) => {
  const mapData = props.mapData;
  const position = [mapData.longitude, mapData.latitude];
  const circle = CircleMarker(position, mapData.radiusKm);
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
      {circle}
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
    return (
      <Button
        variant="outline-info"
        size="sm"
        className="m-1"
        onClick={searchTag}
        key={index}>
        {tag}
      </Button>
    );
  });
  return popupTags;
};

const searchTag = () => {
  console.log('searchTag');
};

const CircleMarker = (position, radiusKm) => {
  if (radiusKm === 0) {
    return null;
  }
  return <Circle center={position} radius={radiusKm * 1000} />;
};
