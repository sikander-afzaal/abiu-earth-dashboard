import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Scope 1", "Scope 2", "Scope 3"],
  datasets: [
    {
      label: "",
      data: [200, 50, 100],
      backgroundColor: ["#5CBF90", "#FFD66B", "#FF8F6B"],
      borderColor: ["#5CBF90", "#FFD66B", "#FF8F6B"],
      borderWidth: 1,
    },
  ],
};
const options = {
  cutout: "70%",
};

export function DoughnutChart() {
  return <Doughnut options={options} data={data} />;
}
export default DoughnutChart;
