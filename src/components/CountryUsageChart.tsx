import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { useSelector } from 'react-redux';

const CountryUsageChart = () => {
  const byCountryData = useSelector((state: any) => state.usage_statistics.by_country);
  const [chartData, setChartData] = useState<any>({
    // console.log(byCountryData)
    // we can console log to see the data we are getting

    labels: [],
    datasets: [{
      label: 'Usage by Country',
      data: [],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF'
      ],
      hoverOffset: 4
    }]
  });

  useEffect(() => {
    if (byCountryData) {
      const labels = Object.keys(byCountryData);
      const data = Object.values(byCountryData);
      setChartData({
        labels: labels,
        datasets: [{
          ...chartData.datasets[0],
          data: data,
        }]
      });
    }
  }, [byCountryData]);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Pie Chart based on usage by Country</h2>
      <PieChart chartData={chartData} chartTitle="No. of Platform Users based on Country"/>
    </div>
  );
}

export default CountryUsageChart;
