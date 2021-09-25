import { createSlice } from "@reduxjs/toolkit";
import env from '../../env.json';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: env.initialStates.initCart,
        cartTitle: env.initialStates.initCartTitle,
        showCart: env.initialStates.initShowCart,
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
    }
});

export const { addGood, delGood, clearCart, setCartTitle, setShowCart } = cartSlice.actions;
export const selectCart = state => state.cart.cart;
export const selectCartTitle = state => state.cart.cartTitle;
export const selectShowCart = state => state.cart.showCart;

export default cartSlice.reducer;