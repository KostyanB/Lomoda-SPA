import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initialStates";

const { initSelectedColor, initSelectedSize } = initialStates;

export const selectedParamSlice = createSlice({
    name: 'selectedParam',
    initialState: {
        selectedColor: initSelectedColor,
        selectedSize: initSelectedSize
    },
    reducers: {
        setSelectedColor: (state, data) => {
            state.selectedColor = data.payload;
        },
        setSelectedSize: (state, data) => {
            state.selectedSize = data.payload;
        },
        resetSelectors: (state) => {
            state.selectedColor = initSelectedColor;
            state.selectedSize = initSelectedSize;
        },
    }
});

export const { setSelectedColor, setSelectedSize, resetSelectors } = selectedParamSlice.actions;
export const selectSelectedColor = state => state.selectedParam?.selectedColor;
export const selectSelectedSize = state => state.selectedParam?.selectedSize;

export default selectedParamSlice.reducer;