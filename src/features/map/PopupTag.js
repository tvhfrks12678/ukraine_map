import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { PopupDataListContext } from './MapBase';
import { TagSearchWordContext } from './MapBase';
import { POPUP_DB } from './PopupDb';

export const PopupTag = (props) => {
  const { setPopupDataList } = useContext(PopupDataListContext);
  const { setTagSearchWord } = useContext(TagSearchWordContext);
  const tag = props.tag;
  return (
    <Button
      variant="outline-info"
      size="sm"
      className="m-1"
      onClick={(e) => {
        setPopupDataList(getDataBy(tag));
        setTagSearchWord(tag);
      }}>
      {tag}
    </Button>
  );
};

const getDataBy = (tag) => {
  const data = POPUP_DB;

  const result = data.filter((item) => item.tags.includes(tag));

  return result;
};
