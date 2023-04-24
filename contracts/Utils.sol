struct MemberProposal {
    address member_address;
    address proposar;
   string reason;
    address[] approvedAddress;
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




struct Borrow {
    uint amount;
    uint startDate;
    uint interestRate;
    uint8 status;
}

struct Balance {
    uint deposit;
    uint withdraw;
    uint remaining;
    uint loan;
    uint interest;
}