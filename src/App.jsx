import Certification from './pages/Admin/Certification/Certification';
import CerticateUpload from './pages/Admin/Certification/CertificateUpload';
// import Test from "./components/Modals/Test/Test";
import ImageRow from './pages/Admin/Certification/ImageRow/ImageRow';
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

// import students from './data/Mock_Student';
import AddWeek from './components/Modals/AddWeek/AddWeek';
import UploadVideo from './components/Modals/UploadVideo/UploadVideo';

import Dashboard from './pages/Admin/Dashboard/Dashboard';
import MyProfile from './pages/Admin/MyProfile/MyProfile';
import Settings from './pages/Admin/Settings/Settings';

import StudentsDash from './pages/Student/studentsDash/StudentsDash';
import SDashboard from './pages/Student/Dashboard/Dashboard';

import EduRegII from './pages/Admin/educatorSignupFlow/EduRegII';
import EduRegIII from './pages/Admin/educatorSignupFlow/EduRegIII';
import EduRegIV from './pages/Admin/educatorSignupFlow/EduRegIV';

import PublicRoutes from './pages/Login/PublicRoutes';
import LinkPage from './pages/LinkPage/LinkPage';
import UnAuthorized from './pages/UnAuthorized/UnAuthorized';
import UserRoute from './pages/Login/UserRoute';

import { useEffect, useState } from 'react';

// import Display from './components/Modals/Test/Test';

const ROLES = {
  User: 'student',
  Admin: 'admin',
};

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://lms-zwhm.onrender.com/api/v1/users/students'
      );
      const data = await response.json();
      setStudents(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Display />} /> */}
        <Route path='/' element={<PublicRoutes />}>
          <Route path='' element={<Home />} />
          <Route path='edu-signup' element={<EduRegII />} />
          <Route path='educator-enter-otp' element={<EduRegIII />} />
          <Route
            path='educator-signup-create-password'
            element={<EduRegIV />}
          />
          <Route path='signup' element={<SFlowI />} />
          <Route path='student-signup-access-key' element={<SFlowII />} />
          <Route path='student-signup-details-confirm' element={<SFlowIII />} />
          <Route path='student-signup-create-password' element={<SFlowIV />} />
          <Route path='login' element={<LoginPage />} />

          <Route path='linkpage' element={<LinkPage />} />
          <Route path='unauthorized' element={<UnAuthorized />} />
        </Route>

        <Route element={<UserRoute role={ROLES.User} />}>
          <Route path='/studentsDash' element={<StudentsDash />} />
          <Route path='/student-dashboard' element={<SDashboard />} />
        </Route>

        <Route element={<UserRoute role={ROLES.Admin} />}>
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />{' '}
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/settings' element={<Settings />} />
          <Route
            path='/student-details/:name'
            element={<StudentDetails students={students} />}
          />
          <Route path='/test' element={<AddWeek />} />
          <Route path='/test2' element={<UploadVideo />} />
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
          <Route path='/certificate' element={<Certification />} />
          <Route path='/certificate/ImageRow/' element={<ImageRow />} />
          <Route path='/upload' element={<CerticateUpload />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
