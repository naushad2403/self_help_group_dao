import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  sepolia,
  localhost,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { Provider } from "react-redux";
import { store } from "./../state_management/store";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
   sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [localhost] : [sepolia]),
  ],
  [publicProvider()]
);

console.log("Test network", process.env.NEXT_PUBLIC_ENABLE_TESTNETS);

const { connectors } = getDefaultWallets({
  appName: "SHG",
  projectId: "SHG",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Provider store={store}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
