import React, { memo, useEffect, useRef } from "react";
import styles from "./about.module.css";
import { FaReact, FaJs } from "react-icons/fa";

const About = memo(({ getRef }) => {
  const aboutRef = useRef();
  useEffect(() => {
    getRef(aboutRef, "about");
  }, [getRef]);
  return (
    <section className={styles.container} ref={aboutRef} data-section="about">
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.message}>
        2021년 5월, HTML과 CSS공부를 시작으로 자바스크립트, 리액트를 즐겁게
        공부하고 있습니다. 프론트엔드 개발자를 목표로 오늘보다 내일 더 다가갈 수
        있게 매일 공부하고 기록해나가겠습니다.
      </p>
      <ul className={styles.stacks}>
        <li className={styles.stack}>
          <button className={styles.icon}>
            <FaJs></FaJs>
          </button>

          <p>
            Front-end basic<br></br>HTML,CSS,Javascript
          </p>
        </li>
        <li className={styles.stack}>
          <button className={styles.icon}>
            <FaReact></FaReact>
          </button>
          <p>React</p>
        </li>
      </ul>
      <div className={styles.degree}>
        <img className={styles.logo} src="/assets/gist_logo.jpg" alt="gist" />
        <p className={styles.metadata}>
          <span>Undergraduate chemistry major</span>
          <span>2016 March - 2022 Feb</span>
        </p>
      </div>
    </section>
  );
});

export default About;
