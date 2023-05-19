import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useRegister } from '../hooks/useRegister';

import "./css/register.css"
import { UserContext } from '../usercontext';

const Register = ({ setLogin }) => {
  let { authToken, setAuthToken} = useContext(UserContext);
  let [ error, setError] = useState("");

  const { formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });
        
  const { username, email, password} = formState

  // if (password !== password2 ) {
  //   alert("Els passwords han de coincidir");
  // }

  const {doRegister} = useRegister();

  return (
      <div className="container">
        <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form className="register-form">
          <div className="register-input-container">
            <label htmlFor="username" className="register-label">Username</label>
            <input
              name="username"
              type="text"
              id="username"
              className="register-input"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="email" className="register-label">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              className="register-input"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="password" className="register-label">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              className="register-input"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="confirm-password" className="register-label">Confirm Password</label>
            <input
              name="password2"
              type="password"
              id="confirm-password"
              className="register-input"
            />
          </div>
          <button type="submit" className="register-button" onClick={ () => { doRegister(formState) }}>Register</button>
        </form>
        <p className="register-login-text">¿Ya tienes una cuenta? <a onClick={ ()=> setLogin(true) }>Inicia sesión aquí</a></p>
      </div>
    </div>
  );
};

export default Register;
