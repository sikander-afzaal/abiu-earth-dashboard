import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <img src="/success.png" className="object-contain" alt="" />
      <p className="text-[22px] font-bold text-center text-[#475569] font-inter">
        Your Password <br />
        has been reset successfully
      </p>
      <Link
        to="/login"
        className="bg-secondary max-w-[400px] rounded-xl mt-8 w-full h-[56px] font-inter font-bold text-base hover:bg-transparent hover:text-secondary border-2 border-solid border-secondary transition-all duration-300 text-white grid place-items-center"
      >
        Back to Sign In
      </Link>
    </div>
  );
};

export default Success;
