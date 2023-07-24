const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers");

const { expect } = require("chai");

describe("SHG", function () {
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

  describe("SHG", function () {
    it(`Have a group  with name My Group `, async function () {
      const { shg, groupName } = await loadFixture(deploySHGFixture);
      expect(await shg.name()).to.eq(groupName);
    });

    it(`Group creator should be the memeber`, async function () {
      const { shg, owner } = await loadFixture(deploySHGFixture);

      const members = await shg.getAllMembers();
      const user = members.length > 0 ? members[0] : "";
      expect(user).to.eq(owner.address);
    });
  });

  describe("Deposite with No load", function () {
    it(`Member balance should increase on deposite`, async function () {
      const { shg, owner } = await loadFixture(deploySHGFixture);
      await shg.deposit({ value: ethers.utils.parseEther("10") });
      const balance = await shg.balances(owner.address);

      expect(ethers.utils.formatEther(balance)).to.equal("10.0");
    });
    it(`should revert if depositor is not member of group`, async function () {
      const { shg, otherAccount } = await loadFixture(deploySHGFixture);
      const otherSignerConnectedContract = shg.connect(otherAccount);

      await expect(
        otherSignerConnectedContract.deposit({
          value: ethers.utils.parseEther("10"),
        })
      ).to.be.revertedWith("You're not member of the group, Please join");
    });

    it(`should emit deposite event`, async function () {
      const { shg, owner } = await loadFixture(deploySHGFixture);

      const tx = await shg.deposit({ value: ethers.utils.parseEther("10") });
      const receipt = await tx.wait();
      const event = receipt.events.find((event) => event.event === "Deposited");
      const address = event.args[0];

      await expect(
        await shg.deposit({ value: ethers.utils.parseEther("10") })
      ).to.emit(shg, "Deposited");
    });

    it(`should emit user balance updated event`, async function () {
      const { shg } = await loadFixture(deploySHGFixture);
      await expect(
        shg.deposit({ value: ethers.utils.parseEther("10") })
      ).to.emit(shg, "UserBalanceUpdated");
    });
  });
});
