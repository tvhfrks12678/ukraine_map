import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { SearchTagTypeList } from '../modules/SearchTagTypeList';

export const Header = () => {
  return (
    <Row>
      <div className="header border border-3 py-2">
        <SearchTagTypeList />
      </div>
    </Row>
  );
};
