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
    DistributionProposal public distributionProposal;

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
        uint proposalTime;
    }

    struct MemberApproval {
        address member;
        uint256 amount;
    }

    struct DistributionProposal {
        uint expiryTime;
        bool isRunning;
    }

      event Withdrawn(address _member, uint _amount);
    event Deposited(address _member, uint _amount);
    event ProposalCancelled(uint _proposalId);
    event ProposalClaimed(uint _proposalId);
    event MembersJoined(address _member);
    event ProposalSubmitted(uint _proposalId);
    event ApprovalUpdated(
        uint proposalId,
        address member,
        uint256 amount
    );

    event AmountRecievedFromLoanPayment(
        address member,
        uint proposalId,
        uint amount
    );

    event MoneyDistributed(address distributor);
    event MoneyDistributionShareSent(address member, uint amount);

    constructor(string memory _name) payable {
        members.push(tx.origin);
        balances[tx.origin] = msg.value;
        name = _name;
    }

    function createDistributionProposal() external {
        require(
            !distributionProposal.isRunning,
            "Already  a proposal is running"
        );
        distributionProposal.isRunning = true;
        distributionProposal.expiryTime = block.timestamp + 84400;
    }

    function rejectDistributionProposal() external {
        require(
            distributionProposal.isRunning &&
                block.timestamp < distributionProposal.expiryTime,
            "No proposal Running"
        );
        distributionProposal.isRunning = false;
    }

    function distributeMoney() external {

        require(
            distributionProposal.isRunning &&
                block.timestamp > distributionProposal.expiryTime,
            "Rejection period is still Open, Pelase wait for it to end"
        );

        for (uint i = 0; i < members.length; i++) {
            uint bal = balances[members[i]];
            balances[members[i]] = 0;
            (bool success, ) = members[i].call{value:bal}("");
            require(success, "Money Couldn't send");
            emit MoneyDistributionShareSent(members[i], bal);
        }
        
        emit MoneyDistributed(msg.sender);
        distributionProposal.isRunning  = false;
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

    function getApprovers(
        uint _proposalId
    ) public view returns (MemberApproval[] memory) {
        return (
            borrowProposal[_proposalId].approvers
        );
    }

    function claimApprovedAmount(uint _proposalId) public returns (bool) {
        (MemberApproval[] memory approvers) = getApprovers(
            _proposalId
        );
        require(approvers.length > (members.length / 2), "Insufficient votes");
        require(
            address(this).balance > borrowProposal[_proposalId].amount,
            "Insufficient amount in group"
        );

        uint256 totalAmount = 0;
        for (uint256 i = 0; i < approvers.length; i++) {
            require(
                balances[approvers[i].member] >= approvers[i].amount,
                "Insufficient balance for the approved percentage"
            );
            balances[approvers[i].member] -= approvers[i].amount;
        }

        require(totalAmount == 100, "Total percentage does not equal 100%");

        borrowProposal[_proposalId].currentStatus = Status.Claimed;
        loanDetails[msg.sender] = Loan(
            _proposalId,
            borrowProposal[_proposalId].amount,
            borrowProposal[_proposalId].monthlyInterestRate,
            block.timestamp
        );
        borrowProposal[_proposalId].currentStatus = Status.Claimed;
        (bool success, ) = borrowProposal[_proposalId].proposer.call{
            value: borrowProposal[_proposalId].amount
        }("");
        require(success, "Amount Transferred");
        emit ProposalClaimed(_proposalId);
        return success;
    }
    function approveLimit (
        uint _proposalId,
        uint256 _amount
    ) external returns (bool) {
        MemberApproval[] storage approvers = borrowProposal[_proposalId]
            .approvers;
        
        emit ApprovalUpdated(_proposalId, msg.sender, _amount);
        for (uint i = 0; i < approvers.length; i++) {
            if (approvers[i].member == msg.sender) {
                approvers[i].amount = _amount;
               
                return true;
            }
        }
         MemberApproval memory approval = MemberApproval({
            member: msg.sender,
            amount: _amount
        });
        borrowProposal[_proposalId].approvers.push(approval);
        return true;
    }

    function cancelProposal(uint _proposalId) external returns (bool) {
        borrowProposal[_proposalId].currentStatus = Status.Cancelled;
        emit ProposalCancelled(_proposalId);
        return true;
    }

    function handleDeposit() internal {
        Loan storage loan = loanDetails[msg.sender];
        require(msg.value > 0, "Deposit amount should be greater than 0");

        if( loan.amount == 0) {
             balances[msg.sender] += msg.value;
             emit Deposited(msg.sender, msg.value);
             return;
        }
        uint256 currentTime = block.timestamp;
        uint256 timeDiff = currentTime - loan.date;
        uint256 totalBalance = calculateLoanWithInterest(
            loan.amount,
            loan.interestRate,
            timeDiff
        );

        (MemberApproval[] memory approvers) = getApprovers(
            loan.proposalId
        );
        for (uint256 i = 0; i < approvers.length; i++) {
            uint256 memberShare = (msg.value * (approvers[i].amount/loan.amount));
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
