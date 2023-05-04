import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import { useState } from "react";
import Upload from "./pages/upload/Index";
import Export from "./pages/export/Index";
import Baseline from "./pages/baseline/Index";
import Targeting from "./pages/targeting/Index";
import Offsetting from "./pages/offsetting/Index";

const App = () => {
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
          pathname !== "/" ? "bg-[#F8FAFC]" : ""
        }`}
      >
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Upload />} path="/upload" />
          <Route element={<Export />} path="/export" />
          <Route element={<Baseline />} path="/baseline" />
          <Route element={<Targeting />} path="/targeting" />
          <Route element={<Offsetting />} path="/offset" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
