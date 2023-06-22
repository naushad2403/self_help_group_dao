// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SHG {
    address[] members;
    mapping(address => uint) public balances;
    mapping(uint => BorrowProposal) public borrowProposal;
    uint public counter = 0;
    string public name;
    uint public proposalVotingPeriod = 259200;//72 hours in second;
    enum status{
        Voting,
        Approved,
        Cancelled,
        Rejected,
        Setteled
    }

    struct BorrowProposal {
        uint amount;
        address proposer;
        uint proposalId;
        string purpose;
        uint monthlyInterestRate;
        status currentStatus;
        uint loanDurationInMonth;
        address[] approvers;
        address[] rejecters;
        uint proposalTime;
       
    }

    constructor(string memory _name) payable {
        members.push(tx.origin);
        balances[tx.origin] = msg.value;
        name = _name;
    }

    function getAllMembers() external view returns (address[] memory) {
        return members;
    }

    function getMemberWithBalance () external view returns (address[] memory, uint[]  memory) {
         uint[] memory  bal= new uint[](members.length);
         for(uint i = 0; i < members.length; i++) {
            bal[i] = balances[members[i]];
         }
        return (members, bal);
    }

    event Withdrawn(address _member, uint _amount);
    event Deposited(address _member, uint _amount);

    function withdrawAmount(uint _amount) public {
        require(_amount <= balances[msg.sender], "Insufficient balance, please create a borrow proposal");
        balances[msg.sender] -= _amount;
        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        require(success, "Payment failed");
        emit Withdrawn(msg.sender, _amount);
    }

    function join() external returns (bool) {
        members.push(msg.sender);
        return true;
    }


    function submitLoanProposal(uint _amount, string memory _purpose, uint _interestRatePerMonth, 
    uint _loanDurationInMonth) external returns (uint) {
        BorrowProposal storage proposal = borrowProposal[counter];
        proposal.amount = _amount;
        proposal.proposer = msg.sender;
        proposal.proposalId = counter;
        proposal.monthlyInterestRate= _interestRatePerMonth;
        proposal.loanDurationInMonth = _loanDurationInMonth;
        proposal.purpose = _purpose;
        proposal.proposalTime = block.timestamp + proposalVotingPeriod;
        proposal.approvers = new address[](members.length);
        proposal.rejecters = new address[](members.length);
        counter += 1;
        return counter - 1; 
    }

    function getApproversAndRejecters(uint _proposalId) public view returns(address[] memory, address[] memory) {
        return (borrowProposal[_proposalId].approvers, borrowProposal[_proposalId].rejecters);
    }

    function claimApprovedAmount (uint _proposalId) public returns(bool) {
      (address[] memory approvers, )  =  getApproversAndRejecters(_proposalId);
      require(approvers.length > (members.length / 2), "Unsufficient Vote");
      require(address(this).balance > borrowProposal[_proposalId].amount, "Unsufficient amount in group");
      (bool success,)=  borrowProposal[_proposalId].proposer.call{value: borrowProposal[_proposalId].amount}("");
     return success;
    }

    function approveBorrowProposal(uint _proposalId) external returns (bool) {
        // uint approvedL = borrowProposal[_proposalId].approvers.length;
        borrowProposal[_proposalId].approvers.push(msg.sender);
        return true;
    }

     function rejectBorrowProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].rejecters.push(msg.sender);
        return true;
    }

    function cancelProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].currentStatus = status.Cancelled;
        return true;
    }

    receive() external payable {
        balances[msg.sender] += msg.value;
         emit Deposited(msg.sender, msg.value);
    }

    fallback() external payable {
        balances[msg.sender] += msg.value;
         emit Deposited(msg.sender, msg.value);
    }

    function deposit() external payable {
     balances[msg.sender] += msg.value;
     emit Deposited(msg.sender, msg.value);

    }
}
