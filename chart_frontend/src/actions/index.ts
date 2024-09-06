import apiClient from "@/apiClient/apiClient";
import { setBarData } from "../redux/slices/BarChartslice";
import { setCandlestickData } from "../redux/slices/CandlesticSlice";
import { setPieData } from "../redux/slices/PieChartSlice";
import { AppDispatch } from "../redux/store";
import { setLineData } from "@/redux/slices/LineChart";

export const fetchCandlestickData = () => async (dispatch: AppDispatch) => {
  try {
    const response = await apiClient.get("/api/candlestick-data");
    dispatch(setCandlestickData(response.data));
  } catch (error) {
    console.error("Error fetching candlestick data:", error);
  }
};

export const fetchPieData = () => async (dispatch: AppDispatch) => {
  try {
    const response = await apiClient.get("/api/pie-chart-data");
    dispatch(setPieData(response.data));
  } catch (error) {
    console.error("Error fetching pie data:", error);
  }
};

export const fetchBarData = () => async (dispatch: AppDispatch) => {
  try {
    const response = await apiClient.get("/api/bar-chart-data");
    dispatch(setBarData(response.data));
  } catch (error) {
    console.error("Error fetching bar data:", error);
  }
};

export const fetchLineData = () => async (dispatch: AppDispatch) => {
  try {
    const response = await apiClient.get("/api/line-chart-data");
    dispatch(setLineData(response.data));
  } catch (error) {
    console.error("Error fetching bar data:", error);
  }
};
