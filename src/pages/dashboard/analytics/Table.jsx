const Table = () => {
  return (
    <div className="flex justify-start items-start flex-col overflow-x-auto bg-white w-full rounded-[10px] overflow-hidden">
      <div className="grid grid-cols-[1fr__0.4fr__0.4fr__1fr] min-w-[780px] xl:grid-cols-4 w-full gap-3 px-6 py-4 border-b border-solid border-borderGray">
        <p className="text-[#475569] text-sm font-bold">Category</p>
        <p className="text-[#475569] text-sm font-bold">Impact</p>
        <p className="text-[#475569] text-sm font-bold">Percentage</p>
        <p className="text-[#475569] text-sm font-bold text-right">
          Recommendations
        </p>
      </div>
      <TableRow
        category="Material & manufacturing"
        impact="25678.1 t"
        percent="35%"
        recomendations="Low carbon electricity"
      />
    </div>
  );
};

export default Table;

const TableRow = ({ category, impact, percent, recomendations }) => {
  return (
    <div className="grid items-center grid-cols-[1fr__0.4fr__0.4fr__1fr] min-w-[780px] xl:grid-cols-4 w-full gap-3 px-6 py-4">
      <div className="flex justify-start items-center self-start gap-3">
        <div className="bg-[#F1F5F9] w-[31px] h-[31px] rounded grid place-items-center  text-secondary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </div>
        <p className="text-[#64748B] text-sm">{category}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#475569"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-[#64748B] text-sm">{impact}</p>
      <p className="text-[#64748B] text-sm">{percent}</p>
      <div className="flex justify-end items-center gap-2">
        <p className="text-[#64748B] text-sm">{recomendations}</p>
        <span className="text-[#64748B] text-sm px-[10px] py-1 bg-[#f1f5f9] rounded-full">
          Open
        </span>
      </div>
    </div>
  );
};
