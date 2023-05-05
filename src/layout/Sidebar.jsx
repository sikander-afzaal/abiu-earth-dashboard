import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`sidebar  bg-bgDark w-full   flex gap-10 justify-start items-start py-8 flex-col border-r border-solid border-[#282C38] top-0 h-full xl:h-auto xl:max-h-screen overflow-y-auto fixed ${
        sidebarToggle ? "left-0" : "-left-full"
      }   xl:sticky transition-all duration-700 z-[90]`}
    >
      <button
        onClick={() => setSidebarToggle(false)}
        className="absolute top-5 right-3 text-white xl:hidden block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex justify-start pb-5 px-5 items-center w-full border-b border-solid border-b-[#282C38]">
        <img src="/logo.png" alt="" className="w-[130px] object-contain" />
      </div>
      <div className="flex w-full justify-start items-start flex-col gap-4">
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/category.png"
          name="Dashboard"
          url=""
          end={pathname === "/dashboard/analytics" ? false : true}
        />
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/statistic.png"
          name="Suppliers"
          url="/suppliers"
        />
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/settings.png"
          name="Offsetting"
          url="/offset"
        />
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/target.png"
          name="Targeting"
          url="/targeting"
        />
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/bag.png"
          name="Baseline Year"
          url="/baseline"
        />
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/export.png"
          name="Export"
          url="/export"
        />
        <SidebarLink
          setSidebarToggle={setSidebarToggle}
          ico="/upload.png"
          name="Upload"
          url="/upload"
        />
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarLink = ({ url, name, ico, setSidebarToggle, end = true }) => {
  return (
    <NavLink
      end={end}
      onClick={() => setSidebarToggle(false)}
      to={`/dashboard${url}`}
      className={({ isActive }) =>
        `w-full p-4 flex justify-start items-center gap-6 ${
          isActive ? "bg-secondary" : "bg-transparent"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <img
            src={ico}
            className={`${
              isActive ? "invert brightness-0" : ""
            } w-[28px] h-[28px] object-contain"`}
            alt=""
          />
          <p
            className={`${
              isActive ? "font-bold text-white" : "font-medium text-[#94A3B8]"
            }  font-inter  text-xl`}
          >
            {name}
          </p>
        </>
      )}
    </NavLink>
  );
};
