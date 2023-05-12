import { useState } from "react";
import InputFieldIcon from "../../components/form/InputFieldIcon";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    pwd: "",
    remember: false,
  });
  return (
    <div className="flex justify-center items-center sm:items-start flex-col gap-8 sm:w-auto w-[90%]">
      <div className="w-full sm:text-left text-center">
        <h2 className="text-2xl font-bold text-[#0f172a] font-inter">Login</h2>
        <p className="text-sm mt-1 font-normal font-inter text-[#64748B]">
          Welcome back! please enter your detail
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-start items-start flex-col w-full sm:w-[400px] gap-3"
      >
        <InputFieldIcon
          handler={setFormData}
          value={formData.email}
          placeholder="Email"
          name="email"
          ico="/form-icons/mail.png"
        />

        <InputFieldIcon
          handler={setFormData}
          value={formData.pwd}
          placeholder="Password"
          name="pwd"
          ico="/form-icons/lock.png"
          type="password"
        />
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start items-center gap-2">
            <input
              type="checkbox"
              className="accent-secondary w-4 h-4"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, remember: e.target.checked }))
              }
              checked={formData.remember}
              id="remember"
            />
            <label
              htmlFor="remember"
              className="text-[#0F172A] select-none text-sm font-medium font-inter"
            >
              Remember me
            </label>
          </div>
          <Link
            to="/forgot_pwd"
            className="text-black font-bold text-sm font-inter"
          >
            Forgot Password
          </Link>
        </div>
        <div className="w-full flex justify-start items-center flex-col mt-3 gap-5">
          <button className="bg-secondary rounded-xl w-full h-[56px] font-inter font-bold text-base hover:bg-transparent hover:text-secondary border-2 border-solid border-secondary transition-all duration-300 text-white grid place-items-center">
            Sign In
          </button>
          <button className="bg-white rounded-xl flex justify-center items-center gap-2 w-full h-[56px] font-inter font-bold text-base hover:bg-secondary hover:text-white border-2 border-solid border-secondary transition-all duration-300 text-secondary ">
            <img src="/google.png" className="w-7 object-contain" alt="" />{" "}
            Login With Google
          </button>
          <p className="text-sm font-inter text-[#0F172A]">
            Dont't have an account?{" "}
            <Link to="/" className="text-secondary font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
