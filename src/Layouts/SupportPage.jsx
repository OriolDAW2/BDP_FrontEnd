import React from 'react';

import './css/support.css';

function SupportPage() {
  return (
    <div className="container">
      <h1 className="title">Soporte Técnico</h1>
      <p className="paragraph">Estamos aquí para ayudarte con cualquier problema o consulta que puedas tener. Nuestro equipo de soporte técnico altamente capacitado está listo para brindarte la mejor asistencia posible.</p>
      
      <h2 className="subtitle">Contáctanos</h2>
      <p className="paragraph">Puedes comunicarte con nosotros de las siguientes formas:</p>
      
      <ul className="contact-info">
        <li>
          <strong>Teléfono:</strong> +1 (123) 456-7890
        </li>
        <li>
          <strong>Correo Electrónico:</strong> support@example.com
        </li>
        <li>
          <strong>Chat en Vivo:</strong> Disponible en nuestro sitio web durante nuestro horario de atención al cliente (de lunes a viernes, de 9:00 a.m. a 5:00 p.m.).
        </li>
      </ul>
      
      <h2 className="subtitle">Recursos de Ayuda</h2>
      <p className="paragraph">Además de nuestro equipo de soporte técnico, también ofrecemos una variedad de recursos en línea para ayudarte a resolver problemas comunes y encontrar respuestas a tus preguntas. Puedes consultar los siguientes recursos:</p>
      
      <ul className="resources">
        <li>
          <strong>Base de Conocimientos:</strong> Nuestra extensa base de conocimientos contiene artículos y guías detalladas sobre el uso de nuestros productos y la solución de problemas comunes.
        </li>
        <li>
          <strong>Preguntas Frecuentes:</strong> Consulta nuestra sección de preguntas frecuentes para obtener respuestas a las preguntas más comunes que recibimos de nuestros clientes.
        </li>
        <li>
          <strong>Foro de la Comunidad:</strong> Únete a nuestra comunidad en línea para discutir y compartir ideas, consejos y soluciones con otros usuarios de nuestros productos.
        </li>
      </ul>
      
      <p className="paragraph">Esperamos poder brindarte el mejor servicio y solucionar cualquier problema que puedas tener lo más rápido posible. ¡Gracias por elegirnos!</p>
    </div>
  );
}

export default SupportPage;
