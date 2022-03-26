import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Organisms.module.css';
import { Button } from 'react-bootstrap';

export const Post = () => {
  const params = useParams();
  const paramId = params.postId;

  const markerPopups = useSelector((state) => state.markerPopups);
  const item = markerPopups.find((mono) => mono.id === paramId);

  useEffect(() => {
    window.twttr.ready(() => addtweetEmbedded(item.twitterId));
  });

  return (
    <>
      <div className={styles.postExplation}>
        <label className="fw-bold">メモ</label>
        <br />
        {item.explanation}
        <br />
      </div>
      <div className="d-flex justify-content-center">
        <div id="loadingTweetEmbedded"></div>
      </div>
      <div id="tweetEmbeddedContainer"></div>
      <Button variant="outline-info" size="sm" className="m-1">
        {'ベラルーシ'}
      </Button>
      <Button variant="outline-info" size="sm" className="m-1">
        {'北朝鮮'}
      </Button>
    </>
  );
};

const addtweetEmbedded = (tweetId) => {
  const tweetEmbeddedContainer = document.getElementById(
    'tweetEmbeddedContainer'
  );
  tweetEmbeddedContainer.innerHTML = '';
  const loadingTweetEmbedded = document.getElementById('loadingTweetEmbedded');
  loadingTweetEmbedded.classList.add('spinner-grow');
  loadingTweetEmbedded.classList.add('mt-3');

  window.twttr.widgets.createTweet(tweetId, tweetEmbeddedContainer).then(() => {
    loadingTweetEmbedded.classList.remove('spinner-grow');
    loadingTweetEmbedded.classList.remove('mt-3');
  });
};
