// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18;

contract ContractA {
    event TokensMinted(uint amount);

    function mint(uint amount) public {
        emit TokensMinted(amount);
    }
}
