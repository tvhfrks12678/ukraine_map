import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchTweetMemosByTag,
  selectAllTweetMemos,
} from '../../stores/tweetMemosSlice';
import { SidebarIndex } from '../modules/SidebarIndex';
import { positionOfSelectedMakerInitialization } from '../../stores/positionOfSelectedMakerSlice';

export const SidebarSearchTagIndex = () => {
  const dispatch = useDispatch();
  const tweetMemos = useSelector(selectAllTweetMemos);

  const params = useParams();
  const tag = params.tag;

  const tweetMemoStatus = useSelector((state) => state.tweetMemos.status);
  const error = useSelector((state) => state.tweetMemos.error);

  useEffect(() => {
    if (tweetMemoStatus === 'idle') {
      dispatch(fetchTweetMemosByTag(tag));
    }
    dispatch(positionOfSelectedMakerInitialization());
  }, [tweetMemoStatus, dispatch, tag]);

  let content = null;

  if (tweetMemoStatus === 'loading') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status"></div>
        <div className="sr-only">Loading...</div>
      </div>
    );
  } else if (tweetMemoStatus === 'succeeded') {
    if (tweetMemos.length === 0) {
      content = null;
    } else {
      content = <SidebarIndex tweetMemos={tweetMemos} />;
    }
  } else if (tweetMemoStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return content;
};
