import "./App.css";
import { Carousel } from "./components/Carousel/Carousel";
import LoginPage from "./components/Login/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
