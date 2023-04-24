// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./Utils.sol";
contract Member{

     address[] public members;
     private _counter = 0;
     mapping(uint=>membersProposal) public membersProposal;
     
     constructor () {
            _counter++;
            members.push(msg.sender);
     }  
     event NewMember_ProposalSubmitted(address from, address member, string reason);
     event NewMember_ProposalCancelled(uint proposalId, string reason);
     event NewMember_ProposalApproved(uint proposalId, string reason);
     event NewMember_ProposalRejected(uint proposalId, string reason);

      //=================================== MEMBERSHIP =============================================
    function submitNewMemberProposal (address _member, string memory _reason) public returns(uint) {
         membersProposal.push(MemberProposal(_member, msg.sender, _reason, [], Status.Open));
        emit NewMember_ProposalSubmitted(msg.sender, _member, _reason);
        return membersProposal.length - 1;
    }

    function cancelMemberProposal (uint _proposalId, string _reason) public returns (bool) {
        membersProposal[_proposalId].status = Status.cancelled;
        return true;
    }

    function approveMemberShip (uint _proposalId) public returns(bool){
        
    } 

    function rejectMembership (uint _proposalId) public returns(bool){

    }

    function addMember(uint _proposalId) internal {

    }

}