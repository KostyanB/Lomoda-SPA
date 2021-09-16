import { createSlice } from "@reduxjs/toolkit";

const initialPageTitle = 'Lomoda';

export const pageTitleSlice = createSlice({
    name: 'pageTitle',
    initialState: {
        pageTitle: initialPageTitle
    },
    reducers: {
        setPageTitle: (state, data) => {
            state.pageTitle = data.payload;
        }
    }
});

export const { setPageTitle } = pageTitleSlice.actions;
export const selectPageTitle = state => state.pageTitle.pageTitle;

export default pageTitleSlice.reducer;