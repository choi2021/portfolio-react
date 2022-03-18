import React, { useState } from "react";
import ProjectBtn from "../project_btn/project_btn";
import styles from "./project_menu.module.css";

const ProjectMenu = (props) => {
  const [menuList, setMenuList] = useState([
    {
      title: "All",
      clicked: true,
    },
    {
      title: "Side Projects",
      clicked: false,
    },
    {
      title: "Team Projects",
      clicked: false,
    },
  ]);
  return (
    <ul className={styles.list}>
      {menuList.map((item) => (
        <ProjectBtn title={item.title} clicked={item.clicked}></ProjectBtn>
      ))}
    </ul>
  );
};

export default ProjectMenu;
