import { createSlice } from '@reduxjs/toolkit';
import env from '../env.json';

const { initSelectedColor, initSelectedSize } = env.initSelectors;

const initSelectedId = '';

// фиксация параметров выбранного товара
export const selectedParamSlice = createSlice({
  name: 'selectedParam',
  initialState: {
    selectedColor: initSelectedColor,
    selectedSize: initSelectedSize,
    selectedId: initSelectedId,
  },
  reducers: {
    setSelectedColor: (state, data) => {
      state.selectedColor = data.payload;
    },
    setSelectedSize: (state, data) => {
      state.selectedSize = data.payload;
    },
    setSelectedId: (state, data) => {
      state.selectedId = data.payload;
    },
    resetSelectors: state => {
      state.selectedColor = initSelectedColor;
      state.selectedSize = initSelectedSize;
    },
  },
});

export const {
  setSelectedColor,
  setSelectedSize,
  setSelectedId,
  resetSelectors,
} = selectedParamSlice.actions;

// цвет, размер и id выбранного товара
export const selectSelectedColor = state => state.selectedParam?.selectedColor;
export const selectSelectedSize = state => state.selectedParam?.selectedSize;
export const selectSelectedId = state => state.selectedParam?.selectedId;

export default selectedParamSlice.reducer;
