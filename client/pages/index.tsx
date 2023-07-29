import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import CreateGroup from "../components/CreateGroup";
import MyGroup from "../components/MyGroup";

const Home: NextPage = () => {
  return (
    <>
      <div className={`${styles.group} ${styles.createGroup}`}>
        <CreateGroup></CreateGroup>
      </div>
      <div className={styles.group}>
        <h2
          style={{
            color: "black",
            fontSize: "50px",
            textShadow:
              "0 4px 8px #ffffff, 0 6px 20px rgba(255, 255, 255, 0.5)",
          }}
        >
          {" "}
          Groups
        </h2>
        <MyGroup></MyGroup>
      </div>
    </>
  );
};

export default Home;
