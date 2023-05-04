import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <div className="flex justify-start items-center flex-col gap-6">
      <Link
        to="/create"
        className="bg-secondary rounded-xl w-[221px] h-[56px] font-inter font-bold text-base hover:bg-transparent hover:text-secondary border-2 border-solid border-secondary transition-all duration-300 text-white grid place-items-center"
      >
        Create Account
      </Link>
      <Link to="/login" className="text-black font-bold font-inter text-base">
        Login
      </Link>
    </div>
  );
};

export default Choose;
