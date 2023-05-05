const Chart = () => {
  return (
    <div className="bg-white rounded-[10px] flex justify-start items-center flex-col w-full gap-5 py-4 px-4 sm:px-6">
      <div className="flex justify-between items-start flex-wrap w-full gap-2">
        <h2 className="title flex justify-start sm:w-auto w-full items-center sm:items-start flex-col">
          Emissions by month
          <span className="text-xs inline-block  font-normal ">CO2e</span>
        </h2>
        <div className="flex justify-center flex-wrap items-center pt-2 gap-4">
          <div className="flex justify-start items-center gap-2">
            <input type="checkbox" className="accent-secondary w-4 h-4" />
            <p className="text-[#334155] text-sm">Compare with previous year</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="rounded-full bg-[#4D9F78] w-5 h-5"></div>
            <p className="text-[#334155] text-sm">Scope 1</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="rounded-full bg-[#FF7722] w-5 h-5"></div>
            <p className="text-[#334155] text-sm">Scope 2</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="rounded-full bg-[#FFD2B5] w-5 h-5"></div>
            <p className="text-[#334155] text-sm">Scope 3</p>
          </div>
        </div>
      </div>
      <img
        src="/chart4.png"
        className="w-full max-w-[1400px] object-contain"
        alt=""
      />
    </div>
  );
};

export default Chart;
