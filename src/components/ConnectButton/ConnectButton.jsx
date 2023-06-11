import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
const ConnectButton = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#BED7FA",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <AccountBalanceWalletOutlinedIcon /> Connect Wallet
      </button>
    </div>
  );
};
export default ConnectButton;
