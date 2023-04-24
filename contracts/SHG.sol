// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


enum Status {
    Open,
    approvalPending,
    approved,
    rejected,
    close
}

struct MemberProposal {
    address member_address;
    address proposar;
   string reason;
    address[] approvedAddress;
    uint8 status;
}


struct Borrow {
    uint amount;
    uint startDate;
    uint interestRate;
    uint8 status;
}

contract SHG {
     address[] public members;
     mapping(uint=>MemberProposal) public membersProposal;
     mapping(address=>uint) public savings;
     uint public lendedMoney = 0;
     uint public totalDeposit = 0;
     mapping(uint=>Borrow) public borrowProposals;

    constructor () {
        members.push(msg.sender);
        savings[msg.sender] = msg.value;
        total_amount += msg.value;
    }   
    
    //=================================== MEMBERSHIP =============================================
    function submitNewMemberProposal (address _member, description: string) public returns(bool) {

    }

    function cancelMemberProposal (uint _proposalId) public returns (bool) {

    }

    
    function approveMemberShip () public returns(bool){

    } 

    function rejectMembership () public returns(bool){

    }

    //========================================= Borrow ================================

    function submitNewBorrowProposal (address _member, description: string) public returns(bool) {

    }

    function cancelBorrowProposal (uint _proposalId) public {

    }

    function approveBorrowProposal (uint _proposalId) public {

    }

    function rejectBorrowProposal (uint _proposalId) public {

    }

    function lendingApproved (uint _proposalId) internal {

    }

    //============================================ WITHDRAWL ====================================


    function distributeProposal ( ) public returns(bool)  {

    }

    function cancelDistributeProposal () public returns(bool)  {


    }

    function withdrawAmount () public {
        
    }    

    //======================================== DEPOSIT ===================================================

    receive () payable public {
        savings[msg.sender] += msg.value;
    }

    fallback () payable {
        savings[msg.sender] += msg.value;
    }

    function deposit () payable public {
        savings[msg.sender] += msg.value;
    } 


}