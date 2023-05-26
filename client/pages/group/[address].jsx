import { useRouter } from "next/router";
import styles from "./../../styles/GroupView.module.css";
import { useSelector } from "react-redux";

export default function Group() {
  const router = useRouter();
  const info = useSelector((state) => state.info);
  console.log("Group view info", info);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.basicDetail}>
          <h3>Address: {router.query.address}</h3>
          <h3>Name: G1</h3>
          <h3>Balance: 100</h3>
        </div>
        <div className={styles.allDetail}>
          <div>
            <h2>Members</h2>
          </div>
          <div>
            <h2>Proposal</h2>
          </div>
        </div>
      </div>
    </>
  );
}
