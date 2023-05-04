const Categories = () => {
  return (
    <div className="contain justify-start gap-7 sm:gap-4 bg-white items-start flex-col w-full p-4 sm:p-6 rounded-xl">
      <div className="flex justify-between sm:flex-row flex-col items-start sm:items-center w-full gap-4 sm:gap-2">
        <h2 className="title">Top Categories</h2>
        <button className="flex justify-center items-center gap-3 px-5 py-2 text-secondary border border-solid border-secondary bg-transparent hover:bg-secondary hover:text-white transition-all duration-300 font-bold text-sm rounded-full">
          View all emission by category{" "}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">
        <div className="flex rounded-[10px] justify-start py-12 w-full items-center flex-col  bg-[#DEF2E9]">
          <img
            src="/home/energy.png"
            className="w-[22px] object-contain"
            alt=""
          />
          <h3 className="text-xl font-bold text-black mt-3">Energy</h3>
          <p className="text-black text-sm">10883.09 CO2e</p>
        </div>
        <div className="flex rounded-[10px] justify-start py-12 w-full items-center flex-col  bg-[#FFE4D3]">
          <img
            src="/home/buildings.png"
            className="w-[36px] object-contain"
            alt=""
          />
          <h3 className="text-xl font-bold text-black mt-3">Buildings</h3>
          <p className="text-black text-sm">10883.09 CO2e</p>
        </div>
        <div className="flex rounded-[10px] justify-start py-12 w-full items-center flex-col  bg-[#F0EFFF]">
          <img
            src="/home/travel.png"
            className="w-[28px] object-contain"
            alt=""
          />
          <h3 className="text-xl font-bold text-black mt-3">Travel</h3>
          <p className="text-black text-sm">10883.09 CO2e</p>
        </div>
        <div className="flex rounded-[10px] justify-center py-12 w-full items-center flex-col  bg-[#E1F6FF]">
          <img
            src="/home/cloud.png"
            className="w-[42px] object-contain"
            alt=""
          />
          <h3 className="text-xl font-bold text-black mt-3">Cloud</h3>
          <p className="text-black text-sm">10883.09 CO2e</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-4 w-full">
          <div className="flex rounded-[10px] justify-start py-5 px-6 gap-6 w-full items-center   bg-[#FFF7E1]">
            <img
              src="/home/employee-yellow.png"
              className="w-[33px] object-contain"
              alt=""
            />
            <div>
              <h3 className="text-xl font-bold text-black ">Employees</h3>
              <p className="text-black text-sm">10883.09 CO2e</p>
            </div>
          </div>
          <div className="flex rounded-[10px] justify-start py-5 px-6 gap-6 w-full items-center   bg-[#FDD5D5]">
            <img
              src="/home/employee-red.png"
              className="w-[33px] object-contain"
              alt=""
            />
            <div>
              <h3 className="text-xl font-bold text-black ">Employees</h3>
              <p className="text-black text-sm">10883.09 CO2e</p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-1 2xl:grid-cols-2 gap-4 w-full">
          <div className="flex rounded-[10px] justify-start p-3 gap-3 w-full items-center   bg-[#FFF7E1]">
            <img
              src="/home/employee-yellow.png"
              className="w-[33px] object-contain"
              alt=""
            />
            <div>
              <h3 className="text-lg font-bold text-black ">Employees</h3>
              <p className="text-black text-xs">10883.09 CO2e</p>
            </div>
          </div>
          <div className="flex rounded-[10px] justify-start p-3 gap-3 w-full items-center   bg-[#FFF7E1]">
            <img
              src="/home/employee-yellow.png"
              className="w-[33px] object-contain"
              alt=""
            />
            <div>
              <h3 className="text-lg font-bold text-black ">Other</h3>
              <p className="text-black text-xs">10883.09 CO2e</p>
            </div>
          </div>
          <div className="flex rounded-[10px] justify-start p-3 gap-3 w-full items-center   bg-[#FFF7E1]">
            <img
              src="/home/employee-yellow.png"
              className="w-[33px] object-contain"
              alt=""
            />
            <div>
              <h3 className="text-lg font-bold text-black ">Employees</h3>
              <p className="text-black text-xs">10883.09 CO2e</p>
            </div>
          </div>
          <div className="flex rounded-[10px] justify-start p-3 gap-3 w-full items-center   bg-[#FFF7E1]">
            <img
              src="/home/employee-yellow.png"
              className="w-[33px] object-contain"
              alt=""
            />
            <div>
              <h3 className="text-lg font-bold text-black ">Carbon</h3>
              <p className="text-black text-xs">10883.09 CO2e</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
