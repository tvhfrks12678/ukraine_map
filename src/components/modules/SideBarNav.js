import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tweetMemosInitialization } from '../../stores/tweetMemosSlice';

const ALL_INDEX_TEXT = 'すべて一覧';
const SITE_SUMMARY_TEXT = 'サイト概要';

export const SideBarNav = () => {
  const dispatch = useDispatch();
  const allDisplayClicked = () => {
    dispatch(tweetMemosInitialization());
  };

  const root_path = '/';
  return (
    <>
      <Nav className="mb-3 mt-2 fw-bold">
        <Nav.Item>
          <Nav.Link as={NavLink} to={root_path} onClick={allDisplayClicked}>
            {ALL_INDEX_TEXT}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/about">
            {SITE_SUMMARY_TEXT}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
