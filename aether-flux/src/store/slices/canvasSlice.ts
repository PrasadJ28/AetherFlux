// src/store/slices/canvasSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ToolType = 'pointer' | 'hand' | 'rectangle' | 'circle' | 'text';

interface CanvasState {
  activeTool: ToolType;
  selectedShapeIds: string[];
}

const initialState: CanvasState = {
  activeTool: 'pointer',
  selectedShapeIds: [],
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    toolChanged: (state, action: PayloadAction<ToolType>) => {
      state.activeTool = action.payload;
    },
    shapesSelected: (state, action: PayloadAction<string[]>) => {
      state.selectedShapeIds = action.payload;
    },
    selectionCleared: (state) => {
      state.selectedShapeIds = [];
    },
  },
});

export const { toolChanged, shapesSelected, selectionCleared } = canvasSlice.actions;
export default canvasSlice.reducer;
