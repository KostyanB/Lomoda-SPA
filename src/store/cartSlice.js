import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from '../env.json';
import { setCartStorage, clearCartStorage } from '../functions/handleStorage';

const initialStates = {
  initCart: [],
  initShowOrder: true,
  initShowMessage: false,
  initOrderStatus: null,
  initOrderError: null,
  initMessage: 'Спасибо за Ваш заказ!',
};

const { initSelectedColor, initSelectedSize } = env.initSelectors;

const checkValue = (str, checked) => (str === checked ? '-' : str);

const createPayload = ({ id, size, color }) => ({
  payload: {
    id: id,
    size: checkValue(size, initSelectedSize),
    color: checkValue(color, initSelectedColor),
  },
});

// отправка заказа
export const sendOrder = createAsyncThunk(
  'cart/sendOrder',
  async function (data, { rejectWithValue }) {
    try {
      const response = await fetch(env.backend.sendUrl, {
        method: 'POST',
        header: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Server error');
      const res = response.text();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// корзина
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: initialStates.initCart,
    showOrder: initialStates.initShowOrder,
    showMessage: initialStates.initShowMessage,
    orderStatus: initialStates.initOrderStatus,
    orderError: initialStates.initOrderError,
    message: initialStates.initMessage,
  },
  reducers: {
    addGood: {
      reducer: (state, data) => {
        state.cart.push(data.payload);
        setCartStorage(state.cart);
      },
      prepare: data => createPayload(data),
    },
    delGood: {
      reducer: (state, data) => {
        const { id, size, color } = data.payload;
        state.cart = state.cart.filter(
          item =>
            !(item.id === id && item.size === size && item.color === color),
        );
        setCartStorage(state.cart);
      },
      prepare: data => createPayload(data),
    },
    resetCart: state => {
      state.showOrder = true;
      state.showMessage = false;
      state.message = initialStates.initMessage;
    },
    setCardFromStorage: (state, data) => {
      state.cart = data.payload;
    },
  },
  extraReducers: {
    [sendOrder.pending]: state => {
      state.orderStatus = 'loading';
      state.orderError = null;
    },
    [sendOrder.fulfilled]: state => {
      state.orderStatus = 'success';
      state.orderError = null;
      state.showOrder = false;
      state.showMessage = true;
      state.cart = initialStates.initCart;
      clearCartStorage();
    },
    [sendOrder.rejected]: (state, action) => {
      state.orderStatus = 'rejected';
      state.orderError = action.payload;
      state.message = `Ошибка: ${action.payload}. Попробуйте повторить позже.`;
      state.showOrder = false;
      state.showMessage = true;
    },
  },
});

export const { addGood, delGood, resetCart, setCardFromStorage } =
  cartSlice.actions;

// корзина
export const selectCart = state => state.cart.cart;
// показ корзины/заказа/сообщения
export const selectShowOrder = state => state.cart.showOrder;
export const selectShowMessage = state => state.cart.showMessage;
// сообщение об отправке
export const selectMessage = state => state.cart.message;

export default cartSlice.reducer;
