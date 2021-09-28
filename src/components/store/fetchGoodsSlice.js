import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../../env.json';

// запрос БД товаров с сервера
const {
    initGoods,
    initStatus,
    initError,
    initCategoryList
} = env.initialStates.goodsInit;

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

export const fetchGoodsSlice = createSlice({
    name: 'fetch',
    initialState: {
        goodsData: initGoods,
        status: initStatus,
        error: initError,
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
            // коллекция - список категорий
            const list = new Set();
            data.forEach(item => list.add(item.category));
            state.categoryList = [...list];
        },
        [ fetchGoods.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

// массив товаров
export const selectGoods = state => state.fetch.goodsData;
// массив категорий
export const selectCategoryList = state => state.fetch.categoryList;

export const selectError = state => state.fetch.error;
export const selectStatus = state => state.fetch.status;

export default fetchGoodsSlice.reducer;