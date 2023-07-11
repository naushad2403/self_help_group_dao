// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SHG {
    address[] members;
    mapping(address => uint) public balances;
    mapping(uint => BorrowProposal) public borrowProposal;
    uint public counter = 0;
    string public name;
    uint public proposalVotingPeriod = 300; // 72 hours in seconds
    mapping(address => Loan) public loanDetails;

    enum Status {
        Open,
        Claimed,
        Cancelled
    }

    struct Loan {
        uint proposalId;
        uint amount;
        uint interestRate;
        uint date;
    }

    struct BorrowProposal {
        uint amount;
        address proposer;
        uint proposalId;
        string purpose;
        uint monthlyInterestRate;
        Status currentStatus;
        uint loanDurationInMonth;
        MemberApproval[] approvers;
        address[] rejecters;
        uint proposalTime;
    }

    struct MemberApproval {
        address member;
        uint256 percentage;
    }

    constructor(string memory _name) payable {
        members.push(tx.origin);
        balances[tx.origin] = msg.value;
        name = _name;
    }

    function getAllMembers() external view returns (address[] memory) {
        return members;
    }

    function getMemberWithBalance()
        external
        view
        returns (address[] memory, uint[] memory)
    {
        uint[] memory bal = new uint[](members.length);
        for (uint i = 0; i < members.length; i++) {
            bal[i] = balances[members[i]];
        }
        return (members, bal);
    }

    event Withdrawn(address _member, uint _amount);
    event Deposited(address _member, uint _amount);
    event ProposalCancelled(uint _proposalId);
    event ProposalApproved(uint proposalId, address approver, uint percentage);
    event ProposalRejected(uint proposalId, address rejector);
    event ProposalClaimed(uint _proposalId);
    event MembersJoined(address _member);
    event ProposalSubmitted(uint _proposalId);
    event ApprovalUpdated(
        uint proposalId,
        address member,
        uint256 newPercentage
    );

    event AmountRecievedFromLoanPayment(
        address member,
        uint proposalId,
        uint amount
    );
    event LoanUpdated(address member, uint amount);

    function withdrawAmount(uint _amount) public {
        require(
            _amount <= balances[msg.sender],
            "Insufficient balance, please create a borrow proposal"
        );
        balances[msg.sender] -= _amount;
        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        require(success, "Payment failed");
        emit Withdrawn(msg.sender, _amount);
    }

    function join() external returns (bool) {
        members.push(msg.sender);
        emit MembersJoined(msg.sender);
        return true;
    }

    function submitLoanProposal(
        uint _amount,
        string memory _purpose,
        uint _interestRatePerMonth,
        uint _loanDurationInMonth
    ) external returns (uint) {
        BorrowProposal storage proposal = borrowProposal[counter];
        proposal.amount = _amount;
        proposal.proposer = msg.sender;
        proposal.proposalId = counter;
        proposal.monthlyInterestRate = _interestRatePerMonth;
        proposal.loanDurationInMonth = _loanDurationInMonth;
        proposal.purpose = _purpose;
        proposal.proposalTime = block.timestamp + proposalVotingPeriod;
        proposal.currentStatus = Status.Open;
        counter += 1;
        emit ProposalSubmitted(counter - 1);
        return counter - 1;
    }

    function getApproversAndRejecters(
        uint _proposalId
    ) public view returns (MemberApproval[] memory, address[] memory) {
        return (
            borrowProposal[_proposalId].approvers,
            borrowProposal[_proposalId].rejecters
        );
    }

    function claimApprovedAmount(uint _proposalId) public returns (bool) {
        (MemberApproval[] memory approvers, ) = getApproversAndRejecters(
            _proposalId
        );
        require(approvers.length > (members.length / 2), "Insufficient votes");
        require(
            address(this).balance > borrowProposal[_proposalId].amount,
            "Insufficient amount in group"
        );

        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < approvers.length; i++) {
            totalPercentage += approvers[i].percentage;
            uint256 approvedAmount = (borrowProposal[_proposalId].amount *
                approvers[i].percentage) / 100;
            require(
                balances[approvers[i].member] >= approvedAmount,
                "Insufficient balance for the approved percentage"
            );
            balances[approvers[i].member] -= approvedAmount;
        }

        require(totalPercentage == 100, "Total percentage does not equal 100%");

        borrowProposal[_proposalId].currentStatus = Status.Claimed;
        loanDetails[msg.sender] = Loan(
            _proposalId,
            borrowProposal[_proposalId].amount,
            borrowProposal[_proposalId].monthlyInterestRate,
            block.timestamp
        );
        (bool success, ) = borrowProposal[_proposalId].proposer.call{
            value: borrowProposal[_proposalId].amount
        }("");

        require(success, "Amount Transferred");
        emit ProposalClaimed(_proposalId);
        return success;
    }

    function approveBorrowProposal(
        uint _proposalId,
        uint256 _percentage
    ) external returns (bool) {
        MemberApproval memory approval = MemberApproval({
            member: msg.sender,
            percentage: _percentage
        });
        borrowProposal[_proposalId].approvers.push(approval);
        emit ProposalApproved(_proposalId, msg.sender, _percentage);
        return true;
    }

    function updateApproveBorrowProposal(
        uint _proposalId,
        uint256 _newPercentage
    ) external returns (bool) {
        MemberApproval[] storage approvers = borrowProposal[_proposalId]
            .approvers;
        for (uint i = 0; i < approvers.length; i++) {
            if (approvers[i].member == msg.sender) {
                approvers[i].percentage = _newPercentage;
                emit ApprovalUpdated(_proposalId, msg.sender, _newPercentage);
                return true;
            }
        }
        return false;
    }

    function rejectBorrowProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].rejecters.push(msg.sender);
        emit ProposalRejected(_proposalId, msg.sender);
        return true;
    }

    function cancelProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].currentStatus = Status.Cancelled;
        emit ProposalCancelled(_proposalId);
        return true;
    }

    function handleDeposit() internal {
        Loan storage loan = loanDetails[msg.sender];
        require(loan.amount > 0, "No active loan for the sender");
        require(msg.value > 0, "Deposit amount should be greater than 0");

        uint256 currentTime = block.timestamp;
        uint256 timeDiff = currentTime - loan.date;
        uint256 totalBalance = calculateLoanWithInterest(
            loan.amount,
            loan.interestRate,
            timeDiff
        );

        (MemberApproval[] memory approvers, ) = getApproversAndRejecters(
            loan.proposalId
        );
        for (uint256 i = 0; i < approvers.length; i++) {
            uint256 memberShare = (msg.value * approvers[i].percentage) / 100;
            balances[approvers[i].member] += memberShare;
            emit AmountRecievedFromLoanPayment(
                approvers[i].member,
                loan.proposalId,
                memberShare
            );
        }

        balances[msg.sender] += msg.value;
        if (loan.amount <= msg.value) {
            loan.amount = 0;
            loan.date = 0;
        } else {
            loan.amount -= totalBalance;
            loan.date = currentTime;
        }

        emit LoanUpdated(msg.sender, loan.amount);
    }

    function calculateLoanWithInterest(
        uint256 principal,
        uint256 interestRate,
        uint256 time
    ) internal pure returns (uint256) {
        return (principal * (interestRate ** time)) / 100 + principal;
    }

    receive() external payable {
        balances[msg.sender] += msg.value;
        handleDeposit();
        emit Deposited(msg.sender, msg.value);
    }

    fallback() external payable {
        balances[msg.sender] += msg.value;
        handleDeposit();
        emit Deposited(msg.sender, msg.value);
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
        handleDeposit();
        emit Deposited(msg.sender, msg.value);
    }
}
