import { Link, useLocation } from "react-router-dom";
import Notification from "../components/Notification";
import { useCallback, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOutsideClick";

const Topbar = ({ setSidebarToggle, profile, title }) => {
  const notifBarRef = useRef(null);
  const { pathname } = useLocation();
  const [notifBar, setNotifBar] = useState(false);
  useOnClickOutside(
    notifBarRef,
    useCallback(() => {
      setNotifBar(false);
    }, [])
  );

  return (
    <div
      className={`topbar  flex justify-center items-center xl:px-8 w-full ${
        pathname === "/dashboard" ||
        pathname === "/dashboard/analytics" ||
        profile
          ? "bg-bgDark"
          : "bg-[#F8FAFC]"
      }`}
    >
      <div className="w-[90%] flex justify-between items-center xl:w-full">
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={() => setSidebarToggle(true)}
            className={`xl:hidden block ${
              pathname === "/dashboard" ||
              pathname === "/dashboard/analytics" ||
              profile
                ? "text-white"
                : "text-black"
            }`}
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
          {profile ? (
            <div className="flex justify-start items-center gap-3">
              <Link
                to="/dashboard"
                className="bg-secondary rounded-full min-w-[40px] text-white w-10 h-10 grid place-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Link>
              <p className="text-primaryShade sm:block hidden text-xl lg:text-2xl font-bold">
                Profile
              </p>
            </div>
          ) : (
            <p className="text-primaryShade sm:block hidden text-xl lg:text-2xl font-bold">
              {title}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center gap-4">
          <div
            className={`w-[260px] rounded-[10px] overflow-hidden  border border-solid p-3 hidden lg:flex justify-start ${
              pathname === "/dashboard" ||
              pathname === "/dashboard/analytics" ||
              profile
                ? "bg-[#282C38] border-baseGray"
                : "bg-white border-[#CBD5E1]"
            } items-center gap-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#3C4254"
              className="w-5 h-5 min-w-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Type to search..."
              className="text-[#757B8C] h-full outline-none bg-transparent text-sm font-normal font-inter w-full"
            />
            <img
              src="/mic.png"
              className="w-5 min-w-[20px] object-contain"
              alt=""
            />
          </div>
          <div className="bg-primary h-[23px] w-[2px]"></div>
          <img
            src="/bell.png"
            className={`w-[32px] object-contain ${
              pathname === "/dashboard" ||
              pathname === "/dashboard/analytics" ||
              profile
                ? "invert-0"
                : "invert"
            }`}
            alt=""
          />
          <div className="bg-primary h-[23px] w-[2px]"></div>
          <div ref={notifBarRef} className="relative">
            <button onClick={() => setNotifBar((prev) => !prev)}>
              <img
                src="/user.png"
                className="w-[42px] object-contain h-[42px] rounded-full"
                alt=""
              />
            </button>
            {notifBar && <Notification />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
