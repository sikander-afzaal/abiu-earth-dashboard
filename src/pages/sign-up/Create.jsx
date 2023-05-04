import { useState } from "react";
import InputFieldIcon from "../../components/form/InputFieldIcon";
import { Link } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pwd: "",
  });
  return (
    <div className="flex justify-center items-center sm:items-start flex-col gap-8 sm:w-auto w-[90%]">
      <h2 className="text-2xl font-bold text-[#0f172a] font-inter">
        Sign Up for an Account
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-start items-start flex-col w-full sm:w-[400px] gap-3"
      >
        <InputFieldIcon
          handler={setFormData}
          value={formData.name}
          placeholder="Name"
          name="name"
          ico="/form-icons/user.png"
        />
        <InputFieldIcon
          handler={setFormData}
          value={formData.email}
          placeholder="Email"
          name="email"
          ico="/form-icons/mail.png"
        />
        <InputFieldIcon
          handler={setFormData}
          value={formData.phone}
          placeholder="Phone"
          name="phone"
          ico="/form-icons/phone.png"
        />
        <InputFieldIcon
          handler={setFormData}
          value={formData.pwd}
          placeholder="Password"
          name="pwd"
          ico="/form-icons/lock.png"
          type="password"
        />
        <div className="w-full flex justify-start items-center flex-col mt-8 gap-5">
          <button className="bg-secondary rounded-xl w-full h-[56px] font-inter font-bold text-base hover:bg-transparent hover:text-secondary border-2 border-solid border-secondary transition-all duration-300 text-white grid place-items-center">
            Create Nota Account
          </button>
          <p className="text-sm font-inter text-[#0F172A]">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary font-bold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Create;
