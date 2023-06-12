import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Button from "@mui/material/Button";

const ConnectButton = ({ WebHandler, account }) => {
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
        {account ? (
          <Button startIcon={<AccountBalanceWalletOutlinedIcon />}>
            {account.slice(0, 5) + "..." + account.slice(38, 42)}
          </Button>
        ) : (
          <Button
            startIcon={<AccountBalanceWalletOutlinedIcon />}
            onClick={WebHandler}
          >
            Connect Wallet
          </Button>
        )}
      </button>
    </div>
  );
};
export default ConnectButton;
