import { useState } from "react";
import design from "./studentsTable.module.css";
import students from "../../data/Mock_Student";
import Pagination from "@mui/material/Pagination";
// import { makeStyles } from "@mui/styles";

const StudentTable = () => {
  //   const useStyles = makeStyles(() => ({
  //     pagination: {
  //       "& .MuiPaginationItem-root": {
  //         backgroundColor: "transparent",
  //         "&.Mui-selected": {
  //           backgroundColor: "#0A3775",
  //           color: "#FFF",
  //         },
  //       },
  //     },
  //   }));

  //   const classes = useStyles();

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
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "Web3", value: "Web3" },
    { label: "Product Design", value: "Product Design" },
  ];

  const taskOptions = [
    { label: "Project 1", value: "Project 1" },
    { label: "Project 2", value: "Project 2" },
    { label: "Project 3", value: "Project 3" },
    { label: "Project 4", value: "Project 4" },
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
    .sort((a, b) => a.name.localeCompare(b.name));

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
              <select value={taskFilter} onChange={handleTaskFilterChange}>
                <option value="">Task</option>
                {taskOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </th>
            <th className={design.Grade}>Grade</th>
          </tr>
        </thead>
        <tbody className={design.StudentTable_body}>
          {getCurrentPageStudents().map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.learningPath}</td>
              <td>{student.task}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        // classes={{ ul: classes.pagination }}
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
  );
};

export default StudentTable;
