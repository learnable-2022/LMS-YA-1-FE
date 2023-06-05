import DashHeader from "../../../components/DashHeader/DashHeader";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import design from "./students.module.css";
import TEST from "../../../assets/Tappi.png";
import StudentTable from "../../../components/StudentsTable/StudentsTable";

const Students = () => {
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
            <h2>Students</h2>

            <div className={design.Students_table}>
              <StudentTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
