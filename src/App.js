import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { Content } from "./Components/Content/Content";
import Aos from "aos";
import "aos/dist/aos.css";
import TreeComponent from "./Components/Tree/TreeComponent";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";

export default function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div id="top" className='light app'>
        <section id="#home">
          <Header />
        </section>
        <main>
          <Content />
          <div>
          </div>
        </main>
      </div>
      <div style={{ paddingBottom: '100px' }}></div>
      <section id="EP-AIP-PAP">
        <TreeComponent />
      </section>
      <ScrollToTop />
      <div style={{ paddingBottom: '500px' }}></div>
    </div>
  );
}
