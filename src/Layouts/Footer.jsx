import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Enlaces útiles</h4>
            <ul>
              <li>
                <Link to="/about">
                  <a>Sobre Nosotros</a>
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  <a>Terminos y Condiciones</a>
                </Link>
              </li>
              <li>
                <Link to="/support">
                  <a>Soporte Tecnico</a>
                </Link>  
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contacto</h4>
            <ul>
              <li>Teléfono: +123456789</li>
              <li>Email: info@empresa.com</li>
              <li>Dirección: Calle Principal, Ciudad</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Síguenos en redes sociales</h4>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-footer">
          <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
