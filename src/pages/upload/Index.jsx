const Upload = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col justify-start items-center gap-10">
        <div className="flex justify-center items-center gap-5 relative isolate ">
          <div className="absolute top-1/2 left-[50px] sm:left-[96px] -z-10 -translate-y-1/2 bg w-5 h-[3px] bg-[#C9EADA]"></div>
          <div className="absolute top-1/2 left-[calc(50px_*_2_+_20px)] sm:left-[calc(96px_*_2_+_20px)] -z-10 -translate-y-1/2 bg w-5 h-[3px] bg-[#E2E8F0]"></div>
          <div className="absolute top-1/2 left-[calc(50px_*_3_+_20px_*_2)] sm:left-[calc(96px_*_3_+_20px_*_2)] -z-10 -translate-y-1/2 bg w-5 h-[3px] bg-[#E2E8F0]"></div>

          <img
            src="/upload/step1.png"
            className="w-[50px] sm:w-[96px] h-[50px] sm:h-[96px] object-contain"
            alt=""
          />
          <img
            src="/upload/step2.png"
            className="w-[50px] sm:w-[96px] h-[50px] sm:h-[96px] object-contain"
            alt=""
          />
          <img
            src="/upload/step3.png"
            className="w-[50px] sm:w-[96px] h-[50px] sm:h-[96px] object-contain"
            alt=""
          />
          <img
            src="/upload/step4.png"
            className="w-[50px] sm:w-[96px] h-[50px] sm:h-[96px] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start items-start max-w-[883px] flex-col w-full gap-4">
          <div className="md:text-left text-center">
            <h2 className="text-[#001008] text-2xl sm:text-3xl md:text-[48px] font-bold">
              Let’s Build a Carbon Report
            </h2>
            <p className="font-bold mt-2 text-[#001008]">
              Upload your{" "}
              <span className="text-secondary">
                bill of quantity, cost plan
              </span>{" "}
              or <span className="text-secondary">ifc file</span> below and
              we‘ll take care of the rest
            </p>
          </div>
          <div className="w-full py-8 sm:py-14 px-4 mt-6 border-[3px] border-dashed border-[#CBD5E1] rounded-xl flex justify-center items-center flex-col gap-7">
            <h3 className="text-[#001008] text-center text-2xl lg:text-[32px] font-bold">
              Drag and Drop your file here or Browse your file
            </h3>
            <div className="flex justify-center items-center sm:flex-row flex-col gap-3 w-full sm:gap-10">
              <div className="flex justify-start items-center flex-col gap-3  bg-[#DEF2E9] rounded-xl w-full sm:w-[181px] py-5">
                <p className="font-bold text-[#001008]">Excel</p>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src="/upload/xlx.png"
                    className="w-[45px] object-contain"
                    alt=""
                  />
                  <img
                    src="/upload/xlsm.png"
                    className="max-w-[45px] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-start items-center flex-col gap-3 bg-[#DEF2E9] rounded-xl w-full sm:w-[181px] py-5">
                <p className="font-bold text-[#001008]">Bim</p>
                <img
                  src="/upload/ifc.png"
                  className="w-[50px] object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center gap-7 py-5 px-5 w-full bg-[#E2E8F0] rounded-xl">
            <h3 className="text-[#001008] text-[32px] font-bold">Project</h3>
            <div className="flex sm:flex-row flex-col lg:w-auto w-full justify-center items-center gap-3">
              <div className="bg-white rounded-xl px-5 h-[64px] flex justify-start items-center gap-4 w-full lg:w-[462px]">
                <img
                  src="/upload/folder.png"
                  className="w-[25px] object-contain"
                  alt=""
                />
                <input
                  type="text"
                  className="w-full bg-none border-none outline-none text-[#94A3B8] font-bold text-2xl"
                  placeholder="Your Project"
                />
              </div>
              <button className="text-2xl font-bold text-[#0F172A] h-[64px] sm:w-auto w-full min-w-[190px] bg-secondary rounded-xl">
                New Project
              </button>
            </div>
          </div>
          <button className="text-2xl  w-full font-bold self-center text-[#0F172A] h-[64px] sm:w-[190px] bg-[#ADDFC7] rounded-xl">
            Build Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
