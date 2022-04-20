import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { tweetMemosInitialization } from '../../stores/tweetMemosSlice';
import { useNavigate } from 'react-router-dom';

export const SearchTag = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const tagName = props.tagName;

  const onSearchTagClicked = () => {
    dispatch(tweetMemosInitialization());
    navigate(`/tag/${tagName}`);
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
