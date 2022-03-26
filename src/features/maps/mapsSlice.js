import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    longitude: '50.4925664',
    latitude: '30.365479',
    twitterId: '1504492667283062789',
    explanation: 'キーウ',
    tags: ['キーウ', '工場'],
  },
  {
    id: '2',
    longitude: '53.115596',
    latitude: '26.032273',
    twitterId: '1504408541100404736',
    explanation:
      'S-300またはS-400ミサイルシステム用ミサイルの輸送がBaranavichy（Brest地方）で目撃された。少なくとも8発のミサイルが「V」マークの付いたロシアのKamAZトラック2台で輸送された。ナンバープレートに第25地区（ロシア東部軍管区）が記載されていた',
    tags: ['S-300', 'ベラルーシ'],
  },
];

const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    mapAdded(state, action) {
      state.push(action.payload);
    },
    mapUpdated(state, action) {
      const { id, longitude, latitude, twitterId, explanation } =
        action.payload;
      const existingMap = state.find((map) => map.id === id);
      if (existingMap) {
        existingMap.longitude = longitude;
        existingMap.latitude = latitude;
        existingMap.twitterId = twitterId;
        existingMap.explanation = explanation;
      }
    },
  },
});

export const { mapAdded, mapUpdated } = mapsSlice.actions;

export default mapsSlice.reducer;
