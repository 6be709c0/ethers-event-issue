import { expect, assert } from "chai";
import { ethers } from "hardhat";

describe("Example test", function () {
  it("should fire the event", async function () {
    const [owner] = await ethers.getSigners();

    const contractAFactory = await ethers.getContractFactory(
      "ContractA",
      owner
    );

    const contractA = await contractAFactory.deploy();
    // await contractA.helloWorld(); // reverted with custom error 'ContractA__AnyError()'
    await expect(contractA.helloWorld()).to.be.reverted; // Work

    // ERROR
    await expect(contractA.helloWorld()).to.be.revertedWithCustomError(contractA, "ContractA__BnyError"); // Not working
    // await expect(contractA.helloWorld()).to.be.revertedWith("ContractA__AnyError()"); // Not working

    // Expected transaction to be reverted with reason 'ContractA__AnyError()', but it reverted with a custom error

    // Temporary solution
    // let errorMessage;
    // try {
    //   await contractA.helloWorld();
    // } catch (e: any) {
    //   errorMessage = contractA.interface.parseError(e.data)?.name;
    // }
    // assert.equal(errorMessage, "ContractA__AnyError"); // Work
  });
});
