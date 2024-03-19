import React, { useEffect, useState } from 'react';
import BarChart from "./Barchart"
import { useSelector } from 'react-redux';

const PlatformUsageChart = () => {
  const byPlatformData = useSelector((state: any) => state.usage_statistics.by_platform);
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [{
      label: 'Usage by Platform',
      data: [],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      borderWidth: 1
    }]
  });

  useEffect(() => {
    if (byPlatformData) {
      const labels = Object.keys(byPlatformData);
      const data = Object.values(byPlatformData);
      setChartData({
        labels: labels,
        datasets: [{
          ...chartData.datasets[0],
          data: data,
        }]
      });
    }
  }, [byPlatformData]);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Bar chart based on types of Platform </h2>
      <BarChart chartData={chartData} chartTitle="No. of Platform Users" />
    </div>
  );
}

export default PlatformUsageChart;
