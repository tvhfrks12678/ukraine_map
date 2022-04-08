import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tweetMemosInitialization } from '../../stores/tweetMemosSlice';

export const SideBarNav = () => {
  const dispatch = useDispatch();
  const allDisplayClicked = () => {
    dispatch(tweetMemosInitialization());
  };

  const root_path = '/';
  return (
    <>
      <Nav className="mb-4 mt-2 fw-bold">
        <Nav.Item>
          <Nav.Link as={NavLink} to={root_path} onClick={allDisplayClicked}>
            すべて一覧
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/about">
            サイト概要
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
