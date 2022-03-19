import React from "react";
import styles from "./work_item.module.css";

const WorkItem = ({ url, imgURL, title, description, invisible }) => {
  return (
    <li className={listDisplay(invisible)}>
      <a href={url} className={styles.a}>
        <img className={styles.img} src={imgURL} alt="" />
        <div className={styles.metadata}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.text}>{description}</span>
        </div>
      </a>
    </li>
  );
};

function listDisplay(prop) {
  switch (prop) {
    case false:
      return styles.container;
    case true:
      return styles.invisible;
  }
}

export default WorkItem;
