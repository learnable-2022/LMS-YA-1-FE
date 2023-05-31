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
import Layout from "./pages/CourseUpload/DashboardLayout/DashboardLayout";
import CoursePgI from "./pages/CourseUpload/CoursePgI/CoursePgI";
import NotAdded from "./pages/CourseUpload/NotAdded/NotAdded";
import ThumbnailRow from "./pages/CourseUpload/ThumbnailRow/ThumbnailRow";
import VideosRow from "./pages/CourseUpload/VideosRow/VideosRow";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/signup" element={<SFlowI />} />
        <Route path="/student-signup-access-key" element={<SFlowII />} />
        <Route path="/student-signup-details-confirm" element={<SFlowIII />} />
        <Route path="/student-signup-create-password" element={<SFlowIV />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/leaderboard" element={<Layout />} >
          <Route path="" element={<CoursePgI />} />
          <Route path="notAdded" element={<NotAdded />} />
          <Route path="thumbnail-row" element={<ThumbnailRow />} />
          <Route path="videos-row" element={<VideosRow />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
