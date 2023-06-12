import DashHeader from '../../../components/DashHeader/DashHeader';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import TEST from '../../../assets/Tappi.png';
import design from './Cetification.module.css';
import CertficateTable from '../../../components/CertificateTable/CertficateTable';
import { Link } from 'react-router-dom';

const Certification = () => {
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

            <Link
              to='/certificate'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <h2>Certificates</h2>
            </Link>

            <div className={design.Students_table}>
              <CertficateTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certification;
