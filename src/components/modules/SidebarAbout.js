import React, { useEffect } from 'react';
import { AboutRow } from '../atoms/SidebarAboutRow';
import { useDispatch } from 'react-redux';
import { markerSelectInitialization } from '../../stores/markerSelectSlice';

const ABOUT_ROW_LIST = [
  {
    item: '概要',
    content:
      'ロシアのウクライナ全面侵略に関する地図とTwitterを利用した個人的なメモサイト',
  },
  {
    item: '技術',
    content:
      'React、React Leaflet、Redux、React Router、React-Bootstrap、Vercel',
  },
  {
    item: '制作時間',
    content: '約40時間',
  },
  {
    item: 'GitHub',
    content: 'https://github.com/tvhfrks12678/ukraine_map',
  },
];

export const SidebarAbout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(markerSelectInitialization());
  });

  return ABOUT_ROW_LIST.map((aboutRow, index) => {
    return <AboutRow aboutRow={aboutRow} key={index} />;
  });
};
