import React from 'react';
import { Link } from 'react-router-dom';

import './css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
        <video className="landing-page-video" autoPlay loop muted>
            <source src="/img/landing.mp4" type="video/mp4" />
        </video>
        <div className="landing-page-content">
            <h1 className="landing-page-title">Bienvenido a la App de Batalla de Promesas</h1>
            <p className="landing-page-text">Descubre la mejor música y los artistas más populares en nuestra aplicación. ¡Únete ahora!</p>
            <Link to={"/login"} className="landing-page-button">Únete ahora</Link>
        </div>
    </div>

  );
};

export default LandingPage;
