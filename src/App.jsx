import Certification from "./pages/Certification/Certification";
import CerticateUpload from "./pages/Certification/CertificateUpload";
// import Test from "./components/Modals/Test/Test";
import ImageRow from "./pages/Certification/ImageRow/ImageRow";
import Students from "./pages/Admin/Students/Students";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import SFlowI from "./pages/Student/studentSignupFlow/SFlowI";
import SFlowII from "./pages/Student/studentSignupFlow/SFlowII";
import SFlowIII from "./pages/Student/studentSignupFlow/SFlowIII";
import SFlowIV from "./pages/Student/studentSignupFlow/SFlowIV";
import StudentDetails from "./pages/Admin/StudentDetails/StudentDetails";
import Layout from "./pages/Admin/CourseUpload/DashboardLayout/DashboardLayout";
import CoursePgI from "./pages/Admin/CourseUpload/CoursePgI/CoursePgI";
import NotAdded from "./pages/Admin/CourseUpload/NotAdded/NotAdded";
import VideoNotAdded from "./pages/Admin/CourseUpload/VideoNotAdded/VideoNotAdded";
import ThumbnailRow from "./pages/Admin/CourseUpload/ThumbnailRow/ThumbnailRow";
import VideosRow from "./pages/Admin/CourseUpload/VideosRow/VideosRow";

import students from "./data/Mock_Student";
import AddWeek from "./components/Modals/AddWeek/AddWeek";
import UploadVideo from "./components/Modals/UploadVideo/UploadVideo";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import geekNftAbi from "../src/contractsData/abis/GeekNFT.json";
import geekNftAddress from "../src/contractsData/abis/GeekNFT-address.json";
import geekTokenAbi from "../src/contractsData/abis/GeekToken.json";
import geekTokenAddress from "../src/contractsData/abis/GeekToken-address.json";

function App() {
  const [account, setAccount] = useState(null);
  const [geekNft, setgeekNft] = useState(null);
  const [geekToken, setgeekToken] = useState(null);

  const WebHandler = useCallback(async () => {
    // get the account in metamask
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      const provider = new ethers.BrowserProvider(window.ethereum);
      // Get Signer
      const signer = provider.getSigner();

      // Helps Changes account when user switch accounts
      window.ethereum.on("accountsChanged", async function (accounts) {
        setAccount(account[0]);
        await WebHandler();
      });

      // Get Contracts
      const geekNftContract = new ethers.Contract(
        geekNftAddress.address,
        geekNftAbi.abi,
        signer
      );
      setgeekNft(geekNftContract);

      const geekTokenContract = new ethers.Contract(
        geekTokenAddress.address,
        geekTokenAbi.abi,
        signer
      );
      setgeekToken(geekTokenContract);
    } else {
      alert("MetaMask Not Installed");
    }
  }, [account]);
  useEffect(() => {
    WebHandler();
    console.log(geekNft, geekToken);
  }, [WebHandler]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard WebHandler={WebHandler} account={account} />}
        />
        <Route path="/students" element={<Students />} />
        <Route
          path="/student-details/:name"
          element={<StudentDetails students={students} />}
        />
        <Route path="/test" element={<AddWeek />} />
        <Route path="/test2" element={<UploadVideo />} />
        <Route path="/signup" element={<SFlowI />} />
        <Route path="/student-signup-access-key" element={<SFlowII />} />
        <Route path="/student-signup-details-confirm" element={<SFlowIII />} />
        <Route path="/student-signup-create-password" element={<SFlowIV />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<Layout />}>
          <Route path="" element={<CoursePgI />} />
          <Route path="thumbnail-row/:pathName" element={<ThumbnailRow />} />
          <Route path="notAdded/:pathName" element={<NotAdded />} />
          <Route
            path="videoNotAdded/:pathName/:week"
            element={<VideoNotAdded />}
          />
          <Route path="videos-row/:pathName/:week" element={<VideosRow />} />
        </Route>
        <Route path="/certificate" element={<Certification />} />
        <Route path="/certificate/ImageRow/" element={<ImageRow />} />
        <Route path="/upload" element={<CerticateUpload geekNft={geekNft} />} />
      </Routes>
    </>
  );
}

export default App;
