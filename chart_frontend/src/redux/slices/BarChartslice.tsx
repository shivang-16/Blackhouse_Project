import { createSlice } from "@reduxjs/toolkit";

interface BarState {
  data: any;
}

const initialState: BarState = {
  data: null,
};

export const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    setBarData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setBarData } = barSlice.actions;
export default barSlice.reducer;
