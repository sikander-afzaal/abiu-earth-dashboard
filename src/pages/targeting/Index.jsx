import { useState } from "react";
import SelectMenu from "../../components/form/SelectMenu";
import InputField from "../../components/form/InputField";
import Table from "./Table";

const Targeting = () => {
  const [formData, setFormData] = useState({
    baselineYear: "2022",
    startYear: "2023",
    reductionTarget: "50%",
    baseline: "100%",
    targetHit: "yes",
    targetYear: "2030",
    annualReduction: "7.41%",
  });
  return (
    <div className="wrapper">
      <div className="contain overflow-x-hidden flex-col justify-start items-center gap-6">
        <div className="w-full bg-white px-5 flex justify-between items-center gap-3 border border-solid border-borderGray h-[84px] rounded-[10px]">
          <h3 className="title">Scenerio Builder</h3>
          <button className="bg-secondary px-4 py-1.5 rounded-full text-white hover:text-secondary hover:bg-transparent transition-all duration-300 border border-solid border-secondary flex justify-center items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 8C15.5026 9.67943 14.9414 11.3111 13.9064 12.6337C12.8714 13.9563 11.4225 14.8933 9.79164 15.2944C8.16083 15.6956 6.44255 15.5379 4.91207 14.8464C3.38159 14.1549 2.12747 12.9698 1.35062 11.4808C0.573775 9.99187 0.319151 8.28526 0.627541 6.63438C0.935931 4.9835 1.78949 3.4839 3.05148 2.37581C4.31347 1.26771 5.91086 0.61524 7.58775 0.522925C9.26465 0.43061 10.924 0.90379 12.3 1.86666L12.2083 1.6C12.1376 1.38451 12.1554 1.14975 12.2577 0.947368C12.3601 0.744985 12.5387 0.591555 12.7542 0.52083C12.9697 0.450106 13.2044 0.46788 13.4068 0.570244C13.6092 0.672608 13.7626 0.851175 13.8333 1.06666L14.6667 3.56666C14.708 3.69198 14.719 3.82533 14.6987 3.95572C14.6784 4.08611 14.6274 4.20982 14.55 4.31666C14.4693 4.43026 14.3615 4.52182 14.2363 4.58297C14.1111 4.64411 13.9725 4.67289 13.8333 4.66666H11.3333C11.1123 4.66666 10.9004 4.57887 10.7441 4.42259C10.5878 4.26631 10.5 4.05434 10.5 3.83333C10.503 3.65694 10.5619 3.48606 10.6682 3.34529C10.7746 3.20453 10.9228 3.10113 11.0917 3.05C9.99545 2.36486 8.7027 2.06326 7.41647 2.19258C6.13024 2.32189 4.9234 2.87479 3.98551 3.76444C3.04762 4.65408 2.43181 5.83007 2.2348 7.10768C2.0378 8.3853 2.27077 9.69216 2.89711 10.823C3.52345 11.9538 4.50768 12.8446 5.69522 13.3554C6.88275 13.8661 8.2063 13.9679 9.45799 13.6448C10.7097 13.3217 11.8186 12.592 12.6105 11.5703C13.4025 10.5486 13.8326 9.29271 13.8333 8C13.8333 7.77898 13.9211 7.56702 14.0774 7.41074C14.2337 7.25446 14.4457 7.16666 14.6667 7.16666C14.8877 7.16666 15.0996 7.25446 15.2559 7.41074C15.4122 7.56702 15.5 7.77898 15.5 8Z"
                fill="currentColor"
              />
            </svg>
            Reset
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr__1.5fr] w-full gap-5">
          <div className="bg-white   border border-solid border-borderGray rounded-[10px] flex justify-start items-start flex-col w-full gap-5">
            <div className="w-full p-5  flex justify-between border-b border-solid border-borderGray items-center gap-2">
              <h2 className="title">Target Setting</h2>
              <button>
                <img src="/menu.png" alt="" />
              </button>
            </div>
            <div className="w-full pt-0 grid-cols-1 grid sm:grid-cols-2 gap-5 p-5">
              <SelectMenu
                value={formData.baselineYear}
                name={"baselineYear"}
                options={["2022", "2023", "2024"]}
                label="Baseline Year"
                handler={setFormData}
              />
              <SelectMenu
                value={formData.startYear}
                name={"startYear"}
                options={["2022", "2023", "2024"]}
                label="Start Year"
                handler={setFormData}
              />
              <InputField
                value={formData.reductionTarget}
                name={"reductionTarget"}
                label="Reduction Target"
                handler={setFormData}
              />
              <InputField
                value={formData.baseline}
                name={"baseline"}
                label="Baseline"
                handler={setFormData}
              />
              <SelectMenu
                value={formData.targetHit}
                name={"targetHit"}
                options={["Yes", "No", "2024"]}
                label="Will target be hit?"
                handler={setFormData}
              />
              <SelectMenu
                value={formData.targetYear}
                name={"targetYear"}
                options={["2030", "2031", "2032"]}
                label="Target Year"
                handler={setFormData}
              />
              <button className="bg-secondary text-white w-full h-[40px] text-sm font-inter border border-secondary border-solid rounded-lg transition-all duration-300 hover:bg-transparent hover:text-secondary self-end">
                Autofill target
              </button>
              <InputField
                value={formData.reductionTarget}
                name={"reductionTarget"}
                label="Annual Reduction Target"
                handler={setFormData}
              />
            </div>
          </div>
          <div className="bg-white p-5  border border-solid border-borderGray rounded-[10px] flex justify-start items-start flex-col w-full gap-5 ">
            <h2 className="title">
              Reduction Strategy <br />
              <span className="text-xs font-normal ">CO2e</span>
            </h2>

            <img
              src="/chart3.png"
              className="w-full h-full  max-w-[700px] self-center  object-contain"
              alt=""
            />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Targeting;
