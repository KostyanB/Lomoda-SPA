import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initialStates";

export const pageTitleSlice = createSlice({
    name: 'pageTitle',
    initialState: {
        pageTitle: initialStates.initPageTitle
    },
    reducers: {
        setPageTitle: (state, data) => {
            state.pageTitle = data.payload;
            document.title = data.payload;
        }
    }
});

export const { setPageTitle } = pageTitleSlice.actions;
export const selectPageTitle = state => state.pageTitle.pageTitle;

export default pageTitleSlice.reducer;