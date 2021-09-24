import { configureStore } from '@reduxjs/toolkit';
import goodsListReducer from './goodsListSlice';
import pageTitleReducer from './pageTitleSlice';
import showCartReducer from './showCartSlice';
import selectedParamReducer from './selectedParamSlice';
import userCityReducer from './userCitySlice';
import buyButtonReducer from './buyButtonSlice';

export default configureStore({
    reducer: {
        goods: goodsListReducer,
        pageTitle: pageTitleReducer,
        showCart: showCartReducer,
        selectedParam: selectedParamReducer,
        userCity: userCityReducer,
        buyButton: buyButtonReducer,
    },
});