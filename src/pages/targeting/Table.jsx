const Table = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col overflow-x-auto rounded-[10px] bg-white border border-solid border-borderGray border-b-0">
      <div className="grid 2xl:min-w-0 min-w-[1300px] grid-cols-[1fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.5fr] w-full gap-2 bg-[#003018] rounded-[10px] px-5 py-4">
        <p className="text-[#AABAB2] text-sm font-bold">Category</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2022</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2023</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2024</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2025</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2026</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2027</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2028</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2029</p>
        <p className="text-[#AABAB2] text-sm font-bold text-center">2030</p>
        <p className="text-[#AABAB2] text-sm font-bold text-right">
          Projected Reduction
        </p>
      </div>
      <TableRow
        category="Material & manufacturing"
        years={[
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
        ]}
        reduction="50%"
      />
      <TableRow
        category="Material & manufacturing"
        years={[
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
        ]}
        reduction="50%"
      />
      <TableRow
        category="Material & manufacturing"
        years={[
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
          {
            value: "300",
            percent: "8.29%",
          },
        ]}
        reduction="50%"
      />
    </div>
  );
};

export default Table;

const TableRow = ({ category, years, reduction }) => {
  return (
    <div className="grid 2xl:min-w-0 min-w-[1300px] grid-cols-[1fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.3fr__0.5fr] w-full gap-2 px-5 py-4 border-b border-solid border-borderGray">
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
      {years.map((elem, idx) => {
        return (
          <div
            key={idx + elem.percent}
            className="flex justify-start items-center flex-col gap-2"
          >
            <p className="text-[#64748B] text-sm">{elem.value}</p>
            <p className="text-[#334155] text-sm">{elem.percent}</p>
          </div>
        );
      })}
      <p className="justify-self-end self-start rounded-[10px] bg-[#F1F5F9] px-[10px] py-1 text-secondary font-bold text-sm">
        {reduction}
      </p>
    </div>
  );
};
