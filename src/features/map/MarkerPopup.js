import React from 'react';
import { Marker, Popup, Circle } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const MarkerPopup = (props) => {
  const mapData = props.mapData;
  const position = [mapData.longitude, mapData.latitude];
  const circle = CircleMarker(position, mapData.radiusKm);
  return (
    <Marker position={position}>
      <Popup>
        <TwitterTweetEmbed tweetId={mapData.twitterId} />
        {mapData.explanation}
      </Popup>
      {circle}
    </Marker>
  );
};

const CircleMarker = (position, radiusKm) => {
  if (radiusKm === 0) {
    return null;
  }
  return <Circle center={position} radius={radiusKm * 1000} />;
};
