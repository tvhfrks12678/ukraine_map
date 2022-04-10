import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const markerSelectSlice = createSlice({
  name: 'markerSelect',
  initialState,
  reducers: {
    markerSelectAdded(state, action) {
      const positionSelected = action.payload;

      return positionSelected;
    },
    markerSelectInitialization() {
      return initialState;
    },
  },
});

export const { markerSelectAdded, markerSelectInitialization } =
  markerSelectSlice.actions;

export default markerSelectSlice.reducer;
