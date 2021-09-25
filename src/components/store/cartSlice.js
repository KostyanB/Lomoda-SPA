import { createSlice } from "@reduxjs/toolkit";
import env from '../../env.json';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: env.initialStates.initCart
    },
    reducers: {
        addGood: (state, data) => {
            // const { id, size, color } = data.payload;
            state.cart.push(data.payload)
        },
        delGood: (state, data) => {
            const { id, size, color } = data.payload;
            const newCart = state.cart.filter(item => !(item.id === id && item.size === size && item.color === color));
            state.cart = newCart;
        },
        clearCart: (state, data) => {},
    }
});

export const { addGood, delGood, clearCart } = cartSlice.actions;
export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;