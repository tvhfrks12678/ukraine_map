import React from 'react';
import { MarkerData } from './MarkerData';
import { MarkerPopup } from './MarkerPopup';
import { POPUP_DB } from './PopupDb';

export const PopupList = () => {
  const data = POPUP_DB;

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
