import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTweetMemos } from '../../stores/tweetMemosSlice';
import { fetchTweetMemos } from '../../stores/tweetMemosSlice';
import { SidebarIndex } from '../modules/SidebarIndex';
import { positionOfSelectedMakerInitialization } from '../../stores/positionOfSelectedMakerSlice';

export const TweetMemoIndex = () => {
  const dispatch = useDispatch();
  const tweetMemos = useSelector(selectAllTweetMemos);

  const tweetMemoStatus = useSelector((state) => state.tweetMemos.status);
  const error = useSelector((state) => state.tweetMemos.error);

  useEffect(() => {
    if (tweetMemoStatus === 'idle') {
      dispatch(fetchTweetMemos());
    }
    dispatch(positionOfSelectedMakerInitialization());
  }, [tweetMemoStatus, dispatch]);

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
