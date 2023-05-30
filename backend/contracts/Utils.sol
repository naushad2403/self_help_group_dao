struct MemberProposal {
    address member_address;
    address proposar;
   string reason;
    address[] approver;
    uint8 status;
}


enum Status {
    Open,
    approvalPending,
    approved,
    rejected,
    close,
    cancelled
}




struct BorrowProposal {
    uint amount;
    address borrower;
    uint startDate;
    uint interestRate;
    string purpose;
    uint depositDate;
    uint delayInterestRate;
    uint8 status;
    address[] approver;

}

struct Loan {
    uint amount;
    uint approvedDate;
    uint interestRate;
    uint proposalId;
    uint depositDate;
    uint postDepositInterest;
}
struct Balance {
    uint deposit;
    uint withdraw;
    uint remaining;
    Loan[] loan;
    uint interest;
}

