// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./Utils.sol";

contract Member{

     address[] public members;
     private _counter = 0;
     mapping(uint=>MemberProposal) public membersProposal;
     
     constructor () {
            _counter++;
            members.push(msg.sender);
     }  
     event NewMember_ProposalSubmitted(address from, address member, string reason);
     event NewMember_ProposalCancelled(uint proposalId, string reason);
     event NewMember_ProposalApproved(uint proposalId, string reason);
     event NewMember_ProposalRejected(uint proposalId, string reason);

      //=================================== MEMBERSHIP =============================================
    function submitNewMemberProposal (address _member, string memory _reason) public  alreadyAMember returns(uint) {
        membersProposal[++_counter]= MemberProposal(_member, msg.sender, _reason, [], Status.Open);
        emit NewMember_ProposalSubmitted(msg.sender, _member, _reason);
        return _counter;
    }

    function cancelMemberProposal (uint _proposalId, string _reason) public returns (bool) {
        membersProposal[_proposalId].status = Status.cancelled;
        emit NewMember_ProposalCancelled(msg.sender, embersProposal[_proposalId].member, _reason);
        return true;
    }

    function approveMemberShip (uint _proposalId) public  alreadyApproved returns(bool){
        membersProposal[_proposalId].approver(msg.sender);
        if(membersProposal[_proposalId].approver.length == members.length){
             members.push(membersProposal[_proposalId].member);
             membersProposal[_proposalId].status = Status.approved;
        }
        emit NewMember_ProposalApproved(msg.sender, embersProposal[_proposalId].member, _reason);
        return true;
    }

    function rejectMembership (uint _proposalId) public returns(bool){
        require( membersProposal[_proposalId].status != Status.rejected, "Already Rejected");
         membersProposal[_proposalId].status = Status.rejected;
         return true;
        emit NewMember_ProposalRejected(msg.sender, embersProposal[_proposalId].member, _reason);

    }

    modifier alreadyApproved (uint _proposalId) {
        MemberProposal memory mp = membersProposal[_proposalId]
        for(uint i = 0; i < mp.approver.lenght; i++) {
            if(msg.sender == mp.approver[i]){
                revert("Already approved");
            }
        };
        -;
    }

    modifier alreadyAMember (address _member ) {
         for(uint i = 0; i < members.lenght; i++) {
            if(_member == members[i]){
                revert("Already a member");
            }
        };
        -;
    }

}