import "./App.css";
import Students from "./pages/Admin/Students/Students";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import SFlowI from "./pages/studentSignupFlow/SFlowI";
import SFlowII from "./pages/studentSignupFlow/SFlowII";
import SFlowIII from "./pages/studentSignupFlow/SFlowIII";
import SFlowIV from "./pages/studentSignupFlow/SFlowIV";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/signup" element={<SFlowI />} />
        <Route path="/student-signup-access-key" element={<SFlowII />} />
        <Route path="/student-signup-details-confirm" element={<SFlowIII />} />
        <Route path="/student-signup-create-password" element={<SFlowIV />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
