import { configureStore } from '@reduxjs/toolkit';
import tweetMemosReducer from './tweetMemosSlice';
import markerSelectSlice from './markerSelectSlice';

export const store = configureStore({
  reducer: {
    tweetMemos: tweetMemosReducer,
    markerSelect: markerSelectSlice,
  },
});
