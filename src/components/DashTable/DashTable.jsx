import design from './dashTable.module.css';
// import PROFILE from '../../assets/Tappi.png';
import EastIcon from '@mui/icons-material/East';
// import students from '../../data/Mock_Student';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DashTable = () => {
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
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const visibleStudents = students.slice(0, 10);

  const learningPathOptions = [
    { label: 'frontend', value: 'frontend', color: 'red' },
    { label: 'backend', value: 'backend', color: 'yellow' },
    { label: 'web3', value: 'web3', color: 'green' },
    { label: 'product design', value: 'product design', color: 'orange' },
  ];

  return (
    <div>
      <table className={design.student_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Learning track</th>
            <th>Grade (%)</th>
          </tr>
        </thead>
        <tbody className={design.StudentTable_body}>
          {visibleStudents.map((student, index) => {
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
                  {capitalizedFirstName} {capitalizedLastName}
                </td>
                <td>
                  {capitalizedLearningTrack}
                  <span
                    className={design.learningPathDot}
                    style={{
                      backgroundColor: learningPathOptions.find(
                        (option) => option.value === student.learningTrack
                      ).color,
                    }}
                  ></span>
                </td>
                <td>{Math.round(student.grade)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={design.DashTable_bottom}>
        <div></div>
        <Link to='/students' style={{ textDecoration: 'none' }}>
          <p>
            View all{' '}
            <span style={{ margin: '10px 0 0 10px' }}>
              <EastIcon />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DashTable;
