import { createSlice } from "@reduxjs/toolkit";

export const selectedGoodSlice = createSlice({
    name: 'selectedGood',
    initialState: {
        selectedColor: 'Выберите цвет',
        selectedSize: 'Выберите размер'
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

export const { setSelectedColor, setSelectedSize } = selectedGoodSlice.actions;
export const selectSelectedColor = state => state.selectedGood.selectedColor;
export const selectSelectedSize = state => state.selectedGood.selectedSize;

export default selectedGoodSlice.reducer;