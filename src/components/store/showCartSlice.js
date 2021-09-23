import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initialStates";

export const showCartSlice = createSlice({
    name: 'showCart',
    initialState: {
        showCart: initialStates.initShowCart
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