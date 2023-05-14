const hre = require("hardhat");

async function main() {
  const Groups = await hre.ethers.getContractFactory("Groups");
  const group = await Groups.deploy();

  await group.deployed();

  console.log(`deployed to ${group.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
