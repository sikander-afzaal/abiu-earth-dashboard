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
      label: "Energy",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#ADDFC7",
      stack: "Stack 1",
    },
    {
      label: "Building",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FFD2B5",
      stack: "Stack 1",
    },
    {
      label: "Travel",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FF7722",
      stack: "Stack 1",
    },
    {
      label: "Employee",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#F42F2F",
      stack: "Stack 1",
    },
    {
      label: "Employee",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#FFD2B5",
      stack: "Stack 1",
    },
    {
      label: "Employee",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#4D9F78",
      stack: "Stack 1",
    },
    {
      label: "Employee",
      data: labels.map((elem, idx) => (idx + 1) * 50 * Math.random()),
      backgroundColor: "#5CBF90",
      stack: "Stack 1",
    },
  ],
};

export function StackedBarVertical() {
  return <Bar options={options} data={data} />;
}
