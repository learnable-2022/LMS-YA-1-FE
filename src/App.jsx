import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import SFlowI from './pages/Student/studentSignupFlow/SFlowI';
import SFlowII from './pages/Student/studentSignupFlow/SFlowII';
import SFlowIII from './pages/Student/studentSignupFlow/SFlowIII';
import SFlowIV from './pages/Student/studentSignupFlow/SFlowIV';

import students from './data/Mock_Student';
import Students from './pages/Admin/Students/Students';
import StudentDetails from './pages/Admin/StudentDetails/StudentDetails';

import AddWeek from './components/Modals/AddWeek/AddWeek';
import UploadVideo from './components/Modals/UploadVideo/UploadVideo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
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
      </Routes>
    </>
  );
}

export default App;
