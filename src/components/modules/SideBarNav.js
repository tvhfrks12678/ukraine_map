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
      <Nav className="pb-2">
        <Nav.Item>
          <Nav.Link as={NavLink} to={root_path} onClick={allDisplayClicked}>
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
