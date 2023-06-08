import './App.css';
import Students from './pages/Admin/Students/Students';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import SFlowI from './pages/Student/studentSignupFlow/SFlowI';
import SFlowII from './pages/Student/studentSignupFlow/SFlowII';
import SFlowIII from './pages/Student/studentSignupFlow/SFlowIII';
import SFlowIV from './pages/Student/studentSignupFlow/SFlowIV';
import StudentDetails from './pages/Admin/StudentDetails/StudentDetails';
import Layout from './pages/Admin/CourseUpload/DashboardLayout/DashboardLayout';
import CoursePgI from './pages/Admin/CourseUpload/CoursePgI/CoursePgI';
import NotAdded from './pages/Admin/CourseUpload/NotAdded/NotAdded';
import VideoNotAdded from './pages/Admin/CourseUpload/VideoNotAdded/VideoNotAdded';
import ThumbnailRow from './pages/Admin/CourseUpload/ThumbnailRow/ThumbnailRow';
import VideosRow from './pages/Admin/CourseUpload/VideosRow/VideosRow';

import students from './data/Mock_Student';
import AddWeek from './components/Modals/AddWeek/AddWeek';
import UploadVideo from './components/Modals/UploadVideo/UploadVideo';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/students' element={<Students />} />
        <Route
          path='/student-details/:name'
          element={<StudentDetails students={students} />}
        />
        <Route path='/test' element={<AddWeek />} />
        <Route path='/test2' element={<UploadVideo />} />
        <Route path='/signup' element={<SFlowI />} />
        <Route path='/student-signup-access-key' element={<SFlowII />} />
        <Route path='/student-signup-details-confirm' element={<SFlowIII />} />
        <Route path='/student-signup-create-password' element={<SFlowIV />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/courses' element={<Layout />}>
          <Route path='' element={<CoursePgI />} />
          <Route path='thumbnail-row/:pathName' element={<ThumbnailRow />} />
          <Route path='notAdded/:pathName' element={<NotAdded />} />
          <Route
            path='videoNotAdded/:pathName/:week'
            element={<VideoNotAdded />}
          />
          <Route path='videos-row/:pathName/:week' element={<VideosRow />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
