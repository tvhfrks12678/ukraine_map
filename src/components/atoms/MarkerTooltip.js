import { Tooltip } from 'react-leaflet';
import React from 'react';
import styles from './Atoms.module.css';

export const MarkerTooltip = (props) => {
  const explanation = props.explanation;

  return (
    <Tooltip>
      <div className={styles.markerTooltip}>{explanation}</div>
    </Tooltip>
  );
};
