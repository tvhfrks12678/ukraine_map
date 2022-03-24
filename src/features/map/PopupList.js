import React from 'react';
import { MarkerData } from './MarkerData';
import { MarkerPopup } from './MarkerPopup';

export const PopupList = (props) => {
  const data = props.popupDataList;

  const mapDataList = data.map((value) => {
    return new MarkerData({
      longitude: value.longitude,
      latitude: value.latitude,
      twitterId: value.twitterId,
      explanation: value.explanation,
      radiusKm: value.radiusKm,
      tags: value.tags,
    });
  });
  const list = mapDataList.map((mapData, index) => {
    return <MarkerPopup mapData={mapData} key={index} />;
  });
  return list;
};
