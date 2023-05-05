import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import Topbar from "../../layout/Topbar";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [topBarTitle, setTopBarTitle] = useState(
    "Automated Emissions analysis"
  );

  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setTopBarTitle("Automated Emissions analysis");
        break;
      case "/dashboard/suppliers":
        setTopBarTitle("Your Suppliers");
        break;
      case "/dashboard/offset":
        setTopBarTitle("Carbon offsetting");
        break;
      case "/dashboard/targeting":
        setTopBarTitle("Net zero strategy builder");
        break;
      case "/dashboard/baseline":
        setTopBarTitle("Baseline Year");
        break;
      case "/dashboard/export":
        setTopBarTitle("Export to 3rd party accounting app");
        break;
      case "/dashboard/upload":
        setTopBarTitle("Upload");
        break;

      default:
        break;
    }
  }, [pathname]);

  return (
    <div className="grid min-h-screen   grid-cols-1 xl:grid-cols-[350px__1fr] grid-rows-[90px__1fr] grid-area w-full">
      <Sidebar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
      />
      <Topbar title={topBarTitle} setSidebarToggle={setSidebarToggle} />
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
