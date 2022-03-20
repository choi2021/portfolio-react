import React from "react";
import { FaHandPointUp } from "react-icons/fa";
import styles from "./upbtn.module.css";

const UpBtn = ({ onClick, visible }) => {
  return (
    <button
      className={`${styles.btn} ${visibleBtn(visible)}`}
      onClick={onClick}
    >
      <FaHandPointUp></FaHandPointUp>
    </button>
  );
};

export default UpBtn;

function visibleBtn(visible) {
  if (!visible) {
    return styles.invisible;
  } else {
    return styles.visible;
  }
}
