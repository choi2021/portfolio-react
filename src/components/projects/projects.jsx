import React, { useEffect, useState } from "react";
import ProjectMenu from "../project_menu/project_menu";
import WorkList from "../work_list/work_list";
import styles from "./projects.module.css";

const Projects = (props) => {
  const [workList, setWorkList] = useState([
    {
      id: 1,
      title: "Youtube UI",
      url: "#",
      category: "side",
      imgURL: "/assets/home.jpg",
      description: "HTML+CSS",
    },
    {
      id: 2,
      title: "Youtube UI",
      url: "#",
      category: "side",
      imgURL: "/assets/favicon.png",
      description: "HTML+CSS+JS",
    },
    {
      id: 3,
      title: "Youtube UI",
      url: "#",
      category: "side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
    },
    {
      id: 4,
      title: "Youtube UI",
      url: "#",
      category: "side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
    },
    {
      id: 5,
      title: "Youtube UI",
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
      amount: 6,
    },
    {
      title: "Side Projects",
      clicked: false,
      amount: 3,
    },
    {
      title: "Team Projects",
      clicked: false,
      amount: 3,
    },
  ]);

  const handleClick = (e) => {
    const title = e.target.dataset.title;
    if (title === undefined) {
      return;
    }
    setMenuList((menuList) => {
      return [...menuList].map((item) => {
        if (item.title === title) {
          return { ...item, clicked: true };
        }
        return { ...item, clicked: false };
      });
    });
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Works</h1>
      <h3 className={styles.subtitle}>Projects</h3>
      <ProjectMenu menuList={menuList} onClick={handleClick}></ProjectMenu>
      <WorkList workList={workList}></WorkList>
    </section>
  );
};

export default Projects;
