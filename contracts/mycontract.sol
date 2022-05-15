// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Mycontract {
    string private _name;

    constructor(string memory name) {
        _name = name;
    }

    function changeName(string memory name) public {
        _name = name;
    }

    function getName() public view returns (string memory) {
        return _name;
    }
}
