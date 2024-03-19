import React from "react";
import { Line } from "react-chartjs-2";

interface ChartProps {
  chartData: any; 
}

const LineChart: React.FC<ChartProps> = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Response time to demonstrate trends over time on a daily and weekly basis"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
