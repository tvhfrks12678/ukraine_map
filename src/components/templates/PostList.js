import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MAX_EXPLANATION_DISPLAY = 20;
const ABBREVIATION = '...';

export const PostList = () => {
  const markerPopups = useSelector((state) => state.markerPopups);

  return markerPopups.map((markerPopup) => {
    const explanation = getExplanationForDisplay(markerPopup.explanation);
    const linkPath = `/post/${markerPopup.id}`;
    return (
      <div key={markerPopup.id}>
        <div>
          <Link to={linkPath}>{explanation}</Link>
          <Button variant="outline-info" size="sm" className="m-1 small">
            <div className="small">破壊</div>
          </Button>
        </div>
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
