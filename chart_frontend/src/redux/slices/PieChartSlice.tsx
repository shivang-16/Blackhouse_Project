import { createSlice } from "@reduxjs/toolkit";

interface PieState {
  data: any;
}

const initialState: PieState = {
  data: null,
};

export const pieSlice = createSlice({
  name: "pie",
  initialState,
  reducers: {
    setPieData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPieData } = pieSlice.actions;
export default pieSlice.reducer;
