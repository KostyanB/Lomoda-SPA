import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../../env.json';

const { initCart, initCartBtnTitle, initShowCart, initOrderStatus, initOrderError, initCartTitle } = env.initialStates.cart;
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
            if(!response) throw new Error('Server error');
            return true;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: initCart,
        cartBtnTitle: initCartBtnTitle,
        showCart: initShowCart,
        orderStatus: initOrderStatus,
        orderError: initOrderError,
        cartTitle: initCartTitle,
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
        setCartBtnTitle: (state, data) => {
            state.cartBtnTitle = data.payload;
        },
        setShowCart: (state, data) => {
            state.showCart = data.payload;
        },
        setCartTitle: (state, data) => {
            state.cartTitle = data.payload;
        },
        clearCart: (state) => {},
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
            state.showCart = false;
        },
        [ sendOrder.rejected ]: (state, action) => {
            state.orderStatus = 'rejected';
            state.orderError = action.payload;
        }
    }
});

export const { addGood, delGood, clearCart, setCartBtnTitle, setShowCart, setCartTitle, setInputLabel } = cartSlice.actions;
export const selectCart = state => state.cart.cart;
export const selectCartBtnTitle = state => state.cart.cartBtnTitle;
export const selectShowCart = state => state.cart.showCart;
export const selectCartTitle = state => state.cart.cartTitle;
export const selectInputLabel = state => state.cart.inputLabel;

export default cartSlice.reducer;