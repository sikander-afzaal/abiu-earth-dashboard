import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import Topbar from "../../layout/Topbar";
import { useState } from "react";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="grid min-h-screen   grid-cols-1 xl:grid-cols-[350px__1fr] grid-rows-[90px__1fr] grid-area w-full">
      <Sidebar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
      />
      <Topbar setSidebarToggle={setSidebarToggle} />
      <div
        className={`main w-full overflow-x-hidden pb-6 pt-4 xl:pt-8 ${
          pathname !== "/dashboard" ? "bg-[#F8FAFC]" : "bg-bgDark"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
