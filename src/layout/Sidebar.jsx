import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-full   flex gap-10 justify-start items-start py-8 flex-col border-r border-solid border-[#282C38]">
      <div className="flex justify-start pb-5 px-5 items-center w-full border-b border-solid border-b-[#282C38]">
        <img src="/logo.png" alt="" className="w-[130px] object-contain" />
      </div>
      <div className="flex w-full justify-start items-start flex-col gap-4">
        <SidebarLink ico="/category.png" name="Dashboard" url="/" />
        <SidebarLink ico="/statistic.png" name="Suppliers" url="/suppliers" />
        <SidebarLink ico="/target.png" name="Targeting" url="/targeting" />
        <SidebarLink ico="/bag.png" name="Baseline Year" url="/baseline" />
        <SidebarLink ico="/export.png" name="Export" url="/export" />
        <SidebarLink ico="/upload.png" name="Upload" url="/upload" />
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarLink = ({ url, name, ico }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={url}
      className={`${
        pathname === url ? "bg-secondary" : "bg-transparent"
      } w-full p-4 flex justify-start items-center gap-6`}
    >
      <img
        src={ico}
        className={`${
          url === pathname ? "invert brightness-0" : ""
        } w-[28px] h-[28px] object-contain"`}
        alt=""
      />
      <p
        className={`${
          pathname === url
            ? "font-bold text-white"
            : "font-medium text-[#94A3B8]"
        }  font-inter  text-2xl`}
      >
        {name}
      </p>
    </Link>
  );
};
