import Sidebar from '../../../layout/Sidebar/Sidebar';
import design from './settings.module.css';
import TEST from '../../../assets/Tappi.png';
import DashHeader from '../../../components/DashHeader/DashHeader';

const Settings = () => {
  return (
    <div className={design.Settings_body}>
      <Sidebar />
      <div className={design.Settings_main}>
        <DashHeader
          style={{ background: '#fff' }}
          name='Tappi'
          position='Program Co-ordinator'
          img={TEST}
        />
        <h2 data-aos='zoom-in' data-aos-duration='1000'>
          Settings
        </h2>
        <div data-aos='zoom-in' data-aos-duration='1000'>
          <h1>MVP 2.0 !! </h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
