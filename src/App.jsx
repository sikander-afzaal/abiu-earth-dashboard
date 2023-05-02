import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import { useState } from "react";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="grid min-h-screen gap-y-4 xl:gap-y-8 grid-cols-1 xl:grid-cols-[350px__1fr] grid-rows-[90px__1fr] grid-area w-full">
      <Sidebar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
      />
      <Topbar setSidebarToggle={setSidebarToggle} />
      <div className="main w-full pb-6">
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
