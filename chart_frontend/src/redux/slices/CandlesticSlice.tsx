import { createSlice } from "@reduxjs/toolkit";

interface CandlestickState {
  data: any;
}

const initialState: CandlestickState = {
  data: null,
};

export const candlestickSlice = createSlice({
  name: "candlestick",
  initialState,
  reducers: {
    setCandlestickData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCandlestickData } = candlestickSlice.actions;
export default candlestickSlice.reducer;
