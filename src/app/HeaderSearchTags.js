import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export const HeaderSearchTags = () => {
  return (
    <header className="header border border-3">
      <label>地域:</label>
      <Button variant="outline-info" size="sm" className="m-1">
        {'キーウ'}
      </Button>
      <label>場所:</label>
      <Button variant="outline-info" size="sm" className="m-1">
        {'工場'}
      </Button>
      <label className="">兵器:</label>
      <Button variant="outline-info" size="sm" className="m-1">
        {'S-300'}
      </Button>
      <label>分類:</label>
      <Button variant="outline-info" size="sm" className="m-1">
        {'略奪'}
      </Button>
      {/* <Outlet /> */}
    </header>
  );
};
