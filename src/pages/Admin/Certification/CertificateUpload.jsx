import DashHeader from "../../../components/DashHeader/DashHeader";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import TEST from "../../../assets/Tappi.png";
import design from "./Cetification.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useLocation, Link } from "react-router-dom";
import CertNotAdded from "./CertNotAdded";
import { useState } from "react";

const CerticateUpload = () => {
  const [geekNftValue, setgeekNftValue] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fisrtName = searchParams.get("firstName");
  const handleGeeknft = (nftValue) => {
    setgeekNftValue(nftValue);
  };
  return (
    <div>
      <div className={design.Students_inner}>
        <div className={design.Students_body}>
          <Sidebar />
          <div className={design.Students_main}>
            <DashHeader
              name="Tappi"
              position="Program Co-ordinator"
              img={TEST}
              onGeeknft={handleGeeknft}
            />
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                cusor: "pointer",
              }}
            >
              <Link
                to="/certificate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span>Certificates</span>
              </Link>

              <KeyboardArrowRightIcon />
              <span> {fisrtName}</span>
            </h2>
            <CertNotAdded name={fisrtName} geekNftValue={geekNftValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CerticateUpload;
