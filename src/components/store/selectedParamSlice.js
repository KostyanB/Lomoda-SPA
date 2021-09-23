import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initialStates";

export const selectedParamSlice = createSlice({
    name: 'selectedParam',
    initialState: {
        selectedColor: initialStates.initSelectedColor,
        selectedSize: initialStates.initSelectedSize
    },
    reducers: {
        setSelectedColor: (state, data) => {
            state.selectedColor = data.payload;
        },
        setSelectedSize: (state, data) => {
            state.selectedSize = data.payload;
        }
    }
});

export const { setSelectedColor, setSelectedSize } = selectedParamSlice.actions;
export const selectSelectedColor = state => state.selectedParam?.selectedColor;
export const selectSelectedSize = state => state.selectedParam?.selectedSize;

export default selectedParamSlice.reducer;