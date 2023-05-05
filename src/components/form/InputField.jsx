import inputHandler from "../../utils/formInputHandler";

const InputField = ({
  label,
  handler,
  value,
  name,
  readonly,
  inputClasses = "bg-transparent h-[40px] text-sm  text-[#475569]",
  labelClasses = "text-[#222] text-sm font-normal",
}) => {
  return (
    <div className="flex justify-start items-start w-full flex-col gap-2">
      <label htmlFor={label} className={labelClasses}>
        {label}
      </label>
      <input
        readOnly={readonly}
        className={`w-full outline-none ${
          !readonly
            ? "focus:border-secondary focus:text-secondary border border-solid border-borderGray"
            : ""
        } transition-all duration-300   rounded-lg px-4  ${inputClasses}`}
        name={name}
        id={label}
        onChange={(e) => inputHandler(e, handler)}
        value={value}
      />
    </div>
  );
};

export default InputField;
