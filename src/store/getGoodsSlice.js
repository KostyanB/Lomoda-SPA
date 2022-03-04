import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStates = {
  initGoods: [],
  initStatus: null,
  initError: null,
};

export const getGoods = createAsyncThunk(
  "getGoods/fetchGoods",
  async function (url, { rejectWithValue }) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Server error");
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getGoodsSlice = createSlice({
  name: "getGoods",
  initialState: {
    goodsData: initialStates.initGoods,
    status: initialStates.initStatus,
    error: initialStates.initError,
  },
  reducers: {},
  extraReducers: {
    [getGoods.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [getGoods.fulfilled]: (state, action) => {
      state.status = "success";
      state.goodsData = action.payload;
    },
    [getGoods.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// массив товаров
export const selectGoods = state => state.getGoods.goodsData;

export const selectError = state => state.getGoods.error;
export const selectStatus = state => state.getGoods.status;

export default getGoodsSlice.reducer;
