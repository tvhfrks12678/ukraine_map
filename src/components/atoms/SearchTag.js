import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { tweetMemosTagSearch } from '../../stores/tweetMemosSlice';
import { useNavigate } from 'react-router-dom';

const ROOT_PATH = '/';

export const SearchTag = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const tagName = props.tagName;

  const onSearchTagClicked = () => {
    dispatch(tweetMemosTagSearch(tagName));
    navigate(ROOT_PATH);
  };

  return (
    <Button
      variant="outline-info"
      size="sm"
      className="m-1"
      onClick={onSearchTagClicked}>
      {tagName}
    </Button>
  );
};
