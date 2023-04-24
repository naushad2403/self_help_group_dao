// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


import "./Utils.sol";
contract BorrowContract {
  mapping(uint=>Borrow) public borrowProposals;
    event Borrow_ProposalSubmitted(address from, address member, string reason);
    event Borrow_ProposalCancelled(uint proposalId, string reason);
    event Borrow_ProposalApproved(uint proposalId, string reason);
    event Borrow_ProposalRejected(uint proposalId, string reason);
    function submitNewBorrowProposal (address _member, string memory description) public returns(bool) {

    }

    function cancelBorrowProposal (uint _proposalId) public {

    }

    function approveBorrowProposal (uint _proposalId) public {

    }

    function rejectBorrowProposal (uint _proposalId) public {

    }

    function lendingApproved (uint _proposalId) internal {

    }

}