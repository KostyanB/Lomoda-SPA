import { createSlice } from '@reduxjs/toolkit';

const initPageTitle = 'Lomoda';

// тайтл страницы
export const pageTitleSlice = createSlice({
  name: 'pageTitle',
  initialState: {
    pageTitle: initPageTitle,
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
