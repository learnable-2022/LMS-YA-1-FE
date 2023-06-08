import design from './dashTable.module.css';
import PROFILE from '../../assets/Tappi.png';
import EastIcon from '@mui/icons-material/East';
import students from '../../data/Mock_Student';

const DashTable = () => {
  const visibleStudents = students.slice(0, 10);

  const learningPathOptions = [
    { label: 'Frontend', value: 'Frontend', color: 'red' },
    { label: 'Backend', value: 'Backend', color: 'yellow' },
    { label: 'Web3', value: 'Web3', color: 'green' },
    { label: 'Product Design', value: 'Product Design', color: 'orange' },
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
          {visibleStudents.map((student, index) => (
            <tr key={index}>
              <td className={design.user_flex}>
                <img src={PROFILE} alt='' className={design.user_profile} />

                {student.name}
              </td>
              <td>
                {student.learningPath}
                <span
                  className={design.learningPathDot}
                  style={{
                    backgroundColor: learningPathOptions.find(
                      (option) => option.value === student.learningPath
                    ).color,
                  }}
                ></span>
              </td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={design.DashTable_bottom}>
        <div></div>
        <p>
          View all{' '}
          <span style={{ margin: '10px 0 0 10px' }}>
            <EastIcon />
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashTable;
