import DoughnutChart from "../../../components/charts/Doughnut";
import { LineChart } from "../../../components/charts/LineChart";

const Analytics = () => {
  return (
    <div className="contain justify-start items-center flex-col">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr__2fr] w-full gap-8">
        <div className="w-full flex justify-start items-center flex-col p-4 sm:p-6 bg-white rounded-xl">
          <div className="w-full flex justify-between items-center gap-2">
            <h2 className="title">Analytics</h2>
            <button>
              <img src="/menu.png" alt="" />
            </button>
          </div>
          <div className="max-w-[550px] xl:max-w-none w-full ">
            <DoughnutChart />
          </div>
        </div>
        <div className="w-full flex justify-start gap-5 items-center flex-col p-4 sm:p-6 bg-white rounded-xl">
          <div className="w-full flex justify-between items-center gap-2">
            <h2 className="title">
              Emissions by month <br />
              <span className="text-xs font-normal ">CO2e</span>
            </h2>
            <button>
              <img src="/menu.png" alt="" />
            </button>
          </div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
