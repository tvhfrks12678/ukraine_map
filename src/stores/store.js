import { configureStore } from '@reduxjs/toolkit';
import tweetMemosReducer from './tweetMemosSlice';

export const store = configureStore({
  reducer: {
    tweetMemos: tweetMemosReducer,
  },
});
