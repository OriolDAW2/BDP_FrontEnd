import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import "./css/style.css";

import Logout from "./Logout";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <a href="#">
          <img src="/img/logo.png" alt="Logo" />
        </a>
      </div>
      <ul className="menu">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Canciones</a>
        </li>
        <li>
          <a href="#">Artistas</a>
        </li>
        <li>
          <a href="#">Playlists</a>
        </li>
        <li>
          <a href="#">Eventos</a>
        </li>
      </ul>
      <div className="setting-menu">
        <button className="setting-menu-btn" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faCog} className="icon" />
        </button>
        {isMenuOpen && (
          <ul className="setting-menu-dropdown">
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#">Soporte Tecnico</a>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Menu;
