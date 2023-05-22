import React from 'react';

import './css/support.css';

import image1 from '/img/event.jpg';

function AboutUs() {
  return (
    <div className="container">
      <h1 className="title">Sobre Nosotros</h1>
      <div className="content">
        <div className="text">
          <p className="paragraph">
            En "Nuestra Empresa" nos apasiona promover la música y brindar una plataforma donde artistas emergentes puedan mostrar su talento. Nos enorgullece presentar la "Batalla de Promesas", un evento único que reúne a los artistas más prometedores de la industria musical.
          </p>

          <p className="paragraph">
            La Batalla de Promesas es una competencia en la que los artistas tienen la oportunidad de demostrar su creatividad, originalidad y habilidades interpretativas. Durante el evento, los participantes se enfrentan en un emocionante escenario, compartiendo sus canciones y cautivando al público con su talento.
          </p>

          <p className="paragraph">
            Nuestro objetivo principal es brindar una plataforma inclusiva y justa para todos los artistas que deseen participar. Valoramos la diversidad y celebramos las distintas voces y estilos musicales. Creemos que todos merecen una oportunidad de brillar y hacerse escuchar.
          </p>

          <p className="paragraph">
            La Batalla de Promesas no solo es un evento de competencia, sino también un espacio de aprendizaje y crecimiento. Ofrecemos talleres y asesoramiento personalizado para ayudar a los artistas a desarrollar sus habilidades y fortalecer su carrera musical. Nuestro compromiso es apoyarlos en cada paso de su camino.
          </p>

          <p className="paragraph">
            Únete a nosotros en esta emocionante aventura musical. ¡Descubre nuevos talentos, disfruta de la música y sé parte de la Batalla de Promesas!
          </p>
        </div>
        <div className="images">
          <img src={image1} alt="Image 1" className="image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
