import React, { useState, useEffect } from "react";
import design from "./CertificateTable.module.css";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const CertficateTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://lms-zwhm.onrender.com/api/v1/users/students"
      );
      const data = response.data;
      setStudents(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

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
  const [currentPage, setCurrentPage] = useState(1);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleLearningPathFilterChange = (event) => {
    setLearningPathFilter(event.target.value);
  };

  const learningPathOptions = [
    { label: "frontend", value: "frontend", color: "red" },
    { label: "backend", value: "backend", color: "yellow" },
    { label: "web3", value: "web3", color: "green" },
    { label: "product design", value: "product design", color: "orange" },
  ];

  const filteredStudents = students
    .filter((student) => {
      const nameStart = student.firstName.charAt(0).toLowerCase();
      return (
        (nameFilter === "" || nameFilter === nameStart) &&
        (learningPathFilter === "" ||
          learningPathFilter === student.learningTrack)
      );
    })
    .filter((student) => {
      if (selectedOption && selectedOption !== "") {
        return (
          student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          student.learningTrack === selectedOption
        );
      } else {
        return student.firstName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
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
            <th>Name</th>
            <th>Learning Path</th>
            <th>Cohort</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={design.StudentTable_body}>
          {loading ? (
            <tr>
              <td
                colSpan="4"
                style={{ textAlign: "center", padding: "20px auto" }}
              >
                <ClipLoader loading={true} color="#36d7b7" />
              </td>
            </tr>
          ) : (
            getCurrentPageStudents().map((student, index) => {
              const firstName = student.firstName;
              const learningTrack = student.learningTrack;
              const capitalizedFirstName =
                firstName.charAt(0).toUpperCase() + firstName.slice(1);
              const capitalizedLearningTrack =
                learningTrack.charAt(0).toUpperCase() + learningTrack.slice(1);
              return (
                <tr key={index}>
                  <td className={design.user_flex}>
                    <img
                      src={student.avatarUrl}
                      alt=""
                      className={design.user_profile}
                    />
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/upload?firstName=${encodeURIComponent(
                        student.firstName
                      )}`}
                    >
                      {capitalizedFirstName}
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/upload?firstName=${encodeURIComponent(
                        student.firstName
                      )}`}
                    >
                      {capitalizedLearningTrack}
                      <span
                        className={design.learningPathDot}
                        style={{
                          backgroundColor: learningPathOptions.find(
                            (option) => option.value === student.learningTrack
                          ).color,
                        }}
                      ></span>
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/upload?firstName=${encodeURIComponent(
                        student.firstName
                      )}`}
                    >
                      {student.cohort}
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/upload?name=${encodeURIComponent(
                        student.firstName
                      )}`}
                    >
                      {student.hasCertificate ? "Certified" : "Null"}
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
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
