import design from './dashTable.module.css';
import PROFILE from '../../assets/Tappi.png';
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
        'https://lms-zwhm.onrender.com/api/v1/users/scores'
      );
      const data = await response.json();

      const sortedScores = data.sort((a, b) => {
        const studentA = a.student[0];
        const studentB = b.student[0];
        if (studentA._id < studentB._id) return -1;
        if (studentA._id > studentB._id) return 1;
        return 0;
      });
      setStudents(sortedScores);

      // setStudents(data);
      // console.log(data);
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

  const handleViewAllStudents = () => {
    window.scrollTo(0, 0);
    history.push('/students');
  };

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
            const firstName = student.student[0].firstName;
            const lastName = student.student[0].lastName;
            const learningTrack = student.student[0].learningTrack;
            const capitalizedFirstName =
              firstName.charAt(0).toUpperCase() + firstName.slice(1);
            const capitalizedLastName =
              lastName.charAt(0).toUpperCase() + lastName.slice(1);
            const capitalizedLearningTrack =
              learningTrack.charAt(0).toUpperCase() + learningTrack.slice(1);
            return (
              <tr key={index}>
                <td className={design.user_flex}>
                  <img src={PROFILE} alt='' className={design.user_profile} />
                  {capitalizedFirstName} {capitalizedLastName}
                </td>
                <td>
                  {capitalizedLearningTrack}
                  <span
                    className={design.learningPathDot}
                    style={{
                      backgroundColor: learningPathOptions.find(
                        (option) =>
                          option.value === student.student[0].learningTrack
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
        <Link
          to='/students'
          onClick={handleViewAllStudents}
          style={{ textDecoration: 'none' }}
        >
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
