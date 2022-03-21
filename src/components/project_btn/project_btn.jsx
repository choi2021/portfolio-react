import React, { memo } from "react";
import styles from "./project_btn.module.css";

const ProjectBtn = memo(({ title, count, clicked, category }) => {
  return (
    <li className={styles.item}>
      <button
        className={`${styles.btn} ${clicked && styles.clicked}`}
        data-category={category}
      >
        {title}
      </button>
      <div className={`${styles.amount} ${clicked && styles.clicked}`}>
        {count}
      </div>
    </li>
  );
});
export default ProjectBtn;
