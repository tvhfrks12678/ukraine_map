import React from 'react';
import { useSelector } from 'react-redux';
import { MarkerTweetMemo } from './MarkerTweetMemo';
import { selectAllTweetMemos } from '../../stores/tweetMemosSlice';

export const MarkerTweetMemos = () => {
  const tweetMemos = useSelector(selectAllTweetMemos);

  if (tweetMemos.length === 0) {
    return null;
  }

  return tweetMemos.map((tweetMemo) => {
    return <MarkerTweetMemo tweetMemo={tweetMemo} key={tweetMemo.id} />;
  });
};
