import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import styles from './Templates.module.css';
import { SearchTagTypeList } from '../organisms/SearchTagTypeList';

export const Header = () => {
  return (
    <div className={styles.headerSearchTag}>
      <Row>
        <header className="header border border-3 py-2">
          <SearchTagTypeList />
        </header>
      </Row>
    </div>
  );
};
