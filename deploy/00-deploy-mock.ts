import { ethers } from "hardhat";
declare const network: any;

const deployMocks: any = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}: any) => {
  const { deploy, log } = deployments;
  // const { deployer } = await getNamedAccounts()
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  
  log("--------");
  try {
    const tr = await deploy("ContractA", {
      from: deployer.address,
      args: [],
      log: true,
    });
  } catch (e) {
    console.log("Error", e);
  }
  log("Deployed!");
  log("--------");
};

deployMocks.tags = ["all", "mocks"];
export default deployMocks;
