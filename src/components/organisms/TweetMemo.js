import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Organisms.module.css';
import { SearchTagList } from '../modules/SearchTagList';
import { useDispatch } from 'react-redux';
import { positionOfSelectedMakerAdded } from '../../stores/positionOfSelectedMakerSlice';
import {
  selectAllTweetMemos,
  tweetMemoSet,
} from '../../stores/tweetMemosSlice';
import { getDocs, query, where, documentId } from 'firebase/firestore';

import { ukraineInvasionMapsRef } from '../../utils/firebaseConfig';
import { TweetMemoEntity } from '../../entities/tweetMemos/TweetMemoEntity';

export const TweetMemo = () => {
  const [tweetMemo, setTweetMemo] = useState('');
  const dispatch = useDispatch();
  const tweetMemos = useSelector(selectAllTweetMemos);

  const params = useParams();
  const paramId = params.tweetMemoId;

  const getTweetMemoById = useCallback(async () => {
    const stateQuery = query(
      ukraineInvasionMapsRef,
      where(documentId(), '==', paramId)
    );

    const querySnapshot = await getDocs(stateQuery);

    const doc = querySnapshot.docs[0];

    return TweetMemoEntity.getByQueryDocumentSnapshot(doc);
  }, [paramId]);

  useEffect(() => {
    getTweetMemoById().then((tweetMemoById) => {
      setTweetMemo(tweetMemoById);
      window.twttr.ready(() => addtweetEmbedded(tweetMemoById.twitterId));

      if (tweetMemos.length === 0) {
        dispatch(tweetMemoSet(tweetMemoById));
      }
      dispatch(
        positionOfSelectedMakerAdded({
          longitude: tweetMemoById.longitude,
          latitude: tweetMemoById.latitude,
        })
      );
    });
  }, [getTweetMemoById, dispatch, tweetMemos]);

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
