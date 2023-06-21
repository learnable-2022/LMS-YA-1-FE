import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import design from './connectButton.module.css';

const ConnectButton = () => {
  return (
    <div>
      <button className={design.connectBtn}>
        <AccountBalanceWalletOutlinedIcon /> Connect Wallet
      </button>
    </div>
  );
};
export default ConnectButton;
