// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./Utils.sol";

contract Borrow {
    // uint _counter = 0;
    //  mapping(uint=>BorrowProposal) public borrowProposal;
    //  event NewBorrow_ProposalSubmitted(uint proposalid, address from, uint amount, uint interest, uint depositDate,
    //  uint delayInterest, string reason);

    //  event NewBorrow_ProposalCancelled(uint proposalId, address from, string reason);
    //  event NewBorrow_ProposalApproved(uint proposalId, address from, string reason);
    //  event NewBorrow_ProposalRejected(uint proposalId, address from, string reason);

    //   //=================================== MEMBERSHIP =============================================
    // function submitNewBorrowProposal (uint _amount, uint _interest, uint _depositDate,
    //  uint _delayInterest, string memory _reason) public  alreadyABorrow returns(uint) {

    //     borrowProposal[++_counter]= BorrowProposal(_amount, msg.sender, block.timestamp, _interest, _reason, _depositDate,
    //     , _delayInterest, Status.Open, []);

    //     emit NewBorrow_ProposalSubmitted(_counter, msg.sender, _amount,   _interest,
    //     _depositDate,_delayInterest, _reason);

    //     return _counter;
    // }

    // function cancelBorrowProposal (uint _proposalId, string _reason) public returns (bool) {
    //     borrowProposal[_proposalId].status = Status.cancelled;
    //     emit NewBorrow_ProposalCancelled(msg.sender, embersProposal[_proposalId].borrower, _reason);
    //     return true;
    // }

    // function approveBorrowShip (uint _proposalId) public  alreadyApproved returns(bool){
    //     borrowProposal[_proposalId].approver(msg.sender);
    //     if(borrowProposal[_proposalId].approver.length == members.length){
    //          members.push(borrowProposal[_proposalId].member);
    //          borrowProposal[_proposalId].status = Status.approved;
    //     }
    //     emit NewBorrow_ProposalApproved(msg.sender, embersProposal[_proposalId].member, _reason);
    //     return true;
    // }

    // function rejectBorrowship (uint _proposalId) public returns(bool){
    //     require( borrowProposal[_proposalId].status != Status.rejected, "Already Rejected");
    //      borrowProposal[_proposalId].status = Status.rejected;
    //      return true;
    //     emit NewBorrow_ProposalRejected(msg.sender, embersProposal[_proposalId].member, _reason);

    // }

    // modifier alreadyApproved (uint _proposalId) {
    //     BorrowProposal memory mp = borrowProposal[_proposalId]
    //     for(uint i = 0; i < mp.approver.lenght; i++) {
    //         if(msg.sender == mp.approver[i]){
    //             revert("Already approved");
    //         }
    //     };
    //     -;
    // }

    // modifier alreadyABorrow (address _member ) {
    //      for(uint i = 0; i < members.lenght; i++) {
    //         if(_member == members[i]){
    //             revert("Already a member");
    //         }
    //     };
    //     -;
    // }

}