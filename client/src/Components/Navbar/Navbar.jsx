import React from "react";
import "./Navbar.css";

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
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#timeline"
              onClick={() => toggleNavList("#timeline")}
              className="link link--nav"
            >
              Timeline
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#EP-AIP-PAP"
              onClick={() => toggleNavList("#EP-AIP-PAP")}
              className="link link--nav"
            >
              EP-AIP-PAP
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
