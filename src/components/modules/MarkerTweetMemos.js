import React from 'react';
import { useSelector } from 'react-redux';
import { MarkerTweetMemo } from './MarkerTweetMemo';

export const MarkerTweetMemos = () => {
  const tweetMemos = useSelector((state) => state.tweetMemos);

  return tweetMemos.map((tweetMemo) => {
    return <MarkerTweetMemo tweetMemo={tweetMemo} key={tweetMemo.id} />;
  });
};
