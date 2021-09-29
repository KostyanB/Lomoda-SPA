import { createSlice } from "@reduxjs/toolkit";
import env from '../../env.json';

const {
    initDisableBuyButton,
    buyButtonChecker,
    initBuyButtonText
} = env.initialStates.buyButton;

export const buyButtonSlice = createSlice({
    name: 'buyButton',
    initialState: {
        buyButtonChecker: buyButtonChecker,
        disableBuyButton: initDisableBuyButton,
        buyButtonText: initBuyButtonText,
    },
    reducers: {
        checkDisableBuy: (state) => {
            const check = !Object.values(state.buyButtonChecker).every(item => item);
            state.disableBuyButton = check;
        },
        setColorInit: (state, data) => {
            state.buyButtonChecker.checkColor = data.payload;
        },
        setSizeInit: (state, data) => {
            state.buyButtonChecker.checkSize = data.payload;
        },
        toggleBtnText: (state) => {
            const newText = (state.buyButtonText === 'Добавить в корзину') ?
                'Удалить из корзины' :
                    'Добавить в корзину';
            state.buyButtonText = newText;
        }
    }
});

export const {
    checkDisableBuy,
    setColorInit,
    setSizeInit,
    toggleBtnText
} = buyButtonSlice.actions;

export const selectDisableBuyButton = state => state.buyButton.disableBuyButton;
export const selectBuyButtonText = state => state.buyButton.buyButtonText;

export default buyButtonSlice.reducer;