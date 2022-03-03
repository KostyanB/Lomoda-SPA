import { configureStore } from "@reduxjs/toolkit";
import getGoodsReducer from "./getGoodsSlice";
import goodsReducer from "./goodsSlice";
import categoryReducer from "./categorySlice";
import pageTitleReducer from "./pageTitleSlice";
import selectedParamReducer from "./selectedParamSlice";
import userCityReducer from "./userCitySlice";
import buyButtonReducer from "./buyButtonSlice";
import cartReducer from "./cartSlice";
import sendButtonReducer from "./sendButtonSlice";

export default configureStore({
  reducer: {
    getGoods: getGoodsReducer,
    goods: goodsReducer,
    category: categoryReducer,
    pageTitle: pageTitleReducer,
    selectedParam: selectedParamReducer,
    userCity: userCityReducer,
    buyButton: buyButtonReducer,
    cart: cartReducer,
    sendButton: sendButtonReducer,
  },
});
