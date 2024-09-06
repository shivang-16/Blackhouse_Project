import { createSlice } from "@reduxjs/toolkit";

interface LineState {
  data: any;
}

const initialState: LineState = {
  data: null,
};

export const lineSlice = createSlice({
  name: "Line",
  initialState,
  reducers: {
    setLineData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLineData } = lineSlice.actions;
export default lineSlice.reducer;
