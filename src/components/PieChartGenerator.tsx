import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { useSelector } from 'react-redux';

const PieChartGenerator = () => {
  const userSatisfaction = useSelector((state: any) => state.user_satisfaction);
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [{
      label: 'User Satisfaction',
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
    if (userSatisfaction) {
      const ratingsData = userSatisfaction.ratings;
      const labels = ratingsData.map((entry: any) => `Rating ${entry.rating}`);
      const data = ratingsData.map((entry: any) => entry.count);
      setChartData({
        labels: labels,
        datasets: [{
          ...chartData.datasets[0],
          data: data,
        }]
      });
    }
  }, [userSatisfaction]);

  return (
    <div>
    <h2 style={{textAlign:'center'}}>Ratings based on user satisfaction</h2>
      <PieChart chartData={chartData} chartTitle="User Satisfation Based on Rating" />
    </div>
  );
}

export default PieChartGenerator;
