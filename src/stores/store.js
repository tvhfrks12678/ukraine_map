import { configureStore } from '@reduxjs/toolkit';
import markerPopupsReducer from './markerPopupsSlice';

export const store = configureStore({
  reducer: {
    markerPopups: markerPopupsReducer,
  },
});
