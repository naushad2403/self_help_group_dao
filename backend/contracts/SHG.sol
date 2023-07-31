// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SHG {
    using SafeMath for uint256;

    address[] members;
    mapping(address => uint256) public balances;
    mapping(uint256 => BorrowProposal) public borrowProposal;
    mapping(address => uint256[]) public proposalIds;
    uint256 public counter = 0;
    string public name;
    uint256 public proposalVotingPeriod = 72 hours;
    mapping(address => Loan) loanDetails;
    DistributionProposal public distributionProposal;

    enum Status {
        Open,
        Claimed,
        Cancelled
    }

    struct Loan {
        uint256 proposalId;
        uint256 amount;
        uint256 interestRate;
        uint256 date;
    }

    struct BorrowProposal {
        uint256 amount;
        address proposer;
        uint256 proposalId;
        string purpose;
        uint256 monthlyInterestRate;
        Status currentStatus;
        uint256 loanDurationInMonth;
        MemberApproval[] approvers;
        uint256 proposalTime;
    }

    struct MemberApproval {
        address member;
        uint256 amount;
    }

    struct DistributionProposal {
        uint256 expiryTime;
        bool isRunning;
    }

    event Withdrawn(address member, uint256 amount);
    event Deposited(address member, uint256 amount);
    event GroupBalanceUpdated(uint256 balance);
    event UserBalanceUpdated(address member, uint256 balance);
    event ProposalCancelled(uint256 proposalId);
    event ProposalClaimed(uint256 proposalId);
    event MembersJoined(address member);
    event ProposalSubmitted(uint256 proposalId, BorrowProposal proposal);
    event ApprovalUpdated(uint256 proposalId, address member, uint256 amount);

    event AmountRecievedFromLoanPayment(
        address member,
        uint256 proposalId,
        uint256 amount
    );

    event MoneyDistributed(address distributor);
    event MoneyDistributionShareSent(address member, uint256 amount);

    constructor(string memory _name) payable {
        members.push(tx.origin);
        balances[tx.origin] = msg.value;
        name = _name;
    }

    function createDistributionProposal() external onlyMember {
        require(
            !distributionProposal.isRunning,
            "Already a proposal is running"
        );
        distributionProposal.isRunning = true;
        distributionProposal.expiryTime = block.timestamp + 84400;
    }

    function getLoanDetails(
        address _member
    ) external view returns (Loan memory loan, uint256 currBalance) {
        Loan memory l = loanDetails[_member];
        uint256 cb = calculateLoanWithInterest(
            l.amount,
            l.interestRate,
            l.date
        );
        return (l, cb);
    }

    function rejectDistributionProposal() external onlyMember {
        require(
            distributionProposal.isRunning &&
                block.timestamp < distributionProposal.expiryTime,
            "No proposal running"
        );
        distributionProposal.isRunning = false;
    }

    function distributeMoney() external onlyMember {
        require(
            distributionProposal.isRunning &&
                block.timestamp > distributionProposal.expiryTime,
            "Rejection period is still open. Please wait for it to end"
        );

        for (uint256 i = 0; i < members.length; i++) {
            uint256 bal = balances[members[i]];
            balances[members[i]] = 0;
            (bool success, ) = members[i].call{value: bal}("");
            require(success, "Money couldn't be sent");
            emit MoneyDistributionShareSent(members[i], bal);
        }

        emit MoneyDistributed(msg.sender);
        distributionProposal.isRunning = false;
    }

    function getAllMembers() external view returns (address[] memory) {
        return members;
    }

    function getMemberWithBalance()
        external
        view
        returns (address[] memory, uint256[] memory)
    {
        uint256[] memory bal = new uint256[](members.length);
        for (uint256 i = 0; i < members.length; i++) {
            bal[i] = balances[members[i]];
        }
        return (members, bal);
    }

    event LoanUpdated(address member, uint256 amount);

    function withdrawAmount(uint256 _amount) public onlyMember {
        require(
            _amount <= balances[msg.sender],
            "Insufficient balance, please create a borrow proposal"
        );
        balances[msg.sender] = balances[msg.sender].sub(_amount);
        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        require(success, "Payment failed");
        emit Withdrawn(msg.sender, _amount);
        emit UserBalanceUpdated(msg.sender, balances[msg.sender]);
        emit GroupBalanceUpdated(address(this).balance);
    }

    function join() external returns (bool) {
        members.push(msg.sender);
        emit MembersJoined(msg.sender);
        return true;
    }

    //TODO Only if not any loan is running
    function submitLoanProposal(
        uint256 _amount,
        string memory _purpose,
        uint256 _interestRatePerMonth,
        uint256 _loanDurationInMonth
    ) external onlyMember noLoanRunning returns (uint256) {
        BorrowProposal storage proposal = borrowProposal[counter];
        proposal.amount = _amount;
        proposal.proposer = msg.sender;
        proposal.proposalId = counter;
        proposal.monthlyInterestRate = _interestRatePerMonth;
        proposal.loanDurationInMonth = _loanDurationInMonth;
        proposal.purpose = _purpose;
        proposal.proposalTime = block.timestamp + proposalVotingPeriod;
        proposal.currentStatus = Status.Open;
        proposalIds[msg.sender].push(counter);
        emit ProposalSubmitted(counter, proposal);
        counter = counter.add(1);
        return counter.sub(1);
    }

    function getApprovers(
        uint256 _proposalId
    ) public view returns (MemberApproval[] memory) {
        return (borrowProposal[_proposalId].approvers);
    }

    function claimApprovedAmount(uint256 _proposalId) public returns (bool) {
        MemberApproval[] memory approvers = getApprovers(_proposalId);
        uint256 totalAmount = 0;
        for (uint256 i = 0; i < approvers.length; i++) {
            require(
                balances[approvers[i].member] >= approvers[i].amount,
                "Insufficient balance in any approver account"
            );
            balances[approvers[i].member] = balances[approvers[i].member].sub(
                approvers[i].amount
            );
            totalAmount = totalAmount.add(approvers[i].amount);
        }

        require(
            totalAmount == borrowProposal[_proposalId].amount,
            "Total approved amount is not equal to required amount"
        );

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
        require(success, "Amount transferred");
        emit ProposalClaimed(_proposalId);
        emit UserBalanceUpdated(msg.sender, balances[msg.sender]);
        emit GroupBalanceUpdated(address(this).balance);
        return success;
    }

    function approveLimit(
        uint256 _proposalId,
        uint256 _amount
    ) external onlyMember returns (bool) {
        MemberApproval[] storage approvers = borrowProposal[_proposalId]
            .approvers;

        emit ApprovalUpdated(_proposalId, msg.sender, _amount);
        for (uint256 i = 0; i < approvers.length; i++) {
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

    function cancelProposal(
        uint256 _proposalId
    ) external onlyMember onlyOpenProposal(_proposalId) returns (bool) {
        borrowProposal[_proposalId].currentStatus = Status.Cancelled;
        emit ProposalCancelled(_proposalId);
        return true;
    }

    function handleDeposit() internal {
        Loan storage loan = loanDetails[msg.sender];
        if (loan.amount == 0) {
            balances[msg.sender] = balances[msg.sender].add(msg.value);
            // Deposited(msg.sender, msg.value);
            emit UserBalanceUpdated(msg.sender, balances[msg.sender]);
            emit GroupBalanceUpdated(address(this).balance);
            return;
        }
        uint256 totalBalance = calculateLoanWithInterest(
            loan.amount,
            loan.interestRate,
            loan.date
        );

        MemberApproval[] memory approvers = getApprovers(loan.proposalId);
        uint sharingAmount = msg.value <= totalBalance ? msg.value : totalBalance;
        for (uint256 i = 0; i < approvers.length; i++) {
            uint256 memberShare = (sharingAmount.mul(approvers[i].amount)).div(
                loan.amount
            );
            balances[approvers[i].member] = balances[approvers[i].member].add(
                memberShare
            );
            emit AmountRecievedFromLoanPayment(
                approvers[i].member,
                loan.proposalId,
                memberShare
            );
            emit UserBalanceUpdated(approvers[i].member, balances[approvers[i].member]);
        }

        if (loan.amount <= msg.value) {
            loan.amount = 0;
            loan.date = 0;
            balances[msg.sender] = balances[msg.sender].add(
                msg.value.sub(totalBalance)
            );
        } else {
            loan.amount = loan.amount.sub(totalBalance);
            loan.date = block.timestamp;
        }

        emit LoanUpdated(msg.sender, loan.amount);
        emit UserBalanceUpdated(msg.sender, balances[msg.sender]);
        emit GroupBalanceUpdated(address(this).balance);
    }

    function calculateLoanWithInterest(
        uint256 principal,
        uint256 interestRate,
        uint256 date
    ) internal view returns (uint256) {
        uint256 currentTime = block.timestamp;
        uint256 timeDiff = currentTime - date;
        return
            (principal.mul(interestRate.div(100)).mul(timeDiff.div(31536000)))
                .add(principal);
    }

    function getProposals(
        address user
    ) public view returns (BorrowProposal[] memory) {
        uint length = proposalIds[user].length;
        BorrowProposal[] memory bp = new BorrowProposal[](length);
        for (uint i = 0; i < proposalIds[user].length; i++) {
            bp[i] = borrowProposal[proposalIds[user][i]];
        }
        return bp;
    }

    receive() external payable onlyMember {
        handleDeposit();
        emit Deposited(msg.sender, msg.value);
    }

    fallback() external payable onlyMember {
        handleDeposit();
        emit Deposited(msg.sender, msg.value);
    }

    function deposit() external payable onlyMember {
        handleDeposit();
        emit Deposited(msg.sender, msg.value);
    }

    function isMember() internal view returns (bool) {
        for (uint i = 0; i < members.length; i++) {
            if (members[i] == msg.sender) {
                return true;
            }
        }
        return false;
    }

    modifier onlyMember() {
        require(isMember(), "You're not member of the group, Please join");
        _;
    }

    modifier onlyOpenProposal(uint256 _proposalId) {
        require(
            borrowProposal[_proposalId].currentStatus == Status.Open,
            "Application is close/expired"
        );
        _;
    }

    modifier onlyWithInProposalTime(uint256 _proposalId) {
        require(
            borrowProposal[_proposalId].proposalTime >= block.timestamp,
            "Approving time has been expired"
        );
        _;
    }

    modifier noLoanRunning() {
        Loan storage loan = loanDetails[msg.sender];
        require(loan.amount == 0, "Already a loan in running");
        _;
    }
}
