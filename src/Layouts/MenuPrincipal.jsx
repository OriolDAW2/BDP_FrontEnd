import React, { useContext, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../usercontext";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./css/style.css";

import Logout from "./Logout";

function Menu({ handleMenuClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { username, email, setUser, authToken, setAuthToken } = useContext(UserContext);

  const user = localStorage.getItem("username");
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setMenuOpen(false); // Cerrar el menú cuando cambie de página
  }, [location]);

  const handleSectionClick = (section) => {
    handleMenuClick(section);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <img src="/img/logo.png" alt="Logo" />
        </a>
      </div>
      <ul className="menu">
        <li>
          <ScrollLink
            to="inicio"
            spy={true}
            smooth={true}
            offset={-100} // Ajusta este valor para el desplazamiento correcto
            duration={500}
            onClick={() => handleSectionClick("inicio")}
          >
            Inicio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="canciones"
            spy={true}
            smooth={true}
            offset={-100} // Ajusta este valor para el desplazamiento correcto
            duration={500}
            onClick={() => handleSectionClick("canciones")}
          >
            Canciones
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="artistas"
            spy={true}
            smooth={true}
            offset={-100} // Ajusta este valor para el desplazamiento correcto
            duration={500}
            onClick={() => handleSectionClick("artistas")}
          >
            Artistas
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="playlists"
            spy={true}
            smooth={true}
            offset={-100} // Ajusta este valor para el desplazamiento correcto
            duration={500}
            onClick={() => handleSectionClick("playlists")}
          >
            Playlists
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="eventos"
            spy={true}
            smooth={true}
            offset={-100} // Ajusta este valor para el desplazamiento correcto
            duration={500}
            onClick={() => handleSectionClick("eventos")}
          >
            Eventos
          </ScrollLink>
        </li>
      </ul>
      <div className="setting-menu">
        <button className="setting-menu-btn" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faCog} className="icon" />
        </button>
        {isMenuOpen && (
          <ul className="setting-menu-dropdown">
            <p className="user-left">{user}</p>
            <li>
              <Link to="/profile">
                <h4>Perfil</h4>
              </Link>
            </li>
            <li>
              <Link to="/support">
                <h4>Soporte Tecnico</h4>
              </Link>
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
