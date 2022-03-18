import React, { useState } from "react";
import ProjectMenu from "../project_menu/project_menu";
import styles from "./projects.module.css";

const Projects = (props) => {
  const [works, setWorks] = useState([
    {
      skill: "",
    },
  ]);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Works</h1>
      <h3 className={styles.subtitle}>Projects</h3>
      <ProjectMenu></ProjectMenu>
    </section>
  );
};

export default Projects;
