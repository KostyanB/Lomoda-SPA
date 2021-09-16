import { createSlice } from "@reduxjs/toolkit";

export const pageNameSlice = createSlice({
    name: 'pageName',
    initialState: {
        pageName: ''
    },
    reducers: {
        setPageName: (state, data) => {
            state.pageName = data.payload;
        }
    }
});

export const { setPageName } = pageNameSlice.actions;
export const selectPageName = state => state.pageName.pageName;

export default pageNameSlice.reducer;