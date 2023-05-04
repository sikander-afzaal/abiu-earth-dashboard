const TopPart = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Box img="/heart.png" title="Total Emissions" value="1836.1 t" />
      <Box img="/controller.png" title="Total Offset" value="1836.1 t" />
      <Box img="/purse.png" title="Total Net Emissions" value="1836.1 t" />
    </div>
  );
};

export default TopPart;

const Box = ({ title, img, value }) => {
  return (
    <div className="flex justify-start items-start flex-col gap-5 p-5 rounded-[10px] border border-solid border-borderGray bg-white ">
      <p className="text-[#030229] text-base">{title}</p>
      <div className="flex justify-between items-center w-full gap-2">
        <div className="flex justify-start items-center gap-3">
          <img src={img} className="w-[60px] h-[60px] object-contain" alt="" />
          <div>
            <p className="text-black text-[22px] font-extrabold">{value}</p>
            <p className="text-[#30229] text-sm">CO2E</p>
          </div>
        </div>
        <img
          src="/offset-graph.png"
          className="w-[65px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};
