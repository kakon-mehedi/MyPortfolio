import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <div className="navbar-section">
      <h3 className="logo">KakonMehedi</h3>
      <Menu className="menu-icon" onClick={handleMenuClick} />

      <ul className={menuClicked ? "navbar-list active" : "navbar-list"}>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>

        <li className="nav-item">
          <a href="#skill">Skill</a>
        </li>

        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>

        <li className="nav-item">
          <a href="#education">Achievements</a>
        </li>

        <li className="nav-item contact-mobile">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a href="#contact" className="contact-link">
        Contact
      </a>
    </div>
  );
}

export default Navbar;
