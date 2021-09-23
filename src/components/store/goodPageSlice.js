import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initialStates";

export const goodPageSlice = createSlice({
    name: 'good',
    initialState: {
        good: initialStates.initGood
    },
    reducers: {
        setSelectedGood: (state, data) => {
            state.good = data.payload;
        }
    }
});

export const { setSelectedGood } = goodPageSlice.actions;
export const selectedGood = state => state.good.good;

export default goodPageSlice.reducer;