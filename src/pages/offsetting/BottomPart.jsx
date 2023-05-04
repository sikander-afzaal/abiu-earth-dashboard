import { useState } from "react";
import SelectMenu from "../../components/form/SelectMenu";

const BottomPart = () => {
  const [filters, setFilters] = useState({
    type: "Type",
    location: "Location",
  });
  return (
    <div className="w-full flex justify-start items-center flex-col gap-5">
      <div className="w-full flex justify-between md:flex-row flex-col items-center gap-4 md:gap-2">
        <p className="font-bold text-lg  lg:text-2xl text-[#0F172A]">
          Remove your carbon emissions
        </p>
        <div className="flex w-full sm:w-auto justify-center items-center sm:flex-row flex-col gap-3 sm:gap-5">
          <div className="w-full sm:w-[120px]">
            <SelectMenu
              value={filters.type}
              handler={setFilters}
              name="type"
              options={["Type", "None"]}
            />
          </div>
          <div className="w-full sm:w-[140px]">
            <SelectMenu
              value={filters.location}
              handler={setFilters}
              name="location"
              options={["Location", "None"]}
            />
          </div>
          <button className="w-full sm:w-[130px] h-[40px] flex justify-between items-center focus:border-secondary focus:text-secondary transition-all duration-300 border border-solid border-borderGray rounded-lg text-sm  px-4 text-[#475569] ">
            Price{" "}
            <img
              src="/arrow-up-down.png"
              className="w-[28px] object-contain"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center flex-col gap-5 w-full">
        <EmissionRow
          img="/test.png"
          price="$9.18/t CO2"
          title="Remove your carbon emissions"
          desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
        />
        <EmissionRow
          img="/test.png"
          price="$9.18/t CO2"
          title="Remove your carbon emissions"
          desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
        />
        <EmissionRow
          img="/test.png"
          price="$9.18/t CO2"
          title="Remove your carbon emissions"
          desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
        />
        <EmissionRow
          img="/test.png"
          price="$9.18/t CO2"
          title="Remove your carbon emissions"
          desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
        />
      </div>
    </div>
  );
};

export default BottomPart;

const EmissionRow = ({ img, title, desc, price }) => {
  return (
    <div className="w-full lg:flex-row flex-col flex justify-between items-end lg:items-start p-4 sm:p-6 rounded-[10px] border border-solid border-borderGray bg-white sm:gap-0 gap-3">
      <div className="flex md:flex-row flex-col self-start md:w-auto w-full  justify-center items-start md:items-center gap-5">
        <img
          className="object-cover h-[200px] md:h-auto md:object-contain rounded-[10px] md:rounded-none w-full md:w-[236px]"
          src={img}
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-4">
          <p className="text-[#030229] text-lg font-bold">{title}</p>
          <div className="flex w-full sm:w-auto sm:flex-row flex-col justify-start items-center gap-4">
            <div className="flex justify-center sm:w-auto w-full items-center gap-3 bg-[#E2E8F0] rounded-2xl px-4 py-2">
              <img
                src="/cloud-gray.png"
                className="w-5 object-contain"
                alt=""
              />
              <p className="text-sm font-normal text-[#475569]">
                Emission reduction
              </p>
            </div>
            <div className="flex justify-center sm:w-auto w-full items-center gap-3 bg-[#E2E8F0] rounded-2xl px-4 py-2">
              <img src="/lock-gray.png" className="w-5 object-contain" alt="" />
              <p className="text-sm font-normal text-[#475569]">
                No carbon storage
              </p>
            </div>
          </div>
          <p className="text-sm font-normal md:max-w-[500px] text-[#64748B]">
            {desc}
          </p>
          <button className="flex justify-center items-center gap-2 transition-all duration-300 rounded-full bg-[#003018] px-5 py-2 hover:bg-transparent hover:text-[#003018] border-2  border-solid border-[#003018] text-white text-sm font-bold">
            See Project{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-2xl min-w-max font-bold text-[#030229]">{price}</p>
    </div>
  );
};
