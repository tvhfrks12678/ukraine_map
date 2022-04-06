import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { tweetMemosTagSearch } from '../../stores/tweetMemosSlice';
import { useNavigate } from 'react-router-dom';

export const SearchTag = (props) => {
  const tagName = props.tagName;

  const dispatch = useDispatch();

  const onSearchTagClicked = (searchTag) => {
    dispatch(tweetMemosTagSearch(searchTag));
    navigate('/');
  };

  const navigate = useNavigate();
  return (
    <Button
      variant="outline-info"
      size="sm"
      className="m-1"
      onClick={() => {
        onSearchTagClicked(tagName);
      }}>
      {tagName}
    </Button>
  );
};
