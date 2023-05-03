import { useState } from "react";

const Export = () => {
  const DATA = [
    "/export/export (1).png",
    "/export/export (2).png",
    "/export/export (3).png",
    "/export/export (4).png",
    "/export/export (5).png",
    "/export/export (6).png",
    "/export/export (7).png",
    "/export/export (8).png",
    "/export/export (9).png",
    "/export/export (10).png",
    "/export/export (11).png",
    "/export/export (12).png",
    "/export/export (13).png",
  ];

  const [activeBox, setActiveBox] = useState(1);
  return (
    <div className="wrapper">
      <div className="contain flex-col justify-start items-start gap-8">
        <h2 className="text-xl text-center sm:text-left sm:text-2xl w-full bg-white px-4 sm:px-6 py-4 rounded-xl font-bold font-inter text-title">
          Select platform to export data
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr w-full gap-7">
          {DATA.map((elem, idx) => {
            return (
              <ExportBox
                key={idx + elem}
                img={elem}
                idx={idx + 1}
                setActive={setActiveBox}
                activeBox={activeBox}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Export;

const ExportBox = ({ img, activeBox, setActive, idx }) => {
  return (
    <button
      onClick={() => setActive(idx)}
      className="relative   w-full h-full isolate rounded-[10px]"
    >
      <div className="bg-white flex h-full justify-center items-center w-full rounded-[10px] py-8">
        <img src={img} alt="" />
      </div>
      {activeBox === idx && (
        <div className="bg-exportSelected -inset-[5px] absolute -z-10 rounded-[10px]"></div>
      )}
    </button>
  );
};
