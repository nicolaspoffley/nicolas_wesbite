import React from "react";
import "./Content.css";
import { Timeline } from "../Timeline/Timeline";
import { Technologies } from "../Technologies/Technologies";
export const Content = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-center">
          Nicolas - <span className="about__name">React Demo</span>
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
