// SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.7.0 <0.9.0;
// import "./Utils.sol";
// import "./Member.sol";
// import "./Borrow.sol";

struct BorrowProposal {
    uint amount;
    address proposer;
    uint proposalId;
    address[] approver;
}


contract SHG  {
     address[] memembers;
     mapping(address=>uint) public balances;
     mapping(uint=>BorrowProposal) borrowProposal;
     uint lendedMoney;
     address[] members;
     uint counter;
   
    constructor () payable {
        memembers.push(msg.sender);
        balances[msg.sender] = msg.value;
    }   


    event Withdraw(address _member, uint _amount);
    function withdrawAmount (uint _amount) public {
        require(_amount <= balances[msg.sender], "Unsufficient balance, Please create a borrow proposal");
        balances[msg.sender] = balances[msg.sender] - _amount;
        (bool success,) = payable(msg.sender).call{value: _amount}("");
        emit Withdraw(msg.sender, _amount);
    }

    function join() external  returns(bool){    
        members.push(msg.sender);
        return true;
    }


    function submitLoanProposal (uint _amount)  external returns (uint){
        counter += 1;
        address[] memory approver;
        borrowProposal[counter] = BorrowProposal(_amount, msg.sender, counter, approver);
        return counter;
    }

    function approveBorrowProposal (uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].approver.push(msg.sender);
        return true;
    }

    //======================================== DEPOSIT ===================================================

    receive () external payable {
        balances[msg.sender] += msg.value;
    }

    fallback ()  external payable {
         balances[msg.sender] += msg.value;
    }

    function deposit () external payable {
         balances[msg.sender] += msg.value;
    } 

    // ======================================================================================================


}