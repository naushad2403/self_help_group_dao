// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./Utils.sol";

contract Member{
    uint _counter = 0;
     mapping(uint=>address) public membersProposal;
     
     constructor () {
            _counter++;
            
     }  
    event NewMember_Added(address _newMember);

      //=================================== MEMBERSHIP ============================================

    function addNewMember () public {
       
    } 

    // modifier alreadyAMember (address _member ) {
    //      for(uint i = 0; i < members.lenght; i++) {
    //         if(_member == members[i]){
    //             revert("Already a member");
    //         }
    //     }
    //     ;
    // }

}