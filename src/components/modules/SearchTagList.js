import React from 'react';
import { SearchTag } from './SearchTag';

export const SearchTagList = (props) => {
  const tagList = props.searchTagList;
  return tagList.map((content, index) => {
    return <SearchTag tagName={content} key={index} />;
  });
};
