import Web3 from "web3";

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
  const web3 = new Web3("ws://127.0.0.1:8545/");

  // Get the contract instance
  const contract: any = new web3.eth.Contract(contractABI, contractAddress);
  // console.log(contract.events.TokensMinted().on);
  contract.events.TokensMinted({}).on("data", (data: any) => {
    console.log("Data", data);
  });
  const result = await contract.methods
    .mint(123)
    .send({ from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" });

  await wait(5000);
  // Listen for 'TokensMinted' events
}
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
main().catch((error) => console.error(error));
