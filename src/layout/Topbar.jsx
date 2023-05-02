const Topbar = () => {
  return (
    <div className="topbar flex justify-between items-center px-8 w-full">
      <p className="text-primaryShade text-2xl font-bold">
        Automated Emissions analysis
      </p>
      <div className="flex justify-center items-center gap-4">
        <div className="w-[260px] rounded-[10px] overflow-hidden border-baseGray border border-solid p-3 flex justify-start bg-[#282C38] items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#3C4254"
            className="w-5 h-5 min-w-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Type to search..."
            className="text-[#757B8C] h-full outline-none bg-transparent text-sm font-normal font-inter w-full"
          />
          <img
            src="/mic.png"
            className="w-5 min-w-[20px] object-contain"
            alt=""
          />
        </div>
        <div className="bg-primary h-[23px] w-[2px]"></div>
        <img src="/bell.png" className="w-[32px] object-contain" alt="" />
        <div className="bg-primary h-[23px] w-[2px]"></div>
        <img
          src="/user.png"
          className="w-[42px] object-contain h-[42px] rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Topbar;
