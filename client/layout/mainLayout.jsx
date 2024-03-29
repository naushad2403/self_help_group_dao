import { useRouter } from "next/router";
import styles from "./../styles/Home.module.css";
import { ToastGroup } from "../components/ToastGroup";
import { useSelector, useDispatch } from "react-redux";
import { useNetwork } from "wagmi";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { removeToast } from "../state_management/slices/toast";
import ErrorBoundary from "../components/ErrorBoundary";

export default function MainLayout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { chain } = useNetwork();
  // console.log("inside this chain", chain)

  const toasts = useSelector((state) => state.toast.toasts);
  const onClose = (toast) => {
    dispatch(removeToast(toast.id));
  };

  return (
    <>
      {/* <head>
        <title>swaym_sahayta_samuh By Naushad</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </head> */}

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.navigation}>
            <h1
              style={{
                marginLeft: "0px",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "50px",
                textShadow:
                  "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => router.push("/")}
            >
              S
              <sup
                style={{
                  verticalAlign: "super",
                  fontSize: "smaller",
                }}
              >
                H
                <sup
                  style={{
                    verticalAlign: "super",
                    fontSize: "smaller",
                  }}
                >
                  G
                </sup>
              </sup>
            </h1>
            <div className={styles.wallet}>
              <ConnectButton />
            </div>
          </div>
          {chain?.id === 11155111 ? (
            <ErrorBoundary>{children}</ErrorBoundary>
          ) : (
            <div className={styles.modal}>
              Currntly SHG only supports Sepolia testnet. Please Switch your
              network to continue.
            </div>
          )}
        </main>
        {/* 
      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer> */}
        <ToastGroup toasts={toasts} onClose={onClose} />
      </div>
    </>
  );
}
