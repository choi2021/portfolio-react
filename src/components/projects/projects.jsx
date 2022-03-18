import React, { useEffect, useState } from "react";
import ProjectMenu from "../project_menu/project_menu";
import WorkList from "../work_list/work_list";
import styles from "./projects.module.css";

const Projects = (props) => {
  const [workList, setWorkList] = useState([
    {
      id: 1,
      url: "#",
      category: "side",
      imgURL: "/assets/home.jpg",
      description: "HTML+CSS",
    },
    {
      id: 2,
      url: "#",
      category: "side",
      imgURL: "/assets/favicon.png",
      description: "HTML+CSS+JS",
    },
    {
      id: 3,
      url: "#",
      category: "side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
    },
    {
      id: 4,
      url: "#",
      category: "side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
    },
    {
      id: 5,
      url: "#",
      category: "side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
    },
  ]);

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
    <section className={styles.container}>
      <h1 className={styles.title}>My Works</h1>
      <h3 className={styles.subtitle}>Projects</h3>
      <ProjectMenu menuList={menuList}></ProjectMenu>
      <WorkList workList={workList}></WorkList>
    </section>
  );
};

export default Projects;
