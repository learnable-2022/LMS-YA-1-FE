import DashHeader from "../../../components/DashHeader/DashHeader";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import TEST from "../../../assets/Tappi.png";
import { Book, Cup, CertCap } from "../../../assets/studentDet";
import design from "./studentDetails.module.css";
const StudentDetails = () => {
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
            <h2>Students </h2>
            <div className={design.cards}>
              <div className={design.card_item}>
                <div className={design.card_top}>
                  <img src={Book} />
                  <p>
                    <span>50</span>/100
                  </p>
                </div>
                <div>
                  <p>Complete courses</p>
                </div>
              </div>
              <div className={design.card_item}>
                <div className={design.card_top}>
                  <img src={Cup} />
                  <p>
                    <span>5</span>/100
                  </p>
                </div>
                <div>
                  <p>Task completed</p>
                </div>
              </div>
              <div className={design.card_item}>
                <div className={design.card_top}>
                  <img src={CertCap} />
                  <p>
                    <span>0</span>
                  </p>
                </div>
                <div>
                  <p>Complete courses</p>
                </div>
              </div>
              <div className={design.card_item_last}>
                <h3>55.5%</h3>
                <p>Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
