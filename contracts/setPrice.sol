// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract publicExternal {
    uint256 private price;

    function setPriceWithPublic(uint256 _price) public {
        require(price != _price, "Comparison: Price is already set");
        price = _price;
    }

    function getprice() public view returns (uint256) {
        return price;
    }

    function setPriceWithExternal(uint256 _price) external {
        require(price != _price, "Comparison: Price is already set");
        price = _price;
    }
}
