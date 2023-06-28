'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)

const Charts = ({ labels, data1, data2 }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Data 1',
        data: data1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.5
      },
      {
        label: 'Data 2',
        data: data2,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.5
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
            display: false
        }
      }
    },
    plugins: {
        legend: {
            display: false
        }
    }
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default Charts;
