import { useEffect, useState } from "react";
import Topbar from "../../layout/Topbar";
import ProfileSidebar from "../../layout/ProfileSidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("bg-bgDark");

    return () => {
      document.querySelector("body").classList.remove("bg-bgDark");
    };
  }, []);

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="grid min-h-screen   grid-cols-1 xl:grid-cols-[380px__1fr] grid-rows-[90px__1fr] grid-area w-full">
      <Topbar setSidebarToggle={setSidebarToggle} profile />
      <ProfileSidebar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
      />
      <div className="main overflow-x-hidden pb-6 pt-2 xl:pt-5 pr-0 w-[90%] xl:pr-6 mx-auto  xl:w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
