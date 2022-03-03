import { createSlice } from "@reduxjs/toolkit";
import env from "../env.json";

// тайтл страницы
export const pageTitleSlice = createSlice({
  name: "pageTitle",
  initialState: {
    pageTitle: env.initialStates.initPageTitle,
  },
  reducers: {
    setPageTitle: (state, data) => {
      state.pageTitle = data.payload;
      document.title = data.payload;
    },
  },
});

export const { setPageTitle } = pageTitleSlice.actions;
export const selectPageTitle = state => state.pageTitle.pageTitle;

export default pageTitleSlice.reducer;
