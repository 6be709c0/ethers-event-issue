import { ethers } from "hardhat";
// import { ethers } from "ethers";

// Change the values below with your contract's ABI and address
const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensMinted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
  // Connect to the Ethereum node
  const provider = new ethers.WebSocketProvider("ws://127.0.0.1:8545");

  const signer: any = provider.getSigner(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );
  // Get the contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const result = await contract.mint(123);
  // const result = await contractAFactory.mint(123);

  // console.log(result);
  // Listen for 'TokensMinted' events
}

main().catch((error) => console.error(error));
