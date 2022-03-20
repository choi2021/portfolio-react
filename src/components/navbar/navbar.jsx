import React, { useRef, useState } from "react";
import MenuBtn from "../menubtn/menubtn";
import styles from "./navbar.module.css";

const Navbar = ({ refs, visible, onActive, btns }) => {
  const handleClick = (e) => {
    const section = e.target.dataset.section;
    if (!section) {
      return;
    }
    refs[section].current.scrollIntoView({
      block: "start",
    });

    onActive(section);
  };

  return (
    <header className={`${styles.header} ${visibleNav(visible)}`}>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src="/assets/favicon.png" alt="" />
        <h1 className={styles.title}>Young jun</h1>
      </div>
      <ul className={styles.btns} onClick={handleClick}>
        {btns.map((btn) => (
          <MenuBtn name={btn.name} key={btn.name} active={btn.active}></MenuBtn>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;

function visibleNav(visible) {
  if (!visible) {
    return styles.invisible;
  } else {
    return styles.visible;
  }
}
