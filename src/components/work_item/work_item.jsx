import React from "react";
import styles from "./work_item.module.css";

const WorkItem = ({ url, imgURL, title, description }) => {
  return (
    <li className={styles.container}>
      <a href={"#"} className={styles.a}>
        <img className={styles.img} src={imgURL} alt="" />
        <div className={styles.metadata}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.text}>{description}</span>
        </div>
      </a>
    </li>
  );
};

export default WorkItem;
