import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import env from '../../env.json';

const { initGoods, initStatus, initError, initCategoryList } = env.initialStates.goodsInit;
const { dbUrl } = env.backend;

export const fetchGoods = createAsyncThunk (
    'goods/fetchGoods',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch(dbUrl);
            if(!response) throw new Error('Server error');
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const goodsAdapter = createEntityAdapter();

// const initialState = goodsAdapter.getInitialState();

export const fetchGoodsSlice = createSlice({
    name: 'fetch',
    initialState: {
        goodsData: initGoods,
        status: initStatus,
        error: initError,
        // goodsObj: initGoodsObj,
        categoryList: initCategoryList,
    },
    extraReducers: {
        [ fetchGoods.pending ]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [ fetchGoods.fulfilled ]: (state, action) => {
            const data = action.payload;
            state.status = 'success';
            state.goodsData = data;
            // data-> ассоциативный массив товаров
            // state.goodsObj = data.reduce((acc, item) => {
            //     acc[item['id']] = item;
            //     return acc;
            // }, {});
            // коллекция - список категорий
            const list = new Set();
            data.forEach(item => list.add(item.category));
            state.categoryList = [...list];
            // list.forEach(item => {
            //     const good = data.find(elem => elem.category === item);
            //     state.nameList[good.category] = good.catName;
            // });
        },
        [ fetchGoods.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

// массив товаров
export const selectGoods = state => state.fetch.goodsData;
// ассоциативный массив товаров
// export const selectGoodsObj = state => state.fetch.goodsObj;
// массив категорий
export const selectCategoryList = state => state.fetch.categoryList;
// массив категорий и их имен
// export const selectNameList = state => state.goods.nameList;
//
export const selectError = state => state.fetch.error;
//
export const selectStatus = state => state.fetch.status;
export default fetchGoodsSlice.reducer;