import { useState } from "react";
import InputFieldIcon from "../../components/form/InputFieldIcon";
import { Link } from "react-router-dom";

const NewPwd = () => {
  const [formData, setFormData] = useState({
    pwd: "",
    confirmPwd: "",
  });
  return (
    <div className="flex justify-center items-center sm:items-start sm:max-w-[400px] flex-col gap-5 sm:w-auto w-[90%]">
      <div className="w-full sm:text-left text-center">
        <h2 className="text-2xl font-bold text-[#0f172a] font-inter">
          Set new password
        </h2>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-start items-start flex-col w-full sm:w-[400px] gap-3"
      >
        <InputFieldIcon
          handler={setFormData}
          value={formData.pwd}
          placeholder="Password"
          name="pwd"
          type="password"
          ico="/form-icons/lock.png"
        />
        <InputFieldIcon
          handler={setFormData}
          value={formData.confirmPwd}
          placeholder="Confirm Password"
          name="confirmPwd"
          type="password"
          ico="/form-icons/lock.png"
        />
        <div className="w-full flex justify-start items-center flex-col mt-3 gap-5">
          <Link
            to="/forgot_pwd/success"
            className="bg-secondary rounded-xl w-full h-[56px] font-inter font-bold text-base hover:bg-transparent hover:text-secondary border-2 border-solid border-secondary transition-all duration-300 text-white grid place-items-center"
          >
            Confirm
          </Link>
          <Link to="/" className="text-sm font-bold font-inter text-[#0F172A]">
            Back to Sign In{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewPwd;
