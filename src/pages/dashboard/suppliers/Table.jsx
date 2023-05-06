const Table = () => {
  return (
    <div className="flex mt-5 justify-start items-start flex-col gap-4 w-full overflow-x-auto">
      <div className="grid  grid-cols-[1fr__0.6fr__0.6fr__0.4fr] min-w-[900px] w-full gap-2 bg-[#003018] rounded-lg px-5 py-5">
        <p className="text-lg font-bold text-[#AABAB2]">Account</p>
        <p className="text-lg font-bold text-center text-[#AABAB2]">
          Categories
        </p>
        <p className="text-lg font-bold text-center text-[#AABAB2]">Confirm?</p>
        <p className="text-lg text-right font-bold text-[#AABAB2]">Exclude</p>
      </div>
      <TableRow title="Payroll" img="/not-allowed.png" add exclude />
      <TableRow title="Rent & Real Estate Payments..." img="/house.png" />
    </div>
  );
};

export default Table;

const TableRow = ({ img, title, exclude, add }) => {
  return (
    <div className="grid  grid-cols-[1fr__0.6fr__0.6fr__0.4fr] min-w-[900px] w-full gap-2 bg-white border border-solid border-[#cbd5e1] rounded-lg px-5 py-5">
      <div className="flex justify-start items-center gap-2">
        <img
          src={img}
          className="w-5 sm:w-[30px] h-5 sm:h-[30px] object-contain"
          alt=""
        />
        <p className="text-[#001008] text-base sm:text-lg font-bold truncate sm:max-w-none max-w-[150px]">
          {title}
        </p>
      </div>
      {add ? (
        <button className="transition-all justify-self-center w-max duration-300 bg-transparent hover:bg-secondary text-secondary hover:text-white rounded-full font-bold text-xs px-2 py-1 border border-solid border-secondary">
          Add Category
        </button>
      ) : (
        <div className="flex justify-center items-center gap-1">
          <button className="transition-all duration-300 bg-transparent hover:bg-[#94A3B8] text-[#94A3B8] hover:text-white rounded-full font-bold text-xs px-2 py-1 border border-solid border-[#94A3B8]">
            {" "}
            Excluded
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#94A3B8"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <button className="transition-all duration-300 bg-transparent hover:bg-[#94A3B8] text-[#94A3B8] hover:text-white rounded-full font-bold text-xs px-2 py-1 border border-solid border-[#94A3B8]">
            {" "}
            Wages
          </button>
        </div>
      )}
      <div className="flex justify-center items-center gap-2">
        <input type="checkbox" className="accent-secondary w-4 h-4" />
        <p className="text-[#94A3B8] text-xs font-bold">View Transaction</p>
      </div>
      {exclude ? (
        <img
          alt="..."
          src="/exclude.png"
          className="w-[30px] justify-self-end h-[30px]"
        />
      ) : (
        <img
          alt="..."
          src="/add.png"
          className="w-[30px] justify-self-end h-[30px]"
        />
      )}
    </div>
  );
};
