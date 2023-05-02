import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

const App = () => {
  return (
    <div className="grid min-h-screen grid-cols-[350px__1fr] grid-rows-[90px__1fr] grid-area w-full">
      <Sidebar />
      <Topbar />
      <div className="main w-full">
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
