import inputHandler from "../../utils/formInputHandler";

const SelectMenu = ({ value, handler, label, name, options }) => {
  return (
    <div className="flex justify-start items-start w-full flex-col gap-2">
      <label htmlFor={label} className="text-[#222] text-sm font-normal">
        {label}
      </label>
      <select
        className="w-full outline-none focus:border-secondary focus:text-secondary transition-all duration-300 border border-solid border-borderGray rounded-lg text-sm h-[40px] px-4 text-[#475569]"
        name={name}
        id={label}
        onChange={(e) => inputHandler(e, handler)}
        value={value}
      >
        {options.map((elem) => {
          return (
            <option key={elem + label} value={elem} className=" text-black">
              {elem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectMenu;
