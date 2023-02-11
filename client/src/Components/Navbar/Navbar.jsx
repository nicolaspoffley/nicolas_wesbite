import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <header className={`${styles.header} ${styles.center}`}>
      <nav className={`${styles.nav}`}>
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className={`${styles.navList}`}

        >
          <li className={`${styles.navListItem}`}>
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className={`${styles.link} ${styles.linkNav}`}
            >
              Home
            </a>
          </li>
          <li className={`${styles.navListItem}`}>
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className={`${styles.link} ${styles.linkNav}`}
            >
              Skills
            </a>
          </li>
          <li className={`${styles.navListItem}`}>
            <a
              href="#timeline"
              onClick={() => toggleNavList("#timeline")}
              className={`${styles.link} ${styles.linkNav}`}
            >
              Timeline
            </a>
          </li>
          <li className={`${styles.navListItem}`}>
            <a
              href="#EP-AIP-PAP"
              onClick={() => toggleNavList("#EP-AIP-PAP")}
              className={`${styles.link} ${styles.linkNav}`}
            >
              EP-AIP-PAP
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};