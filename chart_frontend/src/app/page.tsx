import CandlestickChart from "@/components/CandlestickChart";
import LineChartComponent from "@/components/LineChartComponent";
import BarChartComponent from "@/components/BarChartComponent";
import PieChartComponent from "@/components/PieChartComponent";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        <div className="md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Charts */}
          <div className="p-4 bg-white rounded-lg shadow-md m-3">
            <h2 className="text-lg font-medium mb-2">Candlestick Chart</h2>
            <CandlestickChart />
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md m-3">
            <h2 className="text-lg font-medium mb-2">Line Chart</h2>
            <LineChartComponent />
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md m-3">
            <h2 className="text-lg font-medium mb-2">Bar Chart</h2>
            <BarChartComponent />
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md m-3">
            <h2 className="text-lg font-medium mb-2">Pie Chart</h2>
            <PieChartComponent />
          </div>
        </div>
      </main>
    </div>
  );
}
