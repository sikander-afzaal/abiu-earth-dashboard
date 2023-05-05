const Category = () => {
  return (
    <div className="bg-white rounded-[10px] flex justify-start items-start flex-col w-full gap-5 py-4 px-4 sm:px-6">
      <h2 className="title flex justify-start items-start flex-col">
        Emissions by Category
        <span className="text-xs inline-block  font-normal ">CO2e</span>
      </h2>
      <div className="grid grid-cols-[6fr__2fr__1.8fr__1fr__0.9fr__0.8fr] grid-rows-[repeat(6,50px)] lg:grid-rows-[50px] w-full">
        <div className="w-full col-span-6 lg:col-span-1 lg:row-start-1 row-start-1 flex justify-center items-center rounded-lg bg-[#3D7F60]">
          <img src="/energy-white.png" alt="" />
        </div>
        <div className="w-full flex justify-center col-span-5 lg:col-span-1 lg:row-start-1 row-start-2 items-center rounded-lg bg-[#FF7722]">
          <img src="/building-white.png" alt="" />
        </div>
        <div className="w-full flex lg:row-start-1 row-start-3 col-span-4 lg:col-span-1 justify-center items-center rounded-lg bg-[#605BFF]">
          <img src="/travel-white.png" alt="" />
        </div>
        <div className="w-full lg:row-start-1 row-start-4 flex col-span-3 lg:col-span-1 justify-center items-center rounded-lg bg-[#6FD0FA]">
          <img src="/employee-white.png" alt="" />
        </div>
        <div className="w-full lg:row-start-1 row-start-5 flex justify-center col-span-2 lg:col-span-1 items-center rounded-lg bg-[#F42F2F]">
          <img src="/employee-white.png" alt="" />
        </div>
        <div className="w-full lg:row-start-1 row-start-6 flex justify-center items-center col-span-1 lg:col-span-1 rounded-lg bg-[#FFC327]">
          <img src="/employee-white.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
