import React from 'react';
import { SearchTag } from '../atoms/SearchTag';

export const SearchTagList = (props) => {
  const tagList = props.searchTagList;
  if (!tagList) {
    return null;
  }
  return tagList.map((content, index) => {
    return <SearchTag tagName={content} key={index} />;
  });
};
