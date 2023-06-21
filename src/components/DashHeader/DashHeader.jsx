import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import PropTypes from 'prop-types';
import design from './dashHeader.module.css';
import Bell from '../../assets/Bell.png';
import ConnectButton from '../ConnectButton/ConnectButton';
const DashHeader = ({ img, name, position, style, onGeeknft }) => {
  const handleConnectButton = (tokenValue, nftValue) => {
    onGeeknft(nftValue);
  };
  const { auth, setAuth } = useContext(UserContext);
  return (
    <div className={design.DashHeader} style={style}>
      <div className={design.DashHeader_divide}></div>
      <div className={design.DashHeader_right}>
        <img src={Bell} />
        <img src={auth?.avatarUrl} className={design.DashHeader_user} />
        <div className={design.AddSpace}>
          <h3>
            {auth?.firstName} {auth?.lastName}
          </h3>
          <p>{position}</p>
        </div>
        <ConnectButton onConnected={handleConnectButton} />
      </div>
    </div>
  );
};

DashHeader.propTypes = {
  img: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  position: PropTypes.string,
};
export default DashHeader;
