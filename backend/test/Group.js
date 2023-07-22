const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

const { expect } = require("chai");

describe("Groups", function () {
  async function deployGroupFixture() {
    const groupName = "My Group";
    const [owner, otherAccount] = await ethers.getSigners();
    const Groups = await ethers.getContractFactory("Groups");
    const group = await Groups.deploy();
    return { group, owner, otherAccount, groupName };
  }

  describe("Groups", function () {
    it("should deploy and return the deployed contract address", async function () {
      const { group, groupName } = await loadFixture(deployGroupFixture);
      const shg = await group.createNewGroup(groupName);
      expect(shg).to.not.equal(ethers.constants.AddressZero);
    });

    it(`Should deplay shg contract with name My Group `, async function () {
      const { group, groupName, owner } = await loadFixture(deployGroupFixture);
      const tx = await group.createNewGroup(groupName);
      const receipt = await tx.wait();
      const event = receipt.events.find(
        (event) => event.event === "NewGroupCreated"
      );
      const address = event.args[0];
      const contract = await ethers.getContractAt("SHG", address);
      expect(await contract.name()).to.eq(groupName);
    });

    it(`Should fire a NewGroupCreated event`, async function () {
      const { group, groupName } = await loadFixture(deployGroupFixture);
      expect(group.createNewGroup(groupName)).to.emit(group, "NewGroupCreated");
    });
  });
});
