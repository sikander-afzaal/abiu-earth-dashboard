import Table from "./Table";

const Suppliers = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col gap-4 justify-start items-start">
        <div className="flex sm:flex-row flex-col w-full justify-start items-center gap-5">
          <button className="border-[3px] px-4 sm:w-auto w-full lg:px-8 py-2 lg:py-3 bg-transparent hover:bg-secondary hover:text-white text-secondary transition-all duration-300 font-bold font-inter text-lg lg:text-2xl border-secondary border-solid rounded-full ">
            Financial Accounts
          </button>
          <button className="border-[3px] px-4 sm:w-auto w-full lg:px-8 py-2 lg:py-3 bg-transparent hover:bg-[#94A3B8] hover:text-white text-[#94A3B8] transition-all duration-300 font-bold font-inter text-lg lg:text-2xl border-[#94A3B8] border-solid rounded-full ">
            Transactions
          </button>
          <button className="border-[3px] px-4 sm:w-auto w-full lg:px-8 py-2 lg:py-3 bg-transparent hover:bg-[#94A3B8] hover:text-white text-[#94A3B8] transition-all duration-300 font-bold font-inter text-lg lg:text-2xl border-[#94A3B8] border-solid rounded-full ">
            Suppliers
          </button>
        </div>
        <p className="text-[#64748b] mt-2 text-base font-medium font-inter">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam eniam ISIconsequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint.{" "}
        </p>
        <div className="flex mt-5 flex-wrap justify-start items-center gap-5">
          <button className="text-[#003018] text-base font-bold">
            All{" "}
            <span className="px-2 py-1 bg-secondary rounded-full text-white text-xs font-bold">
              30
            </span>
          </button>
          <button className="text-[#003018] flex justify-start items-center gap-1 text-base font-bold">
            Unconfirmed{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="px-2 py-1 bg-transparent rounded-full text-[#0F172A] text-xs font-bold">
              30
            </span>
          </button>
          <button className="text-[#003018] flex justify-start items-center gap-1 text-base font-bold">
            Uncategorised{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="px-2 py-1 bg-transparent rounded-full text-[#0F172A] text-xs font-bold">
              30
            </span>
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Suppliers;
