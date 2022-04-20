import React, { useContext } from 'react';
import { PATH } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { SearchTagList } from './SearchTagList';
import { mapContext } from '../organisms/Main';

export const SidebarIndex = (props) => {
  const tweetMemos = props.tweetMemos;
  const { map } = useContext(mapContext);

  const tweetMemoLinkClicked = (position) => {
    map.setView(position, map.getZoom());
  };

  const content = tweetMemos.map((tweetMemo) => {
    const tweetMemoId = tweetMemo.id;
    const explanation = tweetMemo.explanation;
    const linkPath = `${PATH.TWEET_MEMO}${tweetMemoId}`;
    const potition = [tweetMemo.longitude, tweetMemo.latitude];

    return (
      <div className="text-truncate px-3 mb-2" key={tweetMemoId}>
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

  return content;
};
