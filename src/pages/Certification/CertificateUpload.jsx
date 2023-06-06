import DashHeader from "../../components/DashHeader/DashHeader";
import Sidebar from "../../layout/Sidebar/Sidebar";
import TEST from "../../assets/Tappi.png";
import design from "./Cetification.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useLocation, Link } from "react-router-dom";

const CerticateUpload = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
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
            />
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                cusor: "pointer",
              }}
            >
              <Link to="/certificate" style={{ textDecoration: "none",color:"black" }}>
                <span>Certificates</span>
              </Link>

              <KeyboardArrowRightIcon />
              <span> {name}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CerticateUpload;
