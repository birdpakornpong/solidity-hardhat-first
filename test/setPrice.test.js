const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("publicExternal", () => {
    it("add number price with public", async function () {
        const MyContract = await ethers.getContractFactory("publicExternal");
        const myContract = await MyContract.deploy();

        await myContract.deployed()
        await myContract.setPriceWithPublic(350)
        
        expect(await myContract.getprice()).to.equal(350);
    })

    it("add number price with", async () => {
        const MyContract = await ethers.getContractFactory("publicExternal");
        const myContract = await MyContract.deploy();

        await myContract.setPriceWithExternal(450);
        expect(await myContract.getprice()).to.equal(450);
    })
})