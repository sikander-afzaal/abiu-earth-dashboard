const Baseline = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col justify-start items-start gap-5">
        <p className="text-[#64748B] font-medium text-base">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam eniam ISIconsequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint.{" "}
        </p>
        <div className="flex justify-start items-start flex-col gap-3">
          <h3 className="text-[#003018] font-bold text-2xl">Baseline Year</h3>
          <p className="text-base font-medium text-[#003018] px-3 py-2 bg-white rounded-full border-[#E2E8F0] border-solid border">
            01 February 2021 - 1 january 2022
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <div className="flex justify-between items-center w-full bg-[#003018] rounded-lg border border-solid border-[#CBD5E1] px-5 py-6">
            <p className="text-[#AABAB2] text-lg font-bold">Activities</p>
            <p className="text-[#AABAB2] text-lg font-bold">Emission (Co2e)</p>
          </div>
          <BaselineRow img="/not-allowed.png" name="Payroll" weight={21548} />
          <BaselineRow
            img="/house.png"
            name="Rent & Real Estate Payments..."
            weight={21548}
          />
          <BaselineRow img="/not-allowed.png" name="Payroll" weight={21548} />
          <BaselineRow
            img="/house.png"
            name="Rent & Real Estate Payments..."
            weight={21548}
          />
        </div>
      </div>
    </div>
  );
};

export default Baseline;

const BaselineRow = ({ img, name, weight }) => {
  return (
    <div className="flex justify-between items-center w-full bg-white rounded-lg border border-solid border-[#CBD5E1] px-4 sm:px-5 py-5 sm:py-7 ">
      <div className="flex justify-start items-center gap-2">
        <img
          src={img}
          className="w-5 sm:w-[30px] h-5 sm:h-[30px] object-contain"
          alt=""
        />
        <p className="text-[#001008] text-base sm:text-lg font-bold truncate sm:max-w-none max-w-[150px]">
          {name}
        </p>
      </div>
      <div className="flex min-w-max justify-start items-center gap-2">
        <p className="text-[#003018] text-sm sm:text-base font-bold">
          {weight} kg
        </p>
        <p className="text-secondary pt-0.5 text-sm font-bold cursor-pointer select-none">
          Edit
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="sm:w-5 w-3 h-3 cursor-pointer select-none sm:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
