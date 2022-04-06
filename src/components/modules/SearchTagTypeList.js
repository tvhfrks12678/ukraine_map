import React from 'react';
import { SearchTagList } from './SearchTagList';

export const SearchTagTypeList = () => {
  const headerSearchTags = [
    {
      type: '地域',
      contentList: [
        'キーウ',
        'ヘルソン',
        'スームィ',
        'ベラルーシ',
        '黒海',
        'アゾフ海',
      ],
    },
    { type: '場所', contentList: ['工場', 'スーパー'] },
    { type: '兵器', contentList: ['S-300', 'T-72', '揚陸艦', 'Kalibr-NK'] },
    { type: '状況', contentList: ['略奪', '奪還', '破壊'] },
  ];

  return headerSearchTags.map((headerSearchTag, index) => {
    return (
      <span key={index} className="px-1">
        <label>{headerSearchTag.type}:</label>
        <SearchTagList searchTagList={headerSearchTag.contentList} />
      </span>
    );
  });
};
