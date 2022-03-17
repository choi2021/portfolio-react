import React from "react";
import styles from "./skill.module.css";

const Skill = ({ name, amount }) => {
  const barAmount = barStyle(name);
  return (
    <li className={styles.container}>
      <div className={styles.metadata}>
        <p>{name}</p>
        <p>{amount}</p>
      </div>
      <div className={styles.bar}>
        <div className={barAmount}></div>
      </div>
    </li>
  );
};

export default Skill;

function barStyle(name) {
  switch (name) {
    case "HTML":
      return styles.html;
    case "CSS":
      return styles.css;
    case "JS":
      return styles.js;
    case "REACT":
      return styles.react;
  }
}
