import { useState } from "react";
import InputField from "../../components/form/InputField";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "Sams",
    lastName: "Obey",
    email: "samsobey@gmail.com",
    phone: "(800) 555-0127",
    country: "United States",
    city: "Washington",
    address: "4517 Washington Ave. Manchester",
    postalCode: "",
  });
  const [readOnly, setReadOnly] = useState(true);
  return (
    <div className="wrapper pb-6  bg-white h-full rounded-xl ">
      <div className="contain flex-col justify-start items-start gap-3">
        <h2 className="text-[#111827] text-xl py-6 font-bold font-inter w-full border-b border-solid border-[#F1F2F4]">
          Personal Informations
        </h2>
        <div className="flex sm:flex-row flex-col justify-start items-center gap-4 w-full py-4">
          <img
            src="/user.png"
            className="w-[88px] object-contain h-[88px]"
            alt=""
          />
          <div className="flex justify-start  items-start flex-col gap-4">
            <p className="text-sm font-medium font-inter text-[#718096]  ">
              We only support .JPG, .JPEG, or .PNG file.
            </p>
            <div className="flex justify-start items-center gap-4">
              <label
                htmlFor="upload"
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-secondary cursor-pointer border-2 border-solid border-secondary transition-all duration-300 text-sm font-inter font-bold"
              >
                Upload your photo
                <input type="file" id="upload" className="hidden" />
              </label>
              <button className="font-bold text-secondary font-inter text-sm">
                Delete Image
              </button>
            </div>
          </div>
        </div>
        <form className="w-full mt-3 flex justify-start items-start flex-col gap-5 sm:gap-8">
          <div className="sm:flex-row flex-col flex justify-start items-center gap-5 sm:gap-8 w-full">
            <InputField
              handler={setFormData}
              label="First Name"
              value={formData.firstName}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="firstName"
            />
            <InputField
              handler={setFormData}
              label="Last Name"
              value={formData.lastName}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="lastName"
            />
          </div>
          <div className="sm:flex-row flex-col flex justify-start items-center gap-5 sm:gap-8 w-full">
            <InputField
              handler={setFormData}
              label="Email"
              value={formData.email}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="email"
            />
            <InputField
              handler={setFormData}
              label="Phone Number (Optional)"
              value={formData.phone}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="phone"
            />
          </div>
          <h2 className="text-[#111827] sm:-mb-1 text-xl font-bold font-inter w-full">
            Personal Address
          </h2>
          <div className="sm:flex-row flex-col flex justify-start items-center gap-5 sm:gap-8 w-full">
            <InputField
              handler={setFormData}
              label="Country or Region"
              value={formData.country}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="country"
            />
            <InputField
              handler={setFormData}
              label="City"
              value={formData.city}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="city"
            />
          </div>
          <div className="sm:flex-row flex-col flex justify-start items-center gap-5 sm:gap-8 w-full">
            <InputField
              handler={setFormData}
              label="Address"
              value={formData.address}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="address"
            />
            <InputField
              handler={setFormData}
              label="Postal Code"
              value={formData.postalCode}
              readonly={readOnly}
              inputClasses="bg-[#FAFAFA] h-[56px] font-inter text-base text-[#111827]"
              labelClasses="text-[#718096] text-base font-medium font-inter"
              name="postalCode"
            />
          </div>
          <button
            onClick={() => setReadOnly((prev) => !prev)}
            className="self-end bg-secondary px-4 py-2 sm:-mt-2 rounded-md border-2 border-solid border-secondary transition-all duration-300 hover:bg-transparent hover:text-secondary text-white text-sm font-bold font-inter"
            type="button"
          >
            {readOnly ? "Edit Profile" : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
