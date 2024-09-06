'use client'
import { fetchCandlestickData } from "@/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Cell,
  BarProps,
} from "recharts";

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickProps {
  fill?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  low: number;
  high: number;
  openClose: [number, number];
}

// Candlestick Component
const Candlestick: React.FC<CandlestickProps> = (props) => {
  const {
    fill,
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;

  const isGrowing = open < close;
  const color = isGrowing ? 'green' : 'red';
  const ratio = Math.abs(height / (open - close));

  return (
    <g stroke={color} fill="none" strokeWidth="2">
      <path
        d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
      />
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
        />
      )}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
        />
      )}
    </g>
  );
};

const CandlestickChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.candlestick.data?.data) || [];

  useEffect(() => {
    dispatch(fetchCandlestickData());
  }, [dispatch]);

  // Prepare Data for Candlestick Chart
  const prepareData = (data: CandlestickData[]) => {
    return data.map(({ open, close, ...other }) => ({
      ...other,
      openClose: [open, close],
    }));
  };

  const preparedData = prepareData(data);

  // Determine min and max values for YAxis
  const minValue = Math.min(...preparedData.map(d => Math.min(d.low, d.openClose[0], d.openClose[1])));
  const maxValue = Math.max(...preparedData.map(d => Math.max(d.high, d.openClose[0], d.openClose[1])));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={preparedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis domain={[minValue, maxValue]} />
        <Tooltip />
        <Bar
          dataKey="openClose"
          fill="#8884d8"
          shape={(props: any) => <Candlestick {...props} />}
        >
          {preparedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;
