// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import viewportReducer from './slices/viewportSlice';
import canvasReducer from './slices/canvasSlice';

export const store = configureStore({
  reducer: {
    viewport: viewportReducer,
    canvas: canvasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
