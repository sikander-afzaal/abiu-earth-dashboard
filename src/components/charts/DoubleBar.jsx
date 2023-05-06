import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: false,
      position: "top",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
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
      backgroundColor: "#ADDFC7",
      stack: "Stack 1",
    },
    {
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FFD2B5",
      stack: "Stack 1",
    },
    {
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FF7722",
      stack: "Stack 1",
    },
    {
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#ADDFC7",
      stack: "Stack 2",
    },
    {
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FFD2B5",
      stack: "Stack 2",
    },
    {
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FF7722",
      stack: "Stack 2",
    },
  ],
};

export function StackedBar() {
  return <Bar options={options} data={data} />;
}
