import React, { useState } from "react";
import "./css/SettingMenu.css";

function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="settings-container">
      <button className="settings-button" onClick={toggleMenu}>
        <i className="fas fa-cog"></i>
      </button>
      {isOpen && (
        <ul className="settings-menu">
          <li className="settings-menu-item">Perfil</li>
          <li className="settings-menu-item">Preferencias</li>
          <li className="settings-menu-item">Cuenta</li>
          <li className="settings-menu-item">Cerrar sesión</li>
        </ul>
      )}
    </div>
  );
}

export default SettingsMenu;
