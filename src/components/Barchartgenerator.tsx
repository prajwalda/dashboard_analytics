import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "./Barchart";
import { useSelector } from 'react-redux';

Chart.register(CategoryScale);

const Barchartgenerator: React.FC = () => {
    const categoryDistribution = useSelector((state: any) => state.category_distribution);

    const [chartData, setChartData] = useState<any>({
        labels: [],
        datasets: [{
            label: 'Number of Queries',
            data: [],
            backgroundColor: 'rgb(153, 255, 51)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    });

    useEffect(() => {
        if (categoryDistribution) {
            const labels = Object.keys(categoryDistribution);
            const data = Object.values(categoryDistribution);
            setChartData({
                labels: labels,
                datasets: [{
                    ...chartData.datasets[0], // Keep other properties unchanged
                    data: data,
                }]
            });
        }
    }, [categoryDistribution]);

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Bar Chart for Category Distribution</h2>
            <BarChart chartData={chartData} chartTitle="No. of Queries per Category" />
        </div>
    );
}

export default Barchartgenerator;
