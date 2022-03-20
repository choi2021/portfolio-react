import React from "react";
import { FaHandPointUp } from "react-icons/fa";
import styles from "./upbtn.module.css";

const UpBtn = ({ onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <FaHandPointUp></FaHandPointUp>
    </button>
  );
};

export default UpBtn;
