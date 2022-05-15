require("@nomiclabs/hardhat-waffle");
require('solidity-coverage');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.13",
  settings: {
    optimizer: {
      enabled: false,
      runs: 200,
    },
  }
};
