import { useState } from "react";
import design from "./CertificateTable.module.css";
import students from "../../data/Mock_Student";
import Pagination from "@mui/material/Pagination";
import PROFILE from "../../assets/Tappi.png";
import { Link } from "react-router-dom";

const CertficateTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [nameFilter, setNameFilter] = useState("");
  const [learningPathFilter, setLearningPathFilter] = useState("");
  const [taskFilter, setTaskFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleLearningPathFilterChange = (event) => {
    setLearningPathFilter(event.target.value);
  };

  const handleTaskFilterChange = (event) => {
    setTaskFilter(event.target.value);
  };

  const nameOptions = [
    { label: "A-E", range: ["A", "B", "C", "D", "E"] },
    { label: "F-J", range: ["F", "G", "H", "I", "J"] },
    { label: "K-O", range: ["K", "L", "M", "N", "O"] },
    { label: "P-T", range: ["P", "Q", "R", "S", "T"] },
    { label: "U-Z", range: ["U", "V", "W", "X", "Y", "Z"] },
  ];

  const learningPathOptions = [
    { label: "Frontend", value: "Frontend", color: "red" },
    { label: "Backend", value: "Backend", color: "yellow" },
    { label: "Web3", value: "Web3", color: "green" },
    { label: "Product Design", value: "Product Design", color: "orange" },
  ];

  const filteredStudents = students
    .filter((student) => {
      const nameStart = student.name.charAt(0).toLowerCase();
      return (
        (nameFilter === "" || nameFilter === nameStart) &&
        (learningPathFilter === "" ||
          learningPathFilter === student.learningPath) &&
        (taskFilter === "" || taskFilter === student.task)
      );
    })
    .filter((student) => {
      if (selectedOption && selectedOption !== "") {
        return (
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          student.learningPath === selectedOption
        );
      } else {
        return student.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });

  const studentsPerPage = 10;
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const getCurrentPageStudents = () => {
    const startIndex = (currentPage - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    return filteredStudents.slice(startIndex, endIndex);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={design.Students_search}>
        <input
          type="text"
          placeholder="Search student's name..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select Learning Path</option>
          {learningPathOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <table className={design.student_table}>
        <thead>
          <tr>
            <th>
              <select value={nameFilter} onChange={handleNameFilterChange}>
                <option value="">Name</option>
                {nameOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </th>
            <th>
              <select
                value={learningPathFilter}
                onChange={handleLearningPathFilterChange}
              >
                <option value="">Learning Path</option>
                {learningPathOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </th>
            <th>
              <span>Cohort</span>
            </th>
            <th>
              <span>Status</span>
            </th>
          </tr>
        </thead>
        <tbody className={design.StudentTable_body}>
          {getCurrentPageStudents().map((student, index) => (
            <tr key={index}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/upload?name=${encodeURIComponent(student.name)}`}
              >
                <td className={design.user_flex}>
                  <img src={PROFILE} alt="" className={design.user_profile} />

                  {student.name}
                </td>
              </Link>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/upload/${student.name}`}
                >
                  {student.learningPath}
                  <span
                    className={design.learningPathDot}
                    style={{
                      backgroundColor: learningPathOptions.find(
                        (option) => option.value === student.learningPath
                      ).color,
                    }}
                  ></span>
                </Link>
              </td>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/upload/${student.name}`}
                >
                  {student.Cohort}
                </Link>
              </td>

              <td>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/upload/${student.name}`}
                >
                  <span>{student.Status}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={design.pageIt}>
        <div></div>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          classes={{
            ul: design.pagination,
            root: design.paginationRoot,
            item: design.paginationItem,
            selected: design.paginationSelected,
          }}
        />
      </div>
    </div>
  );
};

export default CertficateTable;
