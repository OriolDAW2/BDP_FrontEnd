import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

import "./css/style.css";


function Menu() {
  return (
    <nav>
      <div className="logo">
        <a href="#"><img src="/img/logo.png" /></a>
      </div>
      <ul className="menu">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Canciones</a>
        </li>
        <li>
          <a href="#">PlayList</a>
        </li>
        <li>
          <a href="#">Artistas</a>
        </li>
        <li>
          <a href="#">Eventos</a>
        </li>
        <li>
          <a href="#">Favoritos</a>
        </li>
      </ul>
      <div className="config">
        <a href=""><FontAwesomeIcon icon={faGear} className="icon"/></a>
      </div>
    </nav>
    
    
  );
}

export default Menu;
