// import { useState, useEffect } from "react";

// //   return (
// //     <div>
// //       <VideoModal onSubmit={handleVideoSubmit} />
// //       <VideoUploaderModal onUpload={handleVideoUpload} />

// //       <h2>Video List</h2>
// //       {videos.map((video, index) => (
// //         <div key={index}>
// //           <p> {video.week}</p>
// //           <p> {video.title}</p>
// //           <img src={video.thumbnail} alt="Thumbnail" />
// //           {video.videoFile && (
// //             <video controls>
// //               <source src={URL.createObjectURL(video.videoFile)} />
// //             </video>
// //           )}
// //           <hr />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Apps;

// import {
//   // BrowserRouter as Router,
//   // Switch,
//   // Route,
//   Link,
//   // useNavigate,
// } from 'react-router-dom';
// // import students from '../../../data/Mock_Student';
// import PropTypes from 'prop-types';

// // Define the StudentsTable component
// const StudentsTable = ({ students }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Learning Path</th>
//           <th>Task</th>
//           <th>Grade</th>
//           <th>Total Score</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student, index) => (
//           <TableRow student={student} key={index} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// StudentsTable.propTypes = {
//   students: PropTypes.array,
// };

// // Define the TableRow component
// const TableRow = ({ student }) => {
//   // const history = useNavigate();

//   // const handleClick = () => {
//   //   history.push(`/student-details/${student.name}`);
//   // };
//   return (
//     <tr>
//       {' '}
//       <td>
//         {' '}
//         <Link to={`/student-details/${student.name}`}>{student.name} </Link>
//       </td>
//       <td>
//         {' '}
//         <Link to={`/student-details/${student.name}`}>
//           {student.learningPath}
//         </Link>
//       </td>
//       <td>
//         {' '}
//         <Link to={`/student-details/${student.name}`}>{student.task}</Link>
//       </td>
//       <td>
//         {' '}
//         <Link to={`/student-details/${student.name}`}>{student.grade}</Link>
//       </td>
//       <td>
//         {' '}
//         <Link to={`/student-details/${student.name}`}>
//           {student.totalScore}
//         </Link>
//       </td>
//     </tr>
//   );
// };

// TableRow.propTypes = {
//   student: PropTypes.object,
// }
// // const Apps = () => {
// //   const [videos, setVideos] = useState([]);

// //   const handleVideoSubmit = (video) => {
// //     setVideos([...videos, video]);
// //   };

// //   const handleVideoUpload = (video) => {
// //     setVideos([...videos, video]);
// //     console.log(video);
// //   };

// //   useEffect(
// //     () => {
// //       console.log(videos)
// //     },
// //   [videos])

// //   return (
// //     <div>
// //       <VideoModal onSubmit={handleVideoSubmit} />
// //       <VideoUploaderModal onUpload={handleVideoUpload} />

// //       <h2>Video List</h2>
// //       {videos.map((video, index) => (
// //         <div key={index}>
// //           <p> {video.week}</p>
// //           <p> {video.title}</p>
// //           <img src={video.thumbnail} alt="Thumbnail" />
// //           {video.videoFile && (
// //             <video controls>
// //               <source src={URL.createObjectURL(video.videoFile)} />
// //             </video>
// //           )}
// //           <hr />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // Define the App component
// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <Switch>
// // // <Route exact path='/'>
// // //   <StudentsTable students={students} />
// // // </Route>
// // //         <Route
// // //           path='/student-details/:name'
// // //           render={(props) => <StudentDetails students={students} {...props} />}
// // //         />
// // //       </Switch>
// // //     </Router>
// // //   );
// // // };

// // export default StudentsTable;
