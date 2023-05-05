import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Upload from "./pages/dashboard/upload/Index";
import Home from "./pages/dashboard/home/Index";
import Export from "./pages/dashboard/export/Index";
import Baseline from "./pages/dashboard/baseline/Index";
import Targeting from "./pages/dashboard/targeting/Index";
import Offsetting from "./pages/dashboard/offsetting/Index";
import Suppliers from "./pages/dashboard/suppliers/Index";
import SignUp from "./pages/sign-up/Index";
import Choose from "./pages/sign-up/Choose";
import Create from "./pages/sign-up/Create";
import Login from "./pages/login/Index";
import Forgot_Pwd from "./pages/forgot_password/Index";
import Step1 from "./pages/forgot_password/Step1";
import NewPwd from "./pages/forgot_password/NewPwd";
import Success from "./pages/forgot_password/Success";
import Otp from "./pages/forgot_password/Otp";
import Profile from "./pages/profile/Index";
import PersonalInfo from "./pages/profile/PersonalInfo";
import Analytics from "./pages/dashboard/analytics/Index";

const App = () => {
  return (
    <Routes>
      <Route element={<SignUp />} path="/">
        <Route element={<Choose />} path="" />
        <Route element={<Create />} path="create" />
      </Route>
      <Route element={<Profile />} path="/profile">
        <Route element={<PersonalInfo />} path="" />
      </Route>
      <Route element={<Forgot_Pwd />} path="/forgot_pwd">
        <Route element={<Step1 />} path="" />
        <Route element={<Otp />} path="otp" />
        <Route element={<NewPwd />} path="new" />
        <Route element={<Success />} path="success" />
      </Route>
      <Route element={<Login />} path="/login" />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route element={<Home />} path="" />
        <Route element={<Upload />} path="upload" />
        <Route element={<Export />} path="export" />
        <Route element={<Baseline />} path="baseline" />
        <Route element={<Targeting />} path="targeting" />
        <Route element={<Offsetting />} path="offset" />
        <Route element={<Suppliers />} path="suppliers" />
        <Route element={<Analytics />} path="analytics" />
      </Route>
    </Routes>
  );
};

export default App;
