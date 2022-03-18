import React from "react";
import styles from "./project_btn.module.css";

const ProjectBtn = ({ title, amount, clicked }) => {
  return (
    <li className={styles.item}>
      <button className={`${styles.btn} ${clicked && styles.clicked}`}>
        {title}
      </button>
      <div className={`${styles.amount} ${clicked && styles.clicked}`}>8</div>
    </li>
  );
};
export default ProjectBtn;
