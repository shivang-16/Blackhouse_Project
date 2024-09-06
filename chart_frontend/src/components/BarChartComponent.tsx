'use client'
import { fetchBarData } from "@/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const BarChartComponent = () => {
  const dispatch = useAppDispatch();
  
  const barChartData = useAppSelector((state) => state.bar.data);
  
  useEffect(() => {
    dispatch(fetchBarData());
  }, [dispatch]);

  const formattedData = barChartData?.labels.map((label: string, idx: number) => ({
    label,
    value: barChartData.data[idx],
  })) || [];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
