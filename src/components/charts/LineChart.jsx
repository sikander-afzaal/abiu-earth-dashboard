import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    elements: {
      point: {
        pointBackgroundColor: "white",
        pointBorderColor: "#5CBF90",
        pointBorderWidth: "3px",
      },
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      borderColor: "#3D7F60",
      backgroundColor: "#3D7F60",
      tension: 0.25,
      fill: {
        target: "origin",
        above: "#4D9F7826",
      },
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
