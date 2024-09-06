'use client'
import { fetchPieData } from "@/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = () => {
  const dispatch = useAppDispatch();
  const pieChartData = useAppSelector((state) => state.pie.data);

  useEffect(() => {
    dispatch(fetchPieData());
  }, [dispatch]);

  const formattedData = pieChartData?.labels.map((label: string, idx: number) => ({
    name: label,
    value: pieChartData.data[idx],
  })) || [];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={formattedData} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {formattedData.map((entry:any, index:any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
