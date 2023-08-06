This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).

## Getting Started



Problem Statement:

A group comprising approximately 10 individuals seeks to facilitate lending and borrowing money among themselves for personal use. The borrowers have the freedom to negotiate the interest rate for their loans.

Solution:

To address this, a system is proposed wherein any member of the group can initiate the formation of a lending/borrowing group and invite others to join. Within this group, members can deposit funds at their convenience and withdraw them as needed. When a member wishes to borrow money, they must create a borrow proposal detailing the desired amount, loan duration, interest rate, and purpose. Other group members willing to lend money can then approve the proposal, allowing the borrower to claim the approved amount. Upon receiving the funds, the borrower will be responsible for depositing the borrowed sum along with the agreed-upon interest, which will be credited to the lender's account.

There is approval time for 72 hours, if no one approve the borrow proposal, it'll be expired automatically.


This application is inspired by  Self help group (https://www.drishtiias.com/to-the-points/Paper2/self-help-groups-shgs). 
It's based on Ethereum blockchain. People can create group, join them, deposite money into it and lend that money to peer on interest.
Members can withdraw their amount any time but if they want to borrow then borrow proposal needs to be created.


```


```
Steps to run Client, Run following commands step by step
1. npm i
2. npm run shg_abi 
3. npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


###TODO
1. Add SubGraph for user transation history
2. User profile screen.
3. UI redesigning.
