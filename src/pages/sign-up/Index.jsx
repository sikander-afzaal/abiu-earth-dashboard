import { Outlet } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:py-0 py-10 h-auto min-h-screen lg:min-h-[750px] lg:h-screen">
      <div className="flex justify-center  items-center">
        <Outlet />
      </div>
      <div className="hidden lg:flex bg-black justify-between  p-10 flex-col items-center">
        <div className="w-full h-full grid place-items-center">
          <img src="/logo2.png" className="w-[180px] object-contain" alt="" />
        </div>
        <p className="text-white text-2xl 2xl:leading-[1.2] 2xl:text-[40px] font-bold font-inter text-center  ">
          Be a part of the revolution and join companies that are taking
          responsibility for their carbon footprint.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
