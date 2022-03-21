import React, { memo } from "react";
import styles from "./menubtn.module.css";

const MenuBtn = memo(({ name, active }) => {
  return (
    <button
      className={`${styles.btn} ${activateBtn(active)}`}
      data-section={name}
    >
      {name}
    </button>
  );
});

export default MenuBtn;

function activateBtn(active) {
  if (!active) {
    return;
  } else {
    return styles.active;
  }
}
