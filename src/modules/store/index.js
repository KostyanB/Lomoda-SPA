import { configureStore } from '@reduxjs/toolkit';
import goodsListReducer from './goodsListSlice';
import goodPageReducer from './goodPageSlice';

export default configureStore({
    reducer: {
        goods: goodsListReducer,
        good: goodPageReducer,
    },
});