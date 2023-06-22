import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545", // Ganache network URL
      accounts: [
        "1c44a139b134f9b4b579e4fc285719cc1b84928d742174cd07542247128f62e6"
      ]
    },
  },
};

export default config;
