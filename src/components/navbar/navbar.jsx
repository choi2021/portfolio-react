import React, { memo, useState } from "react";
import MenuBtn from "../menubtn/menubtn";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

const Navbar = memo(({ refs, visible, onActive, btns }) => {
  const [isClicked, setIsClicked] = useState(false);
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

  const handleMobileBtnClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className={`${styles.header} ${visibleNav(visible)}`}>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src="./assets/favicon.png" alt="" />
        <h1 className={styles.title}>Young jun</h1>
      </div>
      <ul
        className={`${styles.btns} ${activeMobileBtn(isClicked)}`}
        onClick={handleClick}
      >
        {btns.map((btn) => (
          <MenuBtn name={btn.name} key={btn.name} active={btn.active}></MenuBtn>
        ))}
      </ul>
      <button
        className={`${styles.mobileBtn} ${activeMobileBtn(isClicked)}`}
        onClick={handleMobileBtnClick}
      >
        <FaBars></FaBars>
      </button>
    </header>
  );
});

export default Navbar;

function visibleNav(visible) {
  if (!visible) {
    return styles.invisible;
  } else {
    return styles.visible;
  }
}

function activeMobileBtn(isClicked) {
  if (!isClicked) {
    return styles.inactive;
  } else {
    return styles.active;
  }
}
