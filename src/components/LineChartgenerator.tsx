import React, { useEffect, useState } from 'react';
import LineChart from "../components/LineChart";
import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";
import { useSelector } from 'react-redux';

Chart.register(CategoryScale, LinearScale);

const LineChartGenerator = () => {
  const responseTimes = useSelector((state: any) => state.response_times);

  const [dailyChartData, setDailyChartData] = useState<any>({
    labels: [],
    datasets: [{
      label: 'Daily Average Response Time',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1
    }]
  });

  const [weeklyChartData, setWeeklyChartData] = useState<any>({
    labels: [],
    datasets: [{
      label: 'Weekly Average Response Time',
      data: [],
      fill: false,
      borderColor: 'rgb(192, 75, 192)',
      tension: 0.1
    }]
  });

  useEffect(() => {
    if (responseTimes) {
      const dayWiseData = responseTimes.day_wise;
      const weekWiseData = responseTimes.week_wise;

      const dailyLabels = dayWiseData.map((entry: any) => entry.date);
      const dailyData = dayWiseData.map((entry: any) => entry.average_time);

      const weeklyLabels = weekWiseData.map((entry: any) => `Week ${entry.week}`);
      const weeklyData = weekWiseData.map((entry: any) => entry.average_time);

      setDailyChartData({
        labels: dailyLabels,
        datasets: [{
          ...dailyChartData.datasets[0],
          data: dailyData,
        }]
      });

      setWeeklyChartData({
        labels: weeklyLabels,
        datasets: [{
          ...weeklyChartData.datasets[0],
          data: weeklyData,
        }]
      });
    }
  }, [responseTimes]);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Line Charts based on Response Time</h2>
      <LineChart chartData={dailyChartData} />
      <LineChart chartData={weeklyChartData} />
    </div>
  );
}

export default LineChartGenerator;
