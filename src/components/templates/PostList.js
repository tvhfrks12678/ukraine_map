import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchTagList } from '../modules/SearchTagList';
import styles from './Templates.module.css';

export const PostList = () => {
  const markerPopups = useSelector((state) => state.markerPopups);

  return markerPopups.map((markerPopup) => {
    const explanation = markerPopup.explanation;
    const linkPath = `/post/${markerPopup.id}`;
    return (
      <div className={styles.listExplanation} key={markerPopup.id}>
        <Link to={linkPath} className="link-dark">
          {explanation}
        </Link>
        <div className="d-flex justify-content-end">
          <SearchTagList searchTagList={markerPopup.tags} />
        </div>
      </div>
    );
  });
};
