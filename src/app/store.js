import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mapsReducer from '../features/maps/mapsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    maps: mapsReducer,
  },
});
