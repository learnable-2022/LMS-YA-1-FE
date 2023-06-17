import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Button from "@mui/material/Button";

import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import geekNftAbi from "../../contractsData/abis/GeekNFT.json";
import geekNftAddress from "../../contractsData/abis/GeekNFT-address.json";
import geekTokenAbi from "../../contractsData/abis/GeekToken.json";
import geekTokenAddress from "../../contractsData/abis/GeekToken-address.json";

const ConnectButton = ({ onConnected }) => {
  const [account, setAccount] = useState(null);
  const [geekNft, setgeekNft] = useState(null);
  const [geekToken, setgeekToken] = useState(null);

  const WebHandler = useCallback(async () => {
    // get the account in metamask
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Get Signer
      const signer = provider.getSigner();

      // Helps Changes account when user switch accounts
      window.ethereum.on("accountsChanged", async function (accounts) {
        setAccount(account[0]);
        await WebHandler();
      });

      // Get Contracts
      const geekNftContract = new ethers.Contract(
        geekNftAddress.address,
        geekNftAbi.abi,
        signer
      );
      setgeekNft(geekNftContract);

      const geekTokenContract = new ethers.Contract(
        geekTokenAddress.address,
        geekTokenAbi.abi,
        signer
      );
      setgeekToken(geekTokenContract);

      onConnected(geekToken, geekNft);
    } else {
      alert("MetaMask Not Installed");
    }
  }, [account]);
  useEffect(() => {
    WebHandler();
  }, [WebHandler]);

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
