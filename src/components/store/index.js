import { configureStore } from '@reduxjs/toolkit';
import goodsListReducer from './goodsListSlice';
import pageTitleReducer from './pageTitleSlice';
import selectedParamReducer from './selectedParamSlice';
import userCityReducer from './userCitySlice';
import buyButtonReducer from './buyButtonSlice';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        goods: goodsListReducer,
        pageTitle: pageTitleReducer,
        selectedParam: selectedParamReducer,
        userCity: userCityReducer,
        buyButton: buyButtonReducer,
        cart: cartReducer,
    },
});