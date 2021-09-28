import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchGoods } from './fetchGoodsSlice';

export const goodsAdapter = createEntityAdapter();

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: goodsAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(
            fetchGoods.fulfilled,
            goodsAdapter.setAll,
        );
    },
});

export const {
    selectById: selectGoodsById,
    selectIds: selectGoodsIds, //все id
    selectEntities: selectGoodsEntities, //!ассоциативный массив по id
    selectAll: selectAllGoods, //! массив всех товаров
    selectTotal: selectTotalGoods, //количество товаров
} = goodsAdapter.getSelectors((state) => state.goods);

export default goodsSlice.reducer;