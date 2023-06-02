import "./App.css";
import Students from "./pages/Admin/Students/Students";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import SFlowI from "./pages/studentSignupFlow/SFlowI";
import SFlowII from "./pages/studentSignupFlow/SFlowII";
import SFlowIII from "./pages/studentSignupFlow/SFlowIII";
import SFlowIV from "./pages/studentSignupFlow/SFlowIV";
import StudentDetails from "./pages/Admin/StudentDetails/StudentDetails";
import Layout from "./pages/CourseUpload/DashboardLayout/DashboardLayout";
import CoursePgI from "./pages/CourseUpload/CoursePgI/CoursePgI";
import NotAdded from "./pages/CourseUpload/NotAdded/NotAdded";
import VideoNotAdded from './pages/CourseUpload/VideoNotAdded/VideoNotAdded'
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
        <Route path="/courses" element={<Layout />} >
          <Route path="" element={<CoursePgI />} />
          <Route path="thumbnail-row/:pathName" element={<ThumbnailRow />} />
          <Route path="notAdded/:pathName" element={<NotAdded />} />
          <Route path="videoNotAdded/:pathName" element={<VideoNotAdded />} />
          <Route path="videos-row/:pathName" element={<VideosRow />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
