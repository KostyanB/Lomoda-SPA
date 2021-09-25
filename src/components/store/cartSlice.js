import { createSlice } from "@reduxjs/toolkit";
import env from '../../env.json';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: env.initialStates.initCart
    },
    reducers: {
        addGood: (state, data) => {
            const { id, size, color } = data.payload;
            console.log('color: ', color);
            console.log('size: ', size);
            console.log('id: ', id);
        },
        delGood: (state, data) => {
            const { id, size, color } = data.payload;
            console.log('color: ', color);
            console.log('size: ', size);
            console.log('id: ', id);
        },
        clearCart: (state, data) => {},
    }
});

export const { addGood, delGood, clearCart } = cartSlice.actions;
export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;