import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStates = {
  initPromo: null,
  initStatus: null,
  initError: null,
};

export const getPromo = createAsyncThunk(
  "promo/fetchPromo",
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

export const promoSlice = createSlice({
  name: "promo",
  initialState: {
    promoDb: initialStates.initPromo,
    status: initialStates.initStatus,
    error: initialStates.initError,
  },
  reducers: {},
  extraReducers: {
    [getPromo.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [getPromo.fulfilled]: (state, action) => {
      state.status = "success";
      state.promoDb = action.payload;
    },
    [getPromo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// массив товаров
export const selectPromo = state => state.promo.promoDb;

export const selectError = state => state.promo.error;
export const selectStatus = state => state.promo.status;

export default promoSlice.reducer;
