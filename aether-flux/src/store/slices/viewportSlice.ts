//we are avoiding slices for events as it will cause unnecessary re renders instead we will be using ref
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ViewportState {
  width: number;
  height: number;
  x: number;
  y: number;
  scale: number;
}

const initialState: ViewportState = {
  width: window.innerWidth,
  height: window.innerHeight,
  x: 0,
  y: 0,
  scale: 1,
};

const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    windowResized: (state, action: PayloadAction<{ width: number; height: number}>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    cameraPanned: (state, action: PayloadAction<{x: number; y: number}>) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
    cameraZoomed: (state, action: PayloadAction<{scale: number; x: number; y: number}>) => {
      state.scale = action.payload.scale;
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
});

export const {windowResized, cameraPanned, cameraZoomed} = viewportSlice.actions;
export default viewportSlice.reducer;
