import React, { useEffect, useState } from "react";
import ProjectMenu from "../project_menu/project_menu";
import WorkList from "../work_list/work_list";
import styles from "./projects.module.css";

const Projects = ({ projects }) => {
  const [workList, setWorkList] = useState(projects);
  const [menuCount, setMenuCount] = useState(0);
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuList, setMenuList] = useState([
    {
      title: "All",
      category: "All",
      clicked: true,
      amount: 6,
    },
    {
      title: "Side Projects",
      category: "Side",
      clicked: false,
      amount: 3,
    },
    {
      title: "Team Projects",
      category: "Team",
      clicked: false,
      amount: 3,
    },
  ]);

  const handleClick = (e) => {
    const category = e.target.dataset.category;
    if (category === undefined) {
      return;
    }
    setMenuList((menuList) => {
      return [...menuList].map((item) => {
        if (item.category === category) {
          return { ...item, clicked: true };
        }
        return { ...item, clicked: false };
      });
    });
    handleProjectAnim();
    updateProject(category);
  };

  const handleProjectAnim = () => {
    setMenuClicked(true);
    setTimeout(() => {
      setMenuClicked(false);
    }, 300);
  };

  const updateProject = (category) => {
    switch (category) {
      case "All":
        setWorkList(projects);
        break;
      case "Side":
      case "Team":
        const updated = [...projects].filter((item) => {
          return item.category === category;
        });
        setWorkList(updated);
        break;
      default:
        throw Error("You sent a wrong category");
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Works</h1>
      <h3 className={styles.subtitle}>Projects</h3>
      <ProjectMenu
        menuList={menuList}
        onClick={handleClick}
        count={workList.length}
      ></ProjectMenu>
      <WorkList workList={workList} clicked={menuClicked}></WorkList>
    </section>
  );
};

export default Projects;
