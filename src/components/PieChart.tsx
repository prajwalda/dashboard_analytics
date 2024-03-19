import React from "react";
import { Pie } from "react-chartjs-2";

interface ChartProps {
  chartData: any; 
  chartTitle: string;
}

const PieChart: React.FC<ChartProps> = ({ chartData,chartTitle }) => {
  return (
    <div className="chart-container">
      
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: chartTitle
            }
          }
        }}
      />
    </div>
  );
};

export default PieChart;
