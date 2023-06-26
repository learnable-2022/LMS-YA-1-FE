import design from './leaderTable.module.css';
import PROFILE from '../../assets/Tappi.png';
import GREEN from '../../assets/star1.png';
import YELLOW from '../../assets/star2.png';
import GREY from '../../assets/greyStar.png';
import { useState, useEffect } from 'react';
import students from '../../data/Mock_Student';

const LeaderTable = () => {
  const [learningPath, setLearningPath] = useState('Frontend');
  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://lms-zwhm.onrender.com/api/v1/users/scores'
  //     );
  //     const data = await response.json();

  //     setStudents(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const filterStudents = students.filter(
    // (student) => student.student[0].learningTrack === learningPath
    (student) => student.learningPath === learningPath
  );
  const sortedStudents = filterStudents.sort((a, b) => b.grade - a.grade);
  const top5Students = sortedStudents.slice(0, 5);

  const handleLearningPathChange = (event) => {
    setLearningPath(event.target.value);
  };

  const renderStarImage = (rank) => {
    if (rank === 1) {
      return <img src={GREEN} alt='' />;
    } else if (rank === 2 || rank === 3) {
      return <img src={YELLOW} alt='' />;
    } else {
      return <img src={GREY} alt='' />;
    }
  };

  const learningPathOptions = [
    { label: 'Frontend', value: 'Frontend', color: 'red' },
    { label: 'Backend', value: 'Backend', color: 'yellow' },
    { label: 'Web3', value: 'Web3', color: 'green' },
    { label: 'Product Design', value: 'Product Design', color: 'orange' },
  ];

  const selectedOption = learningPathOptions.find(
    (option) => option.value === learningPath
  );

  const backgroundColor = selectedOption ? selectedOption.color : '';
  return (
    <div className={design.LeaderTable}>
      <h3>
        {learningPath}
        <span
          className={design.learningPathDot}
          style={{ backgroundColor }}
        ></span>
      </h3>

      <table className={design.student_table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Grade (%)</th>
          </tr>
        </thead>
        <tbody className={design.StudentTable_body}>
          {/* {top5Students.map((student, index) => (
           
          ))} */}

          {top5Students.length > 0 ? (
            top5Students.map((student, index) => (
              <tr key={index}>
                <td>{renderStarImage(index + 1)}</td>
                <td className={design.user_flex}>
                  <img src={PROFILE} alt='' className={design.user_profile} />

                  {student.name}
                </td>
                <td>{Math.round(student.grade)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='3'>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={design.LeaderTable_bottom}>
        <div></div>
        <select value={learningPath} onChange={handleLearningPathChange}>
          <option value='Frontend'>Frontend</option>
          <option value='Backend'>Backend</option>
          <option value='Product Design'>Product Design</option>
          <option value='Web3'>Web3</option>
        </select>
      </div>
    </div>
  );
};

export default LeaderTable;
