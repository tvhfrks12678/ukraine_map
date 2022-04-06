import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchTagList } from '../modules/SearchTagList';

export const TweetMemoIndex = () => {
  const tweetMemos = useSelector((state) => state.tweetMemos);

  return tweetMemos.map((tweetMemo) => {
    const explanation = tweetMemo.explanation;
    const linkPath = `/post/${tweetMemo.id}`;
    return (
      <div className="text-truncate px-3 mb-2" key={tweetMemo.id}>
        <Link to={linkPath} className="link-dark">
          {explanation}
        </Link>
        <div className="d-flex justify-content-end">
          <SearchTagList searchTagList={tweetMemo.tags} />
        </div>
      </div>
    );
  });
};
