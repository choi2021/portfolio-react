import React, { useState } from "react";
import ProjectBtn from "../project_btn/project_btn";
import styles from "./project_menu.module.css";

const ProjectMenu = ({ menuList, onClick, count }) => {
  return (
    <ul className={styles.list} onClick={onClick}>
      {menuList.map((item) => (
        <ProjectBtn
          title={item.title}
          clicked={item.clicked}
          category={item.category}
          key={item.title}
          count={count}
        ></ProjectBtn>
      ))}
    </ul>
  );
};

export default ProjectMenu;
