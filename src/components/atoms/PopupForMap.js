import React from 'react';
import { Popup } from 'react-leaflet';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const PopupForMap = (props) => {
  const markerPopup = props.markerPopup;

  return (
    <Popup maxWidth="800">
      <TwitterTweetEmbed tweetId={markerPopup.twitterId} />
      {markerPopup.explanation}
      <br />
      <br />
    </Popup>
  );
};
