import Sidebar from '../../../layout/Sidebar/Sidebar';
import design from './myProfile.module.css';
import DashHeader from '../../../components/DashHeader/DashHeader';

const MyProfile = () => {
  return (
    <div className={design.Profile_body}>
      <Sidebar />
      <div className={design.Profile_main}>
        <DashHeader
          style={{ background: '#fff' }}
          position='Program Co-ordinator'
        />
        <h2 data-aos='zoom-in' data-aos-duration='1000'>
          Profile
        </h2>
        <div data-aos='zoom-in' data-aos-duration='1000'>
          <h1>Coming Soon !! </h1>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
