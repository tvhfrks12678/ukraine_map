import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchTagList } from '../modules/SearchTagList';
import { mapContext } from '../organisms/Main';
import { useDispatch } from 'react-redux';
import { positionOfSelectedMakerInitialization } from '../../stores/positionOfSelectedMakerSlice';

const TWEET_MEMO_PATH = 'tweet-memo';

export const TweetMemoIndex = () => {
  const tweetMemos = useSelector((state) => state.tweetMemos);

  const { map } = useContext(mapContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(positionOfSelectedMakerInitialization());
  });

  const tweetMemoLinkClicked = (position) => {
    map.setView(position, map.getZoom());
  };

  return tweetMemos.map((tweetMemo) => {
    const explanation = tweetMemo.explanation;
    const linkPath = `/${TWEET_MEMO_PATH}/${tweetMemo.id}`;
    const potition = [tweetMemo.longitude, tweetMemo.latitude];

    return (
      <div className="text-truncate px-3 mb-2" key={tweetMemo.id}>
        <Link
          to={linkPath}
          className="link-dark"
          onClick={() => {
            tweetMemoLinkClicked(potition);
          }}>
          {explanation}
        </Link>
        <div className="d-flex justify-content-end">
          <SearchTagList searchTagList={tweetMemo.tags} />
        </div>
      </div>
    );
  });
};
