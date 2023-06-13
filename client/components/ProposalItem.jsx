import React, { useState } from "react";
import styles from './../styles/ProposalItem.module.css'

const ProposalItem = ({proposalId}) => {
  const [proposalInfo, setProposalInfo] = useState("");

  return (
    <div className={styles.proposalItemContainer}>
      <h2>Amount: 100</h2>
      <h2>Interest rate/Month: 100</h2>
      <h2>Duration: 100 Month</h2>
      <h2>Purpose</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        pellentesque mauris sed felis tincidunt, non tincidunt lorem fringilla.
        Donec ut tellus eu arcu posuere congue. Aenean convallis quam id nunc
        aliquet, eu rutrum enim fermentum. Curabitur tincidunt felis ac diam
        fringilla, nec scelerisque erat efficitur. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Sed et mauris
        lacinia, posuere ex sed, malesuada justo. Mauris iaculis cursus
        malesuada. Integer at ultrices risus, non efficitur nisl. Fusce cursus
        purus non ipsum tincidunt, ac hendrerit mauris laoreet. Etiam et arcu ut
        metus cursus scelerisque. Aenean hendrerit risus ac turpis cursus, a
        posuere sapien tristique. Cras fringilla tincidunt turpis, vitae iaculis
        neque fringilla vitae.
      </p>
    </div>
  );
};

export default ProposalItem;
