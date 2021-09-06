import { createSlice } from "@reduxjs/toolkit";
import goodArr from '../../db/db.json';

const initialGood = () => {
    const localHash = localStorage.getItem('lomoda-hash');
    const init = (!localHash || ['men', 'women', 'kids', 'main'].some(item => item === localHash)) ?
        {} :
        goodArr.filter(item => (item.id === localHash))[0];

    return init;
};

export const goodPageSlice = createSlice({
    name: 'good',
    initialState: {
        good: initialGood()
    },
    reducers: {
        goodPageSelect: (state, data) => {
            state.good = data.payload;
        }
    }
});

export const { goodPageSelect } = goodPageSlice.actions;
export const selectedGood = state => state.good.good;

export default goodPageSlice.reducer;