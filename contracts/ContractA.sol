// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18;

contract ContractA {
    event EventNumber(uint amount);
    event EventAddress(address player);
    event EventAddressIndexed(address indexed player);

    function testWithNumber(uint amount) public {
        emit EventNumber(amount);
    }

    function testWithEventAddress() public {
        emit EventAddress(msg.sender);
    }

    function testWithEventAddressIndexed() public {
        emit EventAddressIndexed(msg.sender);
    }

    function testWithMultipleEvents() public {
        emit EventNumber(1337);
        emit EventNumber(5);
        emit EventAddress(msg.sender);
    }
}
