import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export const SearchTag = (props) => {
  return (
    <Button variant="outline-info" size="sm" className="m-1">
      {props.tagName}
    </Button>
  );
};
