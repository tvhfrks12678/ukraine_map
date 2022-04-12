import { createSlice } from '@reduxjs/toolkit';

const initialState = { longitude: null, latitude: null };

const positionOfSelectedMakerSlice = createSlice({
  name: 'positionOfSelectedMaker',
  initialState,
  reducers: {
    positionOfSelectedMakerAdded(state, action) {
      const { longitude, latitude } = action.payload;

      return { longitude: longitude, latitude: latitude };
    },
    positionOfSelectedMakerInitialization() {
      return initialState;
    },
  },
});

export const {
  positionOfSelectedMakerAdded,
  positionOfSelectedMakerInitialization,
} = positionOfSelectedMakerSlice.actions;

export default positionOfSelectedMakerSlice.reducer;
