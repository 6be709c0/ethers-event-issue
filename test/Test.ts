import * as chai from "chai";
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { ContractA, ContractAFactory } from "../typechain";

const expect = chai.expect;

describe("Example test", function () {
  it("should fire the event", async function () {
    const [owner] = await ethers.getSigners();

    const contractAFactory = await ethers.getContractFactory(
      "ContractA",
      owner
    );

    const contractA = await contractAFactory.deploy();
    await new Promise(async (resolve) => {
      contractA.once("TokensMinted", (amount: BigNumber) => {
        // THIS LINE NEVER GETS HIT
        console.log("###########");
        resolve(true);
      });

      const contractTx: ContractTransaction = await contractA.mint(123);
      const contractReceipt: ContractReceipt = await contractTx.wait();

      for (const event of contractReceipt.logs!) {
        console.log(event.fragment.name, event.args[0].toString());
      }

      // Works
        // contractA.emit("TokensMinted", 123);
    });
  });
});
