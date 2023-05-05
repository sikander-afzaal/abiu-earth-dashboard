import Category from "./Category";
import Chart from "./Chart";
import Table from "./Table";
import Top from "./Top";

const Analytics = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col justify-start items-center gap-6">
        <Top />
        <Chart />
        <Category />
        <div className="flex md:flex-row flex-col justify-between items-center w-full gap-5 p-4 sm:p-6 rounded-[10px] bg-white">
          <div className="flex justify-start items-start sm:items-center gap-4">
            <img
              src="/graph-ico.png"
              className="w-[34px] object-contain"
              alt=""
            />
            <p className="max-w-[730px] text-sm text-[#64748B]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface
            </p>
          </div>
          <button className="bg-[#003018] border-2 border-solid border-[#003018] text-white rounded-full px-5 py-2 flex justify-center items-center min-w-max gap-4 transition-all duration-300 hover:bg-transparent hover:text-[#003018]">
            Explore recommendations{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Analytics;
