// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SHG {
    address[] members;
    mapping(address => uint) public balances;
    mapping(uint => BorrowProposal) public borrowProposal;
    uint public counter = 0;
    string public name;

    struct BorrowProposal {
        uint amount;
        address proposer;
        uint proposalId;
        bool claimed;
        mapping(address=>bool) votes;
       
    }

    constructor(string memory _name) payable {
        members.push(tx.origin);
        balances[tx.origin] = msg.value;
        name = _name;
    }

    function getAllMembers() external view returns (address[] memory) {
        return members;
    }

    event Withdraw(address _member, uint _amount);
    function withdrawAmount(uint _amount) public {
        require(_amount <= balances[msg.sender], "Insufficient balance, please create a borrow proposal");
        balances[msg.sender] -= _amount;
        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        require(success, "Payment failed");
        emit Withdraw(msg.sender, _amount);
    }

    function join() external returns (bool) {
        members.push(msg.sender);
        return true;
    }

    function submitLoanProposal(uint _amount) external returns (uint) {
        BorrowProposal storage proposal = borrowProposal[counter];
        proposal.amount = _amount;
        proposal.proposer = msg.sender;
        proposal.proposalId = counter;
        counter += 1;
        return counter - 1; 
    }

    function getApprovers(uint _proposalId) public view returns(address[] memory, address[] memory) {
        address[] memory approvers = new address[](0);
        address[] memory notApproveOrReject = new address[](0);
        BorrowProposal storage proposal =  borrowProposal[_proposalId];
        for(uint i = 0; i < members.length; i++) {
                if(proposal.votes[members[i]]) {
                    approvers[approvers.length] = members[i];
                }else{
                    notApproveOrReject[notApproveOrReject.length] = members[i];
                }
        }
        return (approvers, notApproveOrReject);
    }

    function claimApprovedAmount (uint _proposalId) public returns(bool) {
      (address[] memory approvers, )  =  getApprovers(_proposalId);
      if(approvers.length > (members.length / 2)){
          (bool success,)=  borrowProposal[_proposalId].proposer.call{value: borrowProposal[_proposalId].amount}("");
          return success;
      }
      return false;
       
    }

    function approveBorrowProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].votes[msg.sender] = true;
        return true;
    }

     function rejectBorrowProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].votes[msg.sender] = false;
        return true;
    }

    receive() external payable {
        balances[msg.sender] += msg.value;
    }

    fallback() external payable {
        balances[msg.sender] += msg.value;
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }
}
