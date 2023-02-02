import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Ethnicity Breakdown',
      },
    },
    scales: {
        x: {
          stacked: true,
          ticks: {
            fontSize: 10,
        },
        },
        y: {
          stacked: true,
          ticks: {
            percentage: 10,
        },
        },
      },
  };
  
  const labels = ['Asian', 'Hispanic', 'African Americans', 'Latino ', 'Vietnamese ',];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Ethnicity',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'rgba(255, 99, 132)',
      },
    ],
  };

export default function InfluencerBarChartEthnicity() {
  return (
    <Bar options={options} data={data} />
  )
}
