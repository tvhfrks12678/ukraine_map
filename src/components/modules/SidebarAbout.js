import React from 'react';
import { AboutRow } from '../atoms/SidebarAboutRow';

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
  return ABOUT_ROW_LIST.map((aboutRow, index) => {
    return <AboutRow aboutRow={aboutRow} key={index} />;
  });
};
