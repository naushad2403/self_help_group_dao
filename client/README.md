This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).

## Getting Started


This application is inspired by  Self help group (https://www.drishtiias.com/to-the-points/Paper2/self-help-groups-shgs). 
It's based on Ethereum blockchain. People can create group, join them, deposite money into it and lend that money to peer on interest.


First, run the development server:

```
Steps to run Backend, Run following commands step by step
1. npm i
2. npx hardhat node
3. npx hardhat run scripts/deploy.js --network localhost

Copy produced contract address and paste into client/env.local NEXT_PUBLIC_GROUP_CONTRACT_ADDRESS=address  
```


```
Steps to run Client, Run following commands step by step
1. npm i
2. npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
