import { useRouter } from "next/router";

export default function Group() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "red",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "yellow",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <h3>Address: {router.address}</h3>
        <h3>Name: G1</h3>
        <h3>Balance: 100</h3>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "pink",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <div>
          <h2>Members</h2>
        </div>
        <div>
          <h2>Proposal</h2>
        </div>
      </div>
    </div>
  );
}
