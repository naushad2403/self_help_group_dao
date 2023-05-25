import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CreateGroup from "../components/CreateGroup";
import MyGroup from "../components/MyGroup";
import AllGroup from "../components/AllGroup";

const Home: NextPage = () => {
  return (
    <>
      <div className={`${styles.group} ${styles.createGroup}`}>
        <CreateGroup></CreateGroup>
      </div>
      <div className={styles.group}>
        <h2> Groups</h2>
        <MyGroup></MyGroup>
      </div>
    </>
  );
};

export default Home;
