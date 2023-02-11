import React from "react";
import styles from "./Content.module.css";
import { Timeline } from "../Timeline/Timeline";
import { Technologies } from "../Technologies/Technologies";
export const Content = () => {
  return (
    <>
      <div className={`${styles.about} ${styles.center}`}>
        <h1 data-aos="fade-center">
          Nicolas - <span className={styles.aboutName}>React Demo</span>
        </h1>
      </div>
      <section id="skills">
        <Technologies />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
    </>
  );
};
