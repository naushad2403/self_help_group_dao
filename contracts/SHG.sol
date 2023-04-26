// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./Utils.sol";
import "./Member.sol";
import "./Borrow.sol";

contract SHG  is Member, BorrowContract{
     mapping(address=>Balance) public balances;
     uint public lendedMoney = 0;
     uint public totalDeposit = 0;
   
    constructor () payable {
        members.push(msg.sender);
        balances[msg.sender] = Balance(msg.sender);
        totalDeposit += msg.value;
    }   


    function withdrawAmount () public {
        
    }    

    //======================================== DEPOSIT ===================================================

    receive ()   external payable {
        balances[msg.sender].deposit += msg.value;
    }

    fallback ()  external payable {
         balances[msg.sender].deposit += msg.value;
    }

    function deposit () external payable {
         balances[msg.sender].deposit += msg.value;
    } 

    // ======================================================================================================


}