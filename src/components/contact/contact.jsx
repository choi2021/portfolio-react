import React, { memo, useEffect, useRef } from "react";
import styles from "./contact.module.css";
import { FaGithub } from "react-icons/fa";

const Contact = memo(({ getRef }) => {
  const contactRef = useRef();

  useEffect(() => {
    getRef(contactRef, "contact");
  }, []);

  return (
    <section
      className={styles.container}
      ref={contactRef}
      data-section="contact"
    >
      <h1 className={styles.title}>Let's Talk</h1>
      <h3 className={styles.email}>juni2004c@gmail.com</h3>
      <a href="#" className={styles.btn}>
        <FaGithub></FaGithub>
      </a>
      <p className={styles.right}>2022 Youngjun Choi - All rihgts reserved</p>
    </section>
  );
});

export default Contact;
