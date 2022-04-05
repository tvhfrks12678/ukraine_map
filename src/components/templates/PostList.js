import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link, Nav } from 'react-router-dom';
import { SearchTagList } from '../modules/SearchTagList';
import styles from './Templates.module.css';

const MAX_EXPLANATION_DISPLAY = 100;
const ABBREVIATION = '...';

export const PostList = () => {
  const markerPopups = useSelector((state) => state.markerPopups);

  return markerPopups.map((markerPopup) => {
    const explanation = getExplanationForDisplay(markerPopup.explanation);
    const linkPath = `/post/${markerPopup.id}`;
    return (
      <div className={styles.listExplanation} key={markerPopup.id}>
        <Link to={linkPath} className="link-dark">
          {explanation}
        </Link>
        <div class="d-flex justify-content-end">
          <SearchTagList searchTagList={markerPopup.tags} />
        </div>
        {/* <Link to={linkPath} className="link-dark px-2">
          {'#破壊'}
        </Link> */}
        {/* <Button variant="outline-info" size="sm" className="m-1 small">
          <div className="small">破壊</div>
        </Button> */}
      </div>
    );
  });
};

const getExplanationForDisplay = (explanation) => {
  if (explanation.length < MAX_EXPLANATION_DISPLAY) {
    return explanation;
  }
  const explanationForDisplay = explanation.substring(
    0,
    MAX_EXPLANATION_DISPLAY
  );
  return `${explanationForDisplay}${ABBREVIATION}`;
};
