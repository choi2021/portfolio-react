import React, { useEffect, useRef } from "react";
import styles from "./home.module.css";
const Home = ({ onClick, getRef }) => {
  const homeRef = useRef();
  useEffect(() => {
    getRef(homeRef, "home");
  }, []);
  return (
    <section className={styles.container} data-section="home" ref={homeRef}>
      <img
        className={styles.profile}
        src="./assets/profile.jpg"
        alt="profile"
      />
      <h1 className={styles.message}>
        안녕하세요<br></br> 매일 성장하는 개발자 <br></br> 최영준입니다.
      </h1>
      <button className={styles.btn} onClick={onClick}>
        Contact me
      </button>
    </section>
  );
};

export default Home;
