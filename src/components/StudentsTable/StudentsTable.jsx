import { useState, useEffect } from 'react';
// import students from '../../data/Mock_Student';
import design from './studentsTable.module.css';
import Pagination from '@mui/material/Pagination';
// import PROFILE from '../../assets/Tappi.png';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { makeStyles } from "@mui/styles";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://lms-zwhm.onrender.com/api/v1/users/students'
      );
      const data = await response.json();
      setStudents(data.data);
      // console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [nameFilter, setNameFilter] = useState('');
  const [learningPathFilter, setLearningPathFilter] = useState('');
  // const [taskFilter, setTaskFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleLearningPathFilterChange = (event) => {
    setLearningPathFilter(event.target.value);
  };

  const nameOptions = [
    { label: 'A-E', range: ['A', 'B', 'C', 'D', 'E'] },
    { label: 'F-J', range: ['F', 'G', 'H', 'I', 'J'] },
    { label: 'K-O', range: ['K', 'L', 'M', 'N', 'O'] },
    { label: 'P-T', range: ['P', 'Q', 'R', 'S', 'T'] },
    { label: 'U-Z', range: ['U', 'V', 'W', 'X', 'Y', 'Z'] },
  ];

  const learningPathOptions = [
    { label: 'frontend', value: 'frontend', color: 'red' },
    { label: 'backend', value: 'backend', color: 'yellow' },
    { label: 'web3', value: 'web3', color: 'green' },
    { label: 'product design', value: 'product design', color: 'orange' },
  ];

  const filteredStudents = students
    .filter((student) => {
      const nameStart = student.firstName.charAt(0).toLowerCase();
      return (
        (nameFilter === '' || nameFilter === nameStart) &&
        (learningPathFilter === '' ||
          learningPathFilter === student.learningTrack)
        // &&
        // (taskFilter === '' || taskFilter === student.task)
      );
    })
    .filter((student) => {
      if (selectedOption && selectedOption !== '') {
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
          type='text'
          placeholder="Search student's name..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value=''>Select Learning Path</option>
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
                <option value=''>Name</option>
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
                <option value=''>Learning Path</option>
                {learningPathOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </th>
            <th className={design.Grade}>Total scores</th>
            <th className={design.Grade}>Grade</th>
          </tr>
        </thead>
        <tbody className={design.StudentTable_body}>
          {getCurrentPageStudents().length > 0 ? (
            getCurrentPageStudents().map((student, index) => {
              const firstName = student.firstName;
              const lastName = student.lastName;
              const learningTrack = student.learningTrack;
              const capitalizedFirstName =
                firstName.charAt(0).toUpperCase() + firstName.slice(1);
              const capitalizedLastName =
                lastName.charAt(0).toUpperCase() + lastName.slice(1);
              const capitalizedLearningTrack =
                learningTrack.charAt(0).toUpperCase() + learningTrack.slice(1);
              return (
                <tr key={index}>
                  <td className={design.user_flex}>
                    <img
                      src={student.avatarUrl}
                      alt=''
                      className={design.user_profile}
                    />
                    <Link to={`/student-details/${student.firstName}`}>
                      {capitalizedFirstName} {capitalizedLastName}
                    </Link>
                  </td>
                  <td>
                    {' '}
                    <Link to={`/student-details/${student.firstName}`}>
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
                    <Link to={`/student-details/${student.firstName}`}>
                      {student.totalScore}{' '}
                    </Link>
                  </td>
                  <td>
                    {' '}
                    <Link to={`/student-details/${student.firstName}`}>
                      {Math.round(student.grade)}{' '}
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan='4'
                style={{ textAlign: 'center', padding: '20px auto' }}
              >
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={design.pageIt}>
        <div></div>
        <Pagination
          // classes={{ ul: classes.pagination }}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape='rounded'
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

// StudentTable.propTypes = {
//   item: PropTypes.object,
// };

export default StudentTable;
