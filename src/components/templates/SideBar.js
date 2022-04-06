import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { tweetMemosInitialization } from '../../stores/tweetMemosSlice';

export const SideBar = () => {
  const dispatch = useDispatch();
  const allData = () => {
    dispatch(tweetMemosInitialization());
  };
  return (
    <>
      <Nav defaultActiveKey="/home" className="pb-2">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" onClick={allData}>
            すべて表示
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link as={NavLink} to="/">
            このサイトについて
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
    </>
  );
};
