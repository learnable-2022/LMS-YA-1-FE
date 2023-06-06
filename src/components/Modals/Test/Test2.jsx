import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// Define the StudentDetails component
const StudentsDetails = ({ students }) => {
  const { name } = useParams();
   const student = students.find((student) => student.name === name);

  if (!student) {
    return <div>Student not found.</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Learning Path: {student.learningPath}</p>
      <p>Task: {student.task}</p>
      <p>Grade: {student.grade}</p>
      <p>Total Score: {student.totalScore}</p>
    </div>
  );
};
StudentsDetails.propTypes = {
  students: PropTypes.array,
};

export default StudentsDetails;
