import { configureStore } from "@reduxjs/toolkit";
import  candlestickReducer from "./slices/CandlesticSlice";
import  pieReducer from "./slices/PieChartSlice";
import barReducer from "./slices/BarChartslice";
import lineReducer from "./slices/LineChart";


export const makeStore = () => {
  return configureStore({
    reducer: {
      candlestick: candlestickReducer,
      pie: pieReducer,
      bar: barReducer,
      line: lineReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
