import React, { useState } from "react";
import ProjectBtn from "../project_btn/project_btn";
import styles from "./project_menu.module.css";

const ProjectMenu = ({ menuList }) => {
  return (
    <ul className={styles.list}>
      {menuList.map((item) => (
        <ProjectBtn
          title={item.title}
          clicked={item.clicked}
          key={item.title}
        ></ProjectBtn>
      ))}
    </ul>
  );
};

export default ProjectMenu;
