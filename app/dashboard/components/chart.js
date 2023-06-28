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
        label: 'Guest',
        data: data1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#E9A0A0',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.5
      },
      {
        label: 'User',
        data: data2,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: '#9BDD7C',
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
        ticks: {
          stepSize: 100,
          callback: (value) => {
            return value === 0 ? value : value.toString();
          },
          max: 500,
          min: 0,
        },
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
