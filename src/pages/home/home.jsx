import React from "react";
import Navbar from "../../components/navbar/navbar";
import styles from "./home.module.css";
const Home = (props) => {
  return (
    <section className={styles.container}>
      <Navbar />
      <img
        className={styles.profile}
        src="./assets/profile.jpg"
        alt="profile"
      />
      <h1 className={styles.message}>
        안녕하세요 <br></br> 부족한 것을 찾아가는 개발자<br></br> 최영준입니다.
      </h1>
      <button className={styles.btn}>Contact me</button>
    </section>
  );
};

export default Home;
