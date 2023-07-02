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
      contractA.on("EventNumber", (amount: BigNumber) => {
        console.log(`- Received events testWithNumber with amount: ${amount}`);
      });
      contractA.on("EventAddress", (address) => {
        console.log(
          `- Received events testWithEventAddress with value: ${address}`
        );
      });
      contractA.on("EventAddressIndexed", (address) => {
        console.log(
          `- Received events testWithEventAddressIndexed with value: ${address}`
        );
      });

      console.log("\n## Triggering test event with a number...");
      await contractA.testWithNumber(123);
      await wait(1000);
      console.log("\n## Triggering test event with an address...");
      await contractA.testWithEventAddress();
      await wait(1000);
      console.log("\n## Triggering test event with an address indexed...");
      await contractA.testWithEventAddressIndexed();
      await wait(1000);
      console.log("\n## Triggering test with 2 events...");
      await contractA.testWithMultipleEvents();
      await wait(1000);
    });
  });
});

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
