import React from "react";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
  chartData: any; 
  chartTitle: string; 
}

const BarChart: React.FC<BarChartProps> = ({ chartData, chartTitle }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: chartTitle
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

export default BarChart;
