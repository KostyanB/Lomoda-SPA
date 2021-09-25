import { createSlice } from "@reduxjs/toolkit";
import env from '../../env.json';

export const showCartSlice = createSlice({
    name: 'showCart',
    initialState: {
        showCart: env.initialStates.initShowCart
    },
    reducers: {
        setShowCart: (state, data) => {
            state.showCart = data.payload;
        }
    }
});

export const { setShowCart } = showCartSlice.actions;
export const selectShowCart = state => state.showCart.showCart;

export default showCartSlice.reducer;