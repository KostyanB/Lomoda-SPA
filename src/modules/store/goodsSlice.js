import { createSlice } from "@reduxjs/toolkit";
import goodArr from '../../db/db.json';

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: goodArr
    },
    reducers: {

    }
});

export const {} = goodsSlice.actions;
export const selectGoods = state => state.goods.goods;

export const selectGoodsLists =  state => {
    const goodsList = state.goods.goods,
        menList = state.goods.goods.filter(el => el.category === 'men'),
        womenList = state.goods.goods.filter(el => el.category === 'women'),
        kidsList = state.goods.goods.filter(el => el.category === 'kids');
    const categoryList = new Set();
    goodsList.forEach(item => categoryList.add(item.category))
    return { goodsList, menList, womenList, kidsList, categoryList };
};
export default goodsSlice.reducer;