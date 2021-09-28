import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../../env.json';
import { getCartStorage, setCartStorage, clearCartStorage } from '../Functions/handleStorage';

// корзина товаров
const {
    initCart,
    initCartBtnTitle,
    initShowCart,
    initShowOrder,
    initShowMessage,
    initOrderStatus,
    initOrderError,
    initCartTitle,
    initMessage
} = env.initialStates.cart;

const initOrder = (getCartStorage()) ? getCartStorage() : initCart;

const { sendUrl } = env.backend;



export const sendOrder = createAsyncThunk (
    'cart/sendOrder',
    async function(data, {rejectWithValue}) {
        try {
            const response = await fetch(sendUrl, {
                method: 'POST',
                header: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if(!response.ok) throw new Error('Server error');
            const res = response.text();
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: initOrder,
        cartBtnTitle: initCartBtnTitle,
        showCart: initShowCart,
        showOrder: initShowOrder,
        showMessage: initShowMessage,
        orderStatus: initOrderStatus,
        orderError: initOrderError,
        cartTitle: initCartTitle,
        message: initMessage,
    },
    reducers: {
        addGood: (state, data) => {
            const { size, color } = data.payload;
            if (size === env.initialStates.initSelectedSize) data.payload.size = '-';
            if (color === env.initialStates.initSelectedColor) data.payload.color = '-';
            state.cart.push(data.payload);
            setCartStorage(state.cart);
        },
        delGood: (state, data) => {
            const { id, size, color } = data.payload;
            const newCart = state.cart.filter(item => !(item.id === id && item.size === size && item.color === color));
            state.cart = newCart;
            setCartStorage(newCart);
        },
        setCartBtnTitle: (state, data) => {
            state.cartBtnTitle = data.payload;
        },
        setShowCart: (state, data) => {
            state.showCart = data.payload;
        },
        setCartTitle: (state, data) => {
            state.cartTitle = data.payload;
        },
        resetCart: (state) => {
            state.showOrder = true;
            state.showMessage = false;
            state.message = initMessage;
        },
    },
    extraReducers: {
        [ sendOrder.pending ]: state => {
            state.orderStatus = 'loading';
            state.orderError = null;
        },
        [ sendOrder.fulfilled ]: (state) => {
            state.orderStatus = 'success';
            state.orderError = null;
            state.showOrder = false;
            state.showMessage = true;
            state.cart = initCart;
            clearCartStorage();
        },
        [ sendOrder.rejected ]: (state, action) => {
            state.orderStatus = 'rejected';
            state.orderError = action.payload;
            state.message = `Ошибка: ${action.payload}. Попробуйте повторить позже.`;
            state.showOrder = false;
            state.showMessage = true;
        }
    }
});

export const {
    addGood,
    delGood,
    resetCart,
    setCartBtnTitle,
    setShowCart,
    setCartTitle,
} = cartSlice.actions;

// корзина
export const selectCart = state => state.cart.cart;
// заголовок кнопки корзина в субхедере
export const selectCartBtnTitle = state => state.cart.cartBtnTitle;
// показ корзины/заказа/сообщения
export const selectShowCart = state => state.cart.showCart;
export const selectShowOrder = state => state.cart.showOrder;
export const selectShowMessage = state => state.cart.showMessage;
// заголовок корзины
export const selectCartTitle = state => state.cart.cartTitle;
// сообщение об отправке
export const selectMessage = state => state.cart.message;

export default cartSlice.reducer;