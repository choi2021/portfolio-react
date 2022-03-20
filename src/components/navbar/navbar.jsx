import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ refs }) => {
  const handleClick = (e) => {
    const section = e.target.dataset.section;
    if (!section) {
      return;
    }
    refs[section].current.scrollIntoView({
      block: "start",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src="/assets/favicon.png" alt="" />
        <h1 className={styles.title}>Young jun</h1>
      </div>
      <ul className={styles.btns} onClick={handleClick}>
        <button className={styles.btn} data-section="home">
          Home
        </button>
        <button className={styles.btn} data-section="about">
          About
        </button>
        <button className={styles.btn} data-section="skills">
          Skills
        </button>
        <button className={styles.btn} data-section="projects">
          My work
        </button>
        <button className={styles.btn} data-section="contact">
          Contact
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
