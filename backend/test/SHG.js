const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

const { expect } = require("chai");

describe("Groups", function () {
  async function deploySHGFixture() {
    const groupName = "My Group";
    const [owner, otherAccount] = await ethers.getSigners();
    const Groups = await ethers.getContractFactory("Groups");
    const group = await Groups.deploy();
    const tx = await group.createNewGroup(groupName);
    const receipt = await tx.wait();
    const event = receipt.events.find(
      (event) => event.event === "NewGroupCreated"
    );
    const address = event.args[0];
    const shg = await ethers.getContractAt("SHG", address);
    return { shg, owner, otherAccount, groupName };
  }

  describe("Groups", function () {
    it(`Have a group  with name My Group `, async function () {
      const { shg } = await loadFixture(deploySHGFixture);
      expect(await shg.name()).to.eq(groupName);
    });

    it(`Group create should be the memeber`, async function () {
      const { group, groupName } = await loadFixture(deploySHGFixture);
    });
  });

  describe("Deposite with No load", function () {
    it(`only Member can deposite money`, async function () {
      const { shg } = await loadFixture(deploySHGFixture);
      expect(await shg.name()).to.eq(groupName);
    });
    it(`Member balance should increase on deposite`, async function () {
      const { group, groupName } = await loadFixture(deploySHGFixture);
    });
    it(`should revert if depositor is not member of group`, async function () {
      const { group, groupName } = await loadFixture(deploySHGFixture);
    });

    it(`should emit deposite event`, async function () {
      const { group, groupName } = await loadFixture(deploySHGFixture);
    });
    it(`should emit user balance updated event`, async function () {
      const { group, groupName } = await loadFixture(deploySHGFixture);
    });
    it(`should emit group balance updated event`, async function () {
      const { group, groupName } = await loadFixture(deploySHGFixture);
    });
  });
});
