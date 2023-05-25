import "./App.css";
import Footer from "./components/Footer/Footer";
import Students from "./pages/Admin/Students/Students";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
