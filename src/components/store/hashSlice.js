import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initialStates";
import { setHashStorage } from '../Functions/handleStorage';

export const hashSlice = createSlice({
    name: 'hash',
    initialState: {
        hash: initialStates.initHash,
        showPage: initialStates.initShowPage,
    },
    reducers: {
        setHash: (state, data) => {
            state.hash = data.payload;
            setHashStorage(data.payload)
        },
        setShowPage: (state, data) => {
            state.showPage = data.payload;
        }
    }
});

export const { setHash, setShowPage } = hashSlice.actions;
export const selectHash = state => state.hash.hash;
export const selectShowPage = state => state.hash.showPage;

export default hashSlice.reducer;