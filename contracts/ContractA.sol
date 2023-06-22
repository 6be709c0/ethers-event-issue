// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18;

error ContractA__AnyError();

contract ContractA {
    function helloWorld() public {
       revert ContractA__AnyError();
    }
}
