import React from 'react';
import { Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { MarkerTooltip } from '../atoms/MarkerTooltip';

const TWEET_MEMO_PATH = 'tweet-memo';

export const MarkerTweetMemo = (props) => {
  const navigate = useNavigate();

  const tweetMemo = props.tweetMemo;
  const position = [tweetMemo.longitude, tweetMemo.latitude];

  const markerCliked = () => {
    const tweetMemoId = tweetMemo.id;
    navigate(`/${TWEET_MEMO_PATH}/${tweetMemoId}`);
  };

  return (
    <Marker
      position={position}
      eventHandlers={{
        click: markerCliked,
      }}>
      <MarkerTooltip explanation={tweetMemo.explanation} />
    </Marker>
  );
};
