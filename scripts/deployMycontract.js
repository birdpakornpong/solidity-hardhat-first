async function main() {
    const MyContract = await ethers.getContractFactory("Mycontract");
    const myContract = await MyContract.deploy("My Contract");

    console.log('My Contract deployed to :', myContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log('error', error);
        process.exit(1)
    })