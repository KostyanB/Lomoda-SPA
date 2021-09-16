import { createSlice } from "@reduxjs/toolkit";

const initialGood = () => {
    const localHash = localStorage.getItem('lomoda-hash');
    const init = (!localHash || ['men', 'women', 'kids', 'main'].some(item => item === localHash)) ?
        {} :
        goodArr.filter(item => (item.id === localHash))[0];

    return init;
};
const handleShowPage = value => {
    const pageType = (value === 'main') ? 'main' :
        (['men', 'women', 'kids'].some(item => item === value)) ? 'list' :
            'card';
    return pageType;
};

const handleHash = value => {
    setHash(value);
    localStorage.setItem('lomoda-hash', value);
    setShowPage(handleShowPage(value));
};

useEffect(() => {
    const localHash = localStorage.getItem('lomoda-hash');
    if (localHash) {
        setHash(localHash);
        setShowPage(handleShowPage(localHash));
    } else {
        handleHash('main');
    }
}, []);
export const hashSlice = createSlice({
    name: 'hash',
    initialState: {
        hash: undefined,
        showPage: 'main',
    },
    reducers: {
        setHash: (state, data) => {
            console.log('data: ', data);
            state.good = data.payload;
        }
    }
});

export const { setHash } = hashSlice.actions;
export const selectHash = state => state.hash.hash;
export const selectShowPage = state => state.hash.showPage;

export default hashSlice.reducer;