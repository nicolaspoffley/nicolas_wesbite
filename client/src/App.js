import React from "react";
import styles from './App.module.css';
import { Content } from "./Components/Content/Content";
import Aos from "aos";
import "aos/dist/aos.css";
import TreeComponent from "./Components/Tree/TreeComponent";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import DatabaseExample from "./Components/DatabaseExample/DatabaseExample";
import { Navbar } from "./Components/Navbar/Navbar";

export default function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div id="top" className={`${styles.light} ${styles.app}`}>
        <section id="#home">
          <Navbar />
        </section>
        <main>
          <Content />
          <div>
          </div>
        </main>
      </div>
      <section id="EP-AIP-PAP">
        <TreeComponent />
      </section>
      <ScrollToTop />
      <DatabaseExample />
    </div>
  );
}
