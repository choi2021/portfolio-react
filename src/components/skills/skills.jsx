import React, { useEffect, useRef, useState } from "react";
import Skill from "../skill/skill";
import styles from "./skills.module.css";

const Skills = ({ getRef }) => {
  const skillsRef = useRef();
  useEffect(() => {
    getRef(skillsRef, "skills");
  }, []);
  const [stacks, setStacks] = useState([
    {
      name: "HTML",
      amount: "60%",
    },
    {
      name: "CSS",
      amount: "40%",
    },
    {
      name: "Javascript",
      amount: "30%",
    },
    {
      name: "React",
      amount: "15%",
    },
  ]);
  return (
    <section className={styles.container} ref={skillsRef} data-section="skills">
      <h1 className={styles.title}>Skills</h1>
      <h3 className={styles.subtitle}>Skills & Attributes</h3>
      <p className={styles.description}>
        프론트엔드의 기본인 HTML,CSS, vanilla JS를 공부해 DOM과 페이지가
        rendering되는 과정을 이해하고 있습니다.
        <b>REACT</b>와 함께, 상태관리를 위한 Redux, 페이지 관리를 위한 Router
        등을 공부하고 있습니다. 협업에 중요한 <b>Git</b>과 부족한 CS에 대해서
        매일 공부하고 있습니다.
      </p>
      <div className={styles.content}>
        <ul className={styles.bars}>
          <h3 className={styles.skillTitle}>Skills</h3>
          {stacks.map((stack) => (
            <Skill
              name={stack.name}
              amount={stack.amount}
              key={stack.name}
            ></Skill>
          ))}
        </ul>
        <div className={styles.toolList}>
          <div className={styles.tool}>
            <h3 className={styles.skillTitle}>Tools</h3>
            <p className={styles.skill}>Visual Studio</p>
          </div>
          <div className={styles.etc}>
            <h3 className={styles.skillTitle}>Etc</h3>
            <p className={styles.skill}>Git</p>
            <p className={styles.skill}>Redux</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
