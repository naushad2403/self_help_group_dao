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
          <button style={{ width: "80px" }}>Deposit</button>
          <button style={{ width: "80px" }}>Withdraw</button>
        </div>
        <div className={styles.allDetail}>
          <div>
            <h2>Members</h2>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>

            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
            <div>
              <a href="">0xsdffafasfasdfasfd</a>
              <span> ETH 200</span>
            </div>
          </div>
          <div>
            <h2>Proposal</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Need 1ETH for personal use</p>
              </div>
              <button style={{ width: "80px" }}> View </button>
              <button style={{ width: "80px" }}>Approve</button>
              <button style={{ width: "80px" }}>Reject </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Need 1ETH for personal use</p>
              </div>
              <button style={{ width: "80px" }}> View </button>
              <button style={{ width: "80px" }}>Approve</button>
              <button style={{ width: "80px" }}>Reject </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Need 1ETH for personal use</p>
              </div>
              <button style={{ width: "80px" }}> View </button>
              <button style={{ width: "80px" }}>Approve</button>
              <button style={{ width: "80px" }}>Reject </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Need 1ETH for personal use</p>
              </div>
              <button style={{ width: "80px" }}> View </button>
              <button style={{ width: "80px" }}>Approve</button>
              <button style={{ width: "80px" }}>Reject </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Need 1ETH for personal use</p>
              </div>
              <button style={{ width: "80px" }}> View </button>
              <button style={{ width: "80px" }}>Approve</button>
              <button style={{ width: "80px" }}>Reject </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
