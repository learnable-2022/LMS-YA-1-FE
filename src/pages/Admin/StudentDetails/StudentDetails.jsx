import DashHeader from '../../../components/DashHeader/DashHeader';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import TEST from '../../../assets/Tappi.png';
import REWARD from '../../../assets/rewards.png';
import TASKS from '../../../assets/tasks.png';
import COPY from '../../../assets/copy.png';
import PropTypes from 'prop-types';
import design from './studentDetails.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ScaleMeter from '../../../components/ScaleMeter/ScaleMeter';
import MyTable from '../../../components/DetailTable/DetailTable';
import { useParams, useNavigate } from 'react-router-dom';
import ScaleMeter2 from '../../../components/ScaleMeter_2/ScaleMeter';

const StudentDetails = ({ students }) => {
  const { name } = useParams();
  const student = students.find((student) => student.firstName === name);
  // const studentTask = students.find((student) => student.tasks === task);
  const number = student.grade;
  const digit = 10;

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  if (!student) {
    return <div>Student not found.</div>;
  }

  const learningTrack = student.learningTrack;

  const capitalizedLearningTrack =
    learningTrack.charAt(0).toUpperCase() + learningTrack.slice(1);
  return (
    <div>
      <div className={design.Students_inner}>
        <div className={design.Students_body}>
          <Sidebar />
          <div className={design.Students_main}>
            <DashHeader
              name='Tappi'
              position='Program Co-ordinator'
              img={TEST}
            />
            <div className={design.Students_inner_main}>
              <h2>
                <span onClick={goBack} style={{ cursor: 'pointer' }}>
                  Students
                </span>

                <span className={design.chevron}>
                  <ChevronRightIcon />
                </span>
                <span className={design.name}>{student.firstName}</span>
              </h2>
              <div className={design.Student_wrapper}>
                <div className={design.Student_left}>
                  <div className={design.Student_left_inner}>
                    <ScaleMeter
                      className={design.first_meter}
                      title='Grade'
                      width='250px'
                      height='120px'
                      titleStyle={{ marginBottom: '30px' }}
                      number={number}
                      meterColor='#BED7FA'
                      progressColor='#0C4592'
                      coverClass={design.coverage}
                      paragraphStyle={design.paragraphStyling}
                    />
                    <div className={design.Student_card_right}>
                      <div className={design.card_inner}>
                        <img src={REWARD} alt='' className={design.icons} />
                        <div>
                          <h4>Total rewards earned</h4>
                          <h3>
                            <span>700</span>Gek
                          </h3>
                        </div>
                      </div>
                      <div className={design.card_inner2}>
                        <div className={design.card_drop}>
                          <img src={TASKS} alt='' className={design.icons} />
                          <div>
                            <h4>Tasks Completed</h4>
                          </div>
                        </div>
                        <ScaleMeter2
                          className={design.progress}
                          width='200px'
                          meterClass={design.meterClass}
                          progressClass={design.progressClass}
                          // digit={digit}
                          number={digit}
                          meterColor='#BED7FA'
                          progressColor='#0C4592'
                        />
                      </div>
                    </div>
                  </div>
                  <div className={design.Student_bottom}>
                    <h3>Tasks</h3>
                    <div>
                      <MyTable />
                    </div>
                  </div>
                </div>
                <div className={design.Student_right}>
                  <div className={design.Student_right_title}>
                    <h3>Personal details</h3>
                    <p className={design.copy}>
                      <span>
                        <img src={COPY} />
                      </span>
                      Key
                    </p>
                  </div>

                  <h4>Basic details</h4>
                  <div className={design.Student_full_details}>
                    <div className={design.fullname}>
                      <p>
                        First name: <span>{student.firstName}</span>
                      </p>
                      <p>
                        Last name:<span>{student.lastName}</span>
                      </p>
                    </div>
                    {/* <p>
                      Gender:<span>{student.firstName}</span>
                    </p> */}
                    <p>
                      Username:<span>{student.username}</span>
                    </p>
                    <p>
                      Learning track:
                      <span>{capitalizedLearningTrack}</span>
                    </p>
                    <p>
                      Email address:
                      <span style={{ fontSize: '15px' }}>{student.email}</span>
                    </p>

                    <p>
                      Address:<span>{student.firstName}</span>
                    </p>
                  </div>
                  <h4>About</h4>
                  <div className={design.Student_full_details}>
                    <p>
                      Personality test result:
                      <span>{student.firstName}</span>
                    </p>
                    <p>
                      Hobbies:<span>{student.firstName}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentDetails.propTypes = {
  students: PropTypes.array,
};
export default StudentDetails;
