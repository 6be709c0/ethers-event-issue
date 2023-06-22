// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18;

import "hardhat/console.sol";

contract ContractA {
    event TokensMinted(uint amount);

    function mint(uint amount) public {
        console.log("Emit event");
        emit TokensMinted(amount);
        console.log("Event emitted");
    }
}
