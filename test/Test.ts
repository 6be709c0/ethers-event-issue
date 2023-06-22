import * as chai from "chai";
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { ContractA, ContractAFactory } from "../typechain";

const expect = chai.expect;

describe("Example test", function () {
  it("should fire the event", async function () {
    const provider = new ethers.WebSocketProvider("ws://127.0.0.1:8545");

    const owner = await provider.getSigner(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    );
    // const contractA = await contractAFactory.deploy();
    const contractA = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      [
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
      ],
      owner
    );

    // const eventFilter = contractA.filters.TokensMinted();
    // const pastEvents = await contractA.queryFilter(eventFilter);

    // const contractTx: ContractTransaction = await contractA.mint(123);

    await new Promise(async (resolve) => {
      contractA.once("TokensMinted", (amount: BigNumber) => {
        // THIS LINE NEVER GETS HIT
        console.log("###########");
        resolve(true);
      });

      const contractTx: ContractTransaction = await contractA.mint(123);
      // const contractReceipt: ContractReceipt = await contractTx.wait();

      // for (const event of contractReceipt.logs!) {
      //   console.log(event.fragment.name, event.args[0].toString());
      // }

      //   // Works
      //   //   contractA.emit("TokensMinted", 123);
    });
  });
});
