import React, { useState } from "react";
import Skill from "../skill/skill";
import styles from "./skills.module.css";

const Skills = (props) => {
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
    <section className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <h3 className={styles.subtitle}>Skills & Attributes</h3>
      <p className={styles.description}>
        프론트엔드의 기본인 HTML,CSS, vanilla JS를 잘 이해하고 있습니다.{" "}
        <br></br>
        자바스크립트 라이브러리인 <b>REACT</b>를 공부하면서 component화에 대해
        고민하고 <br></br> 상태관리에 필요한 <b>Redux</b>와 페이지 관리를 위한{" "}
        <b>Router</b>를 공부했습니다.<br></br>
        협업에 중요한 <b>Git</b>과 부족한 CS에 대해서 매일 공부하고 있습니다.
        <br></br>
      </p>
      <div className={styles.content}>
        <ul className={styles.bars}>
          <h3 className={styles.skillTitle}>Skills</h3>
          {stacks.map((stack) => (
            <Skill name={stack.name} amount={stack.amount}></Skill>
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
