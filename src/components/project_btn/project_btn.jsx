import React from "react";
import styles from "./project_btn.module.css";

const ProjectBtn = ({ title, amount, clicked, onClick }) => {
  return (
    <li className={styles.item}>
      <button
        className={`${styles.btn} ${clicked && styles.clicked}`}
        data-title={title}
      >
        {title}
      </button>
      <div className={`${styles.amount} ${clicked && styles.clicked}`}>8</div>
    </li>
  );
};
export default ProjectBtn;
