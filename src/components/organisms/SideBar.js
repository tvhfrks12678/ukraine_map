import React from 'react';
import { SideBarNav } from '../modules/SideBarNav';
import { Outlet } from 'react-router-dom';

export const SideBar = () => {
  return (
    <>
      <SideBarNav />
      <Outlet />
    </>
  );
};
