import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Upload from "./pages/dashboard/upload/Index";
import Home from "./pages/dashboard/home/Index";
import Export from "./pages/dashboard/export/Index";
import Baseline from "./pages/dashboard/baseline/Index";
import Targeting from "./pages/dashboard/targeting/Index";
import Offsetting from "./pages/dashboard/offsetting/Index";
import Suppliers from "./pages/dashboard/suppliers/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route element={<Home />} path="" />
        <Route element={<Upload />} path="upload" />
        <Route element={<Export />} path="export" />
        <Route element={<Baseline />} path="baseline" />
        <Route element={<Targeting />} path="targeting" />
        <Route element={<Offsetting />} path="offset" />
        <Route element={<Suppliers />} path="suppliers" />
      </Route>
    </Routes>
  );
};

export default App;
