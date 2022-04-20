import { configureStore } from '@reduxjs/toolkit';
import tweetMemosReducer from './tweetMemosSlice';
import positionOfSelectedMakerSlice from './positionOfSelectedMakerSlice';

export const store = configureStore({
  reducer: {
    tweetMemos: tweetMemosReducer,
    positionOfSelectedMaker: positionOfSelectedMakerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
