import "./App.css";
import Students from "./pages/Admin/Students/Students";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import SFlowI from "./pages/studentSignupFlow/SFlowI";
import SFlowII from "./pages/studentSignupFlow/SFlowII";
import SFlowIII from "./pages/studentSignupFlow/SFlowIII";
import SFlowIV from "./pages/studentSignupFlow/SFlowIV";
import StudentDetails from "./pages/Admin/StudentDetails/StudentDetails";
// import Apps from "./components/Modals/Test/Test";
import AddWeek from "./components/Modals/AddWeek/AddWeek";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/test-me" element={<Apps />} /> */}
        <Route path="/test-me" element={<AddWeek />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students-details" element={<StudentDetails />} />
        {/* <Route path="/students/:id" element={<StudentDetails />} /> */}
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
