import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row } from 'react-bootstrap';
import { SearchTag } from '../modules/SearchTag';
import styles from './Templates.module.css';
import { useDispatch } from 'react-redux';
import { postTagSearch } from '../../stores/markerPopupsSlice';
import { postDataInit } from '../../stores/markerPopupsSlice';
import { useNavigate } from 'react-router-dom';
import { SearchTagTypeList } from '../organisms/SearchTagTypeList';

export const Header = () => {
  const dispatch = useDispatch();

  const onSearchTagClicked = (searchTag) => {
    dispatch(postTagSearch(searchTag));
  };

  const onAllDisplayTagClicked = () => {
    dispatch(postDataInit());
  };

  const navigate = useNavigate();

  return (
    <div className={styles.headerSearchTag}>
      <Row>
        <header className="header border border-3 py-2">
          <SearchTagTypeList />
          {/* <label>Default:</label>
          <Button
            variant="outline-info"
            size="sm"
            className="m-1"
            onClick={() => {
              onAllDisplayTagClicked();
              navigate('/');
            }}>
            {'全て'}
          </Button> */}
        </header>
      </Row>
    </div>
  );
};
