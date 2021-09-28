import { configureStore } from '@reduxjs/toolkit';
import fetchGoodsReducer from './fetchGoodsSlice';
import goodsReducer from './goodsSlice';
import pageTitleReducer from './pageTitleSlice';
import selectedParamReducer from './selectedParamSlice';
import userCityReducer from './userCitySlice';
import buyButtonReducer from './buyButtonSlice';
import cartReducer from './cartSlice';
import sendButtonReducer from './sendButtonSlice';

export default configureStore({
    reducer: {
        fetch: fetchGoodsReducer,
        goods: goodsReducer,
        pageTitle: pageTitleReducer,
        selectedParam: selectedParamReducer,
        userCity: userCityReducer,
        buyButton: buyButtonReducer,
        cart: cartReducer,
        sendButton: sendButtonReducer,
    },
});