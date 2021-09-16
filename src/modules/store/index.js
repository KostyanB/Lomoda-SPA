import { configureStore } from '@reduxjs/toolkit';
import goodsListReducer from './goodsListSlice';
import goodPageReducer from './goodPageSlice';
import pageTitleReducer from './pageTitleSlice';
import pageNameReducer from './pageNameSlice';
import showCartReducer from './showCartSlice';
import selectedGoodReducer from './selectedGoodSlice';
import userCityReducer from './userCitySlice';

export default configureStore({
    reducer: {
        goods: goodsListReducer,
        good: goodPageReducer,
        pageTitle: pageTitleReducer,
        pageName: pageNameReducer,
        showCart: showCartReducer,
        selectedGood: selectedGoodReducer,
        userCity: userCityReducer,

    },
});