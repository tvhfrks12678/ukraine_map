import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Organisms.module.css';
import { SearchTagList } from '../modules/SearchTagList';
import { useDispatch } from 'react-redux';
import { markerSelectAdded } from '../../stores/markerSelectSlice';

export const TweetMemo = () => {
  const params = useParams();
  const paramId = params.tweetMemoId;

  const tweetMemos = useSelector((state) => state.tweetMemos);
  const tweetMemo = tweetMemos.find((mono) => mono.id === paramId);

  const dispatch = useDispatch();

  const positionSelected = [tweetMemo.longitude, tweetMemo.latitude];

  useEffect(() => {
    window.twttr.ready(() => addtweetEmbedded(tweetMemo.twitterId));

    dispatch(markerSelectAdded(positionSelected));
  });

  return (
    <>
      <div className={styles.tweetMemoExplation}>
        <label className="fw-bold">メモ</label>
        <br />
        {tweetMemo.explanation}
        <br />
      </div>
      <div className="d-flex justify-content-center">
        <div id="loadingTweetEmbedded"></div>
      </div>
      <div id="tweetEmbeddedContainer"></div>
      <div className="py-2 d-flex justify-content-end">
        <SearchTagList searchTagList={tweetMemo.tags} />
      </div>
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
