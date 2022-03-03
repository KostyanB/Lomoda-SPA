import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from "../env.json";
import {
  getCartStorage,
  setCartStorage,
  clearCartStorage,
} from "../functions/handleStorage";

// init корзины товаров
const {
  initCart,
  initShowOrder,
  initShowMessage,
  initOrderStatus,
  initOrderError,
  initMessage,
} = env.initialStates.cart;

const { initSelectedColor, initSelectedSize } = env.initialStates.selectedParam;

// проверка LocalStorage на наличие товаров
const initOrder = getCartStorage() ? getCartStorage() : initCart;
// отправка заказа
export const sendOrder = createAsyncThunk(
  "cart/sendOrder",
  async function (data, { rejectWithValue }) {
    try {
      const response = await fetch(env.backend.sendUrl, {
        method: "POST",
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Server error");
      const res = response.text();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// корзина
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: initOrder,
    showOrder: initShowOrder,
    showMessage: initShowMessage,
    orderStatus: initOrderStatus,
    orderError: initOrderError,
    message: initMessage,
  },
  reducers: {
    addGood: {
      reducer: (state, data) => {
        state.cart.push(data.payload);
        setCartStorage(state.cart);
      },
      prepare: ({ id, size, color }) => {
        const newSize = size === initSelectedSize ? "-" : size,
          newColor = color === initSelectedColor ? "-" : color;
        return {
          payload: {
            id: id,
            size: newSize,
            color: newColor,
          },
        };
      },
    },
    delGood: (state, data) => {
      const { id, size, color } = data.payload;
      state.cart = state.cart.filter(
        item => !(item.id === id && item.size === size && item.color === color)
      );
      setCartStorage(state.cart);
    },
    resetCart: state => {
      state.showOrder = true;
      state.showMessage = false;
      state.message = initMessage;
    },
  },
  extraReducers: {
    [sendOrder.pending]: state => {
      state.orderStatus = "loading";
      state.orderError = null;
    },
    [sendOrder.fulfilled]: state => {
      state.orderStatus = "success";
      state.orderError = null;
      state.showOrder = false;
      state.showMessage = true;
      state.cart = initCart;
      clearCartStorage();
    },
    [sendOrder.rejected]: (state, action) => {
      state.orderStatus = "rejected";
      state.orderError = action.payload;
      state.message = `Ошибка: ${action.payload}. Попробуйте повторить позже.`;
      state.showOrder = false;
      state.showMessage = true;
    },
  },
});

export const { addGood, delGood, resetCart, setCartTitle } = cartSlice.actions;

// корзина
export const selectCart = state => state.cart.cart;
// показ корзины/заказа/сообщения
export const selectShowOrder = state => state.cart.showOrder;
export const selectShowMessage = state => state.cart.showMessage;
// сообщение об отправке
export const selectMessage = state => state.cart.message;

export default cartSlice.reducer;
