import inputHandler from "../../utils/formInputHandler";

const InputFieldIcon = ({
  ico,
  value,
  placeholder,
  type = "text",
  handler,
  name,
  signup,
}) => {
  return (
    <div className="flex justify-start items-start flex-col w-full gap-2">
      <div className="flex justify-start items-center w-full h-[56px] px-4 gap-3 rounded-xl border border-solid border-borderGray focus-within:border-black transition-all duration-200">
        <img src={ico} alt="" className="w-6 h-6 object-contain" />
        <input
          name={name}
          type={type}
          onChange={(e) => inputHandler(e, handler)}
          placeholder={placeholder}
          value={value}
          className="w-full text-[#0F172A] font-semibold placeholder:font-normal placeholder:text-[#94A3B8] bg-none outline-none border-none"
        />
      </div>
      {type === "password" && signup && (
        <p className="text-xs font-inter text-[#64748b]">
          Your password must have at least 8 characters
        </p>
      )}
    </div>
  );
};

export default InputFieldIcon;
