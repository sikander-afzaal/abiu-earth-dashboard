import { useState } from "react";

const Top = () => {
  const [scope, setScope] = useState("All");
  const [time, setTime] = useState("Monthly");
  return (
    <div className="flex flex-wrap px-4 sm:px-6 justify-between items-center w-full bg-white rounded-[10px] py-5 gap-2">
      <h3 className="title">Emission analysis</h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="border border-solid border-[#475569] sm:w-auto w-full rounded-2xl px-4 py-2 flex justify-center items-center gap-1">
          {["Scope 1", "Scope 2", "Scope 3", "All"].map((elem, idx) => {
            return (
              <button
                key={elem}
                onClick={() => setScope(elem)}
                className={`text-sm font-normal ${
                  scope === elem ? "text-secondary" : "text-[#475569]"
                }`}
              >
                {elem} {idx !== 3 && <span>|</span>}
              </button>
            );
          })}
        </div>
        <div className="border border-solid border-[#475569] sm:w-auto w-full rounded-2xl px-4 py-2 flex justify-center items-center gap-1">
          {["Monthly", "Yearly"].map((elem, idx) => {
            return (
              <button
                key={elem}
                onClick={() => setTime(elem)}
                className={`text-sm font-normal ${
                  time === elem ? "text-secondary" : "text-[#475569]"
                }`}
              >
                {elem} {idx !== 1 && <span>|</span>}
              </button>
            );
          })}
        </div>
        <select className="border border-solid border-[#475569] sm:w-auto w-full rounded-2xl pl-4 pr-12 py-2 bg-transparent outline-none">
          <option value="Jan 01,2022- Dec 32, 2022">
            Jan 01,2022- Dec 32, 2022
          </option>
        </select>
        <button className="px-4 sm:w-auto w-full h-[38px] bg-secondary rounded-2xl flex justify-center items-center gap-2 text-white text-sm">
          <img
            src="/doc-report.png"
            className="w-5 h-5 object-contain"
            alt=""
          />{" "}
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Top;
