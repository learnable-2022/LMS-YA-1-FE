import DashHeader from "../../../components/DashHeader/DashHeader";
import DashNavbar from "../../../components/DashNavbar/DashNavbar";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import design from "./students.module.css";
import TEST from "../../../assets/Tappi.png";
import { useState } from "react";
import StudentTable from "../../../components/StudentsTable/StudentsTable";
import Footer from "../../../components/Footer/Footer";

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <DashNavbar />
      <div className={design.Students_inner}>
        <DashHeader name="Tappi" position="Program Co-ordinator" img={TEST} />
        <div className={design.Students_body}>
          <Sidebar />
          <div className={design.Students_main}>
            <h2>Students</h2>
            <div className={design.Students_search}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Select an Option</option>
                <option value="option1">Learning Path</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={design.Students_table}>
              <StudentTable />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Students;
