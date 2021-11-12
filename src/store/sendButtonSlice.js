import { createSlice } from "@reduxjs/toolkit";
import env from '../env.json';

const {
    initDisableSendButton,
    sendButtonChecker
} = env.initialStates.sendButton;

// управление отключением кнопки "отправить"
export const sendButtonSlice = createSlice({
    name: 'sendButton',
    initialState: {
        sendButtonChecker: sendButtonChecker,
        disableSendButton: initDisableSendButton,
    },
    reducers: {
        checkDisableSend: (state) => {
            const check = !Object.values(state.sendButtonChecker).every(item => item);
            state.disableSendButton = check;
        },
        setPhoneCheck: (state, data) => {
            state.sendButtonChecker.checkPhoneLength = data.payload;
        },
        setCartCheck: (state, data) => {
            state.sendButtonChecker.checkCartLength = data.payload;
        },
    }
});

export const {
    checkDisableSend,
    setPhoneCheck,
    setCartCheck
} = sendButtonSlice.actions;

export const selectDisableSendButton = state => state.sendButton.disableSendButton;

export default sendButtonSlice.reducer;