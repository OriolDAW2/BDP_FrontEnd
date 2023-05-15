import React from "react";

import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Enlaces útiles</h4>
            <ul>
              <li><a href="#">Canciones</a></li>
              <li><a href="#">Artistas</a></li>
              <li><a href="#">Playlists</a></li>
              <li><a href="#">Eventos</a></li>
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
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
