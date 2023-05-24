import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SFlowII from "./pages/studentSignupFlow/SFlowII";
import SFlowIII from "./pages/studentSignupFlow/SFlowIII";
import SFlowIV from "./pages/studentSignupFlow/SFlowIV";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<SFlowII/>}/>
        <Route path='/signup-details-confirm' element={<SFlowIII/>}/>
        <Route path='/signup-create-password' element={<SFlowIV/>}/>
      </Routes>
    </>
  );
}

export default App;
