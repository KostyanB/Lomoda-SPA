import { configureStore } from '@reduxjs/toolkit';
import goodsListReducer from './goodsListSlice';
import goodPageReducer from './goodPageSlice';
import pageTitleReducer from './pageTitleSlice';
import pageNameReducer from './pageNameSlice';
import showCartReducer from './showCartSlice';
import selectedParamReducer from './selectedParamSlice';
import userCityReducer from './userCitySlice';
import hashSliceReducer from './hashSlice';

export default configureStore({
    reducer: {
        goods: goodsListReducer,
        good: goodPageReducer,
        pageTitle: pageTitleReducer,
        pageName: pageNameReducer,
        showCart: showCartReducer,
        selectedParam: selectedParamReducer,
        userCity: userCityReducer,
        hash: hashSliceReducer,

    },
});