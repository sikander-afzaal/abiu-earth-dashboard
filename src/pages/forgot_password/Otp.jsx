import { useState } from "react";
import InputFieldIcon from "../../components/form/InputFieldIcon";
import { Link } from "react-router-dom";

const Otp = () => {
  const [formData, setFormData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  return (
    <div className="flex justify-center items-center sm:items-start sm:max-w-[400px] flex-col gap-5 sm:w-auto w-[90%]">
      <div className="w-full sm:text-left text-center">
        <h2 className="text-2xl font-bold text-[#0f172a] font-inter">
          OTP Verification
        </h2>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-start items-start flex-col w-full sm:w-[400px] gap-3"
      >
        <div className="grid grid-cols-6 w-full gap-3">
          {Array(6)
            .fill(false)
            .map((elem, idx) => {
              return (
                <input
                  key={idx + "otp"}
                  className="w-full text-center outline-none focus:border-secondary focus:text-secondary transition-all duration-300 border border-solid border-borderGray rounded-xl text-sm h-[53px]   text-[#475569]"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [`otp${idx + 1}`]: e.target.value,
                    }))
                  }
                  onKeyUp={(e) => {
                    if (e.key === "Backspace") {
                      return;
                    } else {
                      if (
                        e.target.nextElementSibling &&
                        formData[`otp${idx + 1}`]
                      ) {
                        e.target.nextElementSibling.focus();
                      }
                    }
                  }}
                  inputMode="numeric"
                  pattern="\d{1}"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={formData[`otp${idx + 1}`]}
                />
              );
            })}
        </div>
        <div className="w-full flex justify-start items-center flex-col mt-3 gap-5">
          <Link
            to="/forgot_pwd/new"
            className="bg-secondary rounded-xl w-full h-[56px] font-inter font-bold text-base hover:bg-transparent hover:text-secondary border-2 border-solid border-secondary transition-all duration-300 text-white grid place-items-center"
          >
            Verify
          </Link>
          <Link to="/" className="text-sm font-bold font-inter text-[#0F172A]">
            Back to Sign In{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Otp;
