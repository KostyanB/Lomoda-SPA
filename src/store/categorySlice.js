import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getGoods } from "./getGoodsSlice";

// store товаров
export const categoryAdapter = createEntityAdapter({
  selectId: category => category.category,
});

export const categorySlice = createSlice({
  name: "category",
  initialState: categoryAdapter.getInitialState(),
  extraReducers: builder => {
    builder.addCase(getGoods.fulfilled, categoryAdapter.setAll);
  },
});

export const {
  selectIds: selectCategory, // категории
} = categoryAdapter.getSelectors(state => state.category);

export default categorySlice.reducer;
