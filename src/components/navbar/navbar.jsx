import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src="/assets/favicon.png" alt="" />
        <h1 className={styles.title}>Young jun</h1>
      </div>
      <ul className={styles.btns}>
        <button className={styles.btn}>Home</button>
        <button className={styles.btn}>About</button>
        <button className={styles.btn}>Skills</button>
        <button className={styles.btn}>My work</button>
        <button className={styles.btn}>Contact</button>
      </ul>
    </header>
  );
};

export default Navbar;
