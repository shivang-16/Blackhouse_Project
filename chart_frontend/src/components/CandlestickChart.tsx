'use client'
import { fetchCandlestickData } from "@/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";

const CandlestickChart = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.candlestick.data?.data);

  useEffect(() => {
    dispatch(fetchCandlestickData());
  }, [dispatch]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;
