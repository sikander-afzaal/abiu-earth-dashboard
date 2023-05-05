import { NavLink } from "react-router-dom";

const ProfileSidebar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div
      className={`sidebar wrapper px-6 pb-6 xl:static fixed top-0 ${
        sidebarToggle ? "left-0" : "-left-full"
      } bg-bgDark h-full xl:h-auto transition-all duration-500`}
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
      <div className="flex justify-start  items-center w-full h-[90px] min-h-[90px]">
        <img src="/logo.png" className="w-[130px] object-contain" alt="" />
      </div>
      <div className="mt-2 xl:mt-5 h-auto xl:h-full bg-white flex justify-start items-center flex-col w-full rounded-lg p-3">
        <SidebarLink
          ico="/form-icons/user.png"
          url="/profile"
          title="Personal Informations"
          desc="Est arcu pharetra proin pellentesque"
        />
        <SidebarLink
          ico="/form-icons/lock.png"
          url="/profile/security"
          title="Security"
          desc="Est arcu pharetra proin pellentesque"
        />
      </div>
    </div>
  );
};

export default ProfileSidebar;

const SidebarLink = ({ ico, url, title, desc }) => {
  return (
    <NavLink
      to={url}
      end
      className={({ isActive }) =>
        `w-full rounded-xl ${
          isActive ? "bg-[#f5f5f5]" : "bg-white"
        } p-4 gap-4 flex justify-start items-center`
      }
    >
      {({ isActive }) => (
        <>
          <div
            className={`rounded-full  ${
              isActive ? "bg-white" : "bg-[#F5F5F5]"
            } w-[48px] min-w-[48px] h-[48px] grid place-items-center `}
          >
            <img src={ico} className="w-6 object-contain" alt="" />
          </div>
          <div>
            <h4 className="font-inter font-bold text-sm text-[#04091E]">
              {title}
            </h4>
            <p className="text-xs mt-1 font-medium font-inter text-[#747681]">
              {desc}
            </p>
          </div>
        </>
      )}
    </NavLink>
  );
};
