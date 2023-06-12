import DashHeader from "../../../components/DashHeader/DashHeader";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import design from "./dashboard.module.css";
import TEST from "../../../assets/Tappi.png";
import GROUP from "../../../assets/group.png";
import REWARD from "../../../assets/rewards.png";
import TASKS from "../../../assets/tasks.png";
import DashTable from "../../../components/DashTable/DashTable";
import ScaleMeter from "../../../components/ScaleMeter/ScaleMeter";
import Dashboard_Card from "../../../components/Dashboard_Card/Dashboard_Card";
import students from "../../../data/Mock_Student";
import ScaleMeter2 from "../../../components/ScaleMeter_2/ScaleMeter";
import DashChart from "../../../components/DashChart/DashChart";
import LeaderTable from "../../../components/LeaderTable/LeaderTable";

const Dashboard = ({ WebHandler, account }) => {
  const number = 40;
  const numOfStudents = students.length;

  const topStudents = students.sort((a, b) => b.grade - a.grade).slice(0, 3);

  const position1 = topStudents[0].grade;
  const position2 = topStudents[1].grade;
  const position3 = topStudents[2].grade;

  const student1 = topStudents[0].name;
  const student2 = topStudents[1].name;
  const student3 = topStudents[2].name;

  return (
    <div>
      <div className={design.Dashboard_inner}>
        <div className={design.Dashboard_body}>
          <Sidebar />
          <div className={design.Dashboard_main}>
            <DashHeader
              style={{ background: "#fff" }}
              name="Tappi"
              position="Program Co-ordinator"
              img={TEST}
              WebHandler={WebHandler}
              account={account}
            />
            <h2>Dashboard</h2>
            <div className={design.Dash_cards}>
              <Dashboard_Card
                style={{ borderRadius: "8px " }}
                icon={GROUP}
                title="Total registered students"
                text={numOfStudents}
              />
              <Dashboard_Card
                style={{ borderRadius: "8px " }}
                icon={REWARD}
                title="Total rewards earned"
                text={numOfStudents}
                spanner="Gek"
                spanStyle={design.spanStyle}
              />
              <ScaleMeter
                className={design.first_meter}
                title="Weekly tasks submitted"
                number={number}
                width="200px"
                titleStyle={{ marginBottom: "20px" }}
                height="100px"
                meterColor="#BED7FA"
                progressColor="#0C4592"
                coverClass={design.Dash_cover}
                paragraphStyle={design.Dash_paragraph}
              />
              <div>
                <Dashboard_Card
                  icon={TASKS}
                  style={{ borderRadius: "8px 8px 0 0", paddingBottom: "20px" }}
                  title="Total completed tasks"
                />
                <ScaleMeter2
                  className={design.progress}
                  width="200px"
                  meterClass={design.meterClass}
                  progressClass={design.progressClass}
                  // digit={digit}
                  number={number}
                  meterColor="#BED7FA"
                  progressColor="#0C4592"
                />
              </div>
            </div>
            <div className={design.Dashboard_center}>
              <div className={design.Dashboard_Table}>
                <h3>Students</h3>
                <DashTable />
              </div>
              <div className={design.Dashboard_Leaderboard}>
                <h3>Leaderboard</h3>
                <DashChart
                  position1={position1}
                  position2={position2}
                  position3={position3}
                  student1={student1}
                  student2={student2}
                  student3={student3}
                />
                <LeaderTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
