import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../../env.json';

const { initCart, initCartTitle, initShowCart, initOrderStatus, initOrderError } = env.initialStates.cart;
const { sendUrl } = env.backend;

export const sendOrder = createAsyncThunk (
    'goods/sendOrder',
    async function(data, {rejectWithValue}) {
        try {
            const response = await fetch(sendUrl, {
                method: 'POST',
                header: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if(!response) throw new Error('Server error');
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: initCart,
        cartTitle: initCartTitle,
        showCart: initShowCart,
        orderStatus: initOrderStatus,
        orderError: initOrderError,
    },
    reducers: {
        addGood: (state, data) => {
            const { size, color } = data.payload;
            if (size === env.initialStates.initSelectedSize) data.payload.size = '-';
            if (color === env.initialStates.initSelectedColor) data.payload.color = '-';
            state.cart.push(data.payload)
        },
        delGood: (state, data) => {
            const { id, size, color } = data.payload;
            const newCart = state.cart.filter(item => !(item.id === id && item.size === size && item.color === color));
            state.cart = newCart;
        },
        setCartTitle: (state, data) => {
            state.cartTitle = data.payload;
        },
        setShowCart: (state, data) => {
            state.showCart = data.payload;
        },
        clearCart: (state, data) => {},
    },
    extraReducers: {
        [ sendOrder.pending ]: state => {
            state.orderStatus = 'loading';
            state.orderError = null;
        },
        [ sendOrder.fulfilled ]: state => {
            state.orderStatus = 'success';
            state.orderError = null;
            state.cart = initCart;
        },
        [ sendOrder.rejected ]: (state, action) => {
            state.orderStatus = 'rejected';
            state.orderError = action.payload;
        }
    }
});

export const { addGood, delGood, clearCart, setCartTitle, setShowCart } = cartSlice.actions;
export const selectCart = state => state.cart.cart;
export const selectCartTitle = state => state.cart.cartTitle;
export const selectShowCart = state => state.cart.showCart;

export default cartSlice.reducer;