import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postDataInit } from '../../stores/markerPopupsSlice';
import { useNavigate } from 'react-router-dom';

export const IndexAllTag = () => {
  const dispatch = useDispatch();

  const onAllDisplayTagClicked = () => {
    dispatch(postDataInit());
  };

  const navigate = useNavigate();
  return (
    <Button
      variant="outline-info"
      size="sm"
      className="m-1"
      onClick={() => {
        onAllDisplayTagClicked();
        navigate('/');
      }}>
      {'すべて'}
    </Button>
  );
};
