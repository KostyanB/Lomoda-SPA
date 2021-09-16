import { createSlice } from "@reduxjs/toolkit";

export const showCartSlice = createSlice({
    name: 'showCart',
    initialState: {
        showCart: false
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