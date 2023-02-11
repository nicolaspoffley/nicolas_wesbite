import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiCypress, SiMicrosoftsqlserver, SiPowerbi, SiLua, SiDocker, SiKubernetes, SiGooglecloud, SiAcademia, SiPython, SiJava } from "react-icons/si";
import styles from './Technologies.module.css'
import {
  SiHtml5,
  SiMaterialui,
  SiExpress,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Technologies = () => {
  return (
    <>
      <div className={`${styles.section} ${styles.main}`}>
        <h2 className={`${styles.sectionTitle}`} data-aos="fade-left">
          I have experience with...
        </h2>
        <div className={`${styles.techSection}`}>
          <div data-aos="fade-center">
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div data-aos="fade-center">
            <FaReact />
            <h5>React</h5>
          </div>
          <div data-aos="fade-center">
            <FaNodeJs />
            <h5>NodeJS</h5>
          </div>
          <div data-aos="fade-center">
            <SiExpress />
            <h5>ExpressJS</h5>
          </div>
          <div data-aos="fade-center">
            <SiPython />
            <h5>Python</h5>
          </div>
          <div data-aos="fade-center">
            <SiJava />
            <h5>Java</h5>
          </div>
          <div data-aos="fade-center">
            <SiPowerbi />
            <h5>Power BI</h5>
          </div>
          <div data-aos="fade-center">
            <SiMicrosoftsqlserver />
            <h5>SQL Server</h5>
          </div>
          <div data-aos="fade-center">
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div data-aos="fade-center">
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div data-aos="fade-center">
            <SiLua />
            <h5>Lua</h5>
          </div>
          <div data-aos="fade-center">
            <SiMaterialui />
            <h5>Material UI</h5>
          </div>
          <div data-aos="fade-center">
            <SiDocker />
            <h5>Docker</h5>
          </div>
          <div data-aos="fade-center">
            <VscGithub />
            <h5>Git</h5>
          </div>
          <div data-aos="fade-center">
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
          <div data-aos="fade-center">
            <SiGooglecloud />
            <h5>GCP</h5>
          </div>
          <div data-aos="fade-center">
            <SiAcademia />
            <h5>AnyLogic Simulation</h5>
          </div>
          <div data-aos="fade-center">
            <SiCypress />
            <h5>Cypress</h5>
          </div>
        </div>
      </div>
    </>
  );
};
