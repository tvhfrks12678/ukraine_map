import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchTagList } from '../modules/SearchTagList';
import { mapContext } from '../templates/Main';
import { useDispatch } from 'react-redux';
import { markerSelectInitialization } from '../../stores/markerSelectSlice';

export const TweetMemoIndex = () => {
  const tweetMemos = useSelector((state) => state.tweetMemos);

  const { map } = useContext(mapContext);

  const tweetMemoLinkClicked = (position) => {
    map.setView(position, map.getZoom());
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(markerSelectInitialization());
  });

  return tweetMemos.map((tweetMemo) => {
    const explanation = tweetMemo.explanation;
    const linkPath = `/tweet-memo/${tweetMemo.id}`;
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
