// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18;

error ContractA__AnyError();
error ContractA__BnyError();

contract ContractA {
    function helloWorld() public {
       revert ContractA__AnyError();
    }
    function helloWorld2() public {
       revert ContractA__BnyError();
    }
}
