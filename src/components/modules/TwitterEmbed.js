import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const TwitterEmbed = (props) => {
  const tweetId = props.tweetId;
  return <TwitterTweetEmbed tweetId={tweetId} />;
};
