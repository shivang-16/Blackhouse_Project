'use client'
import { fetchLineData } from "@/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LineChartComponent = () => {
  const dispatch = useAppDispatch();
  const lineChartData = useAppSelector((state) => state.line.data);

  useEffect(() => {
    dispatch(fetchLineData());
  }, [dispatch]);

  const formattedData = lineChartData?.labels.map((label: string, idx: number) => ({
    label,
    value: lineChartData.data[idx],
  })) || [];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={formattedData}>
        <XAxis dataKey="label" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
