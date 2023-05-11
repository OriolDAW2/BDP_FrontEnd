import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useLogin } from '../hooks/useLogin';
import { UserContext } from '../usercontext';


import './css/login.css';

const Login = ({ setLogin }) => {
  
  let [ error, setError] = useState("");
   
  let {authToken, setAuthToken } = useContext(UserContext);

  const { formState, onInputChange } = useForm({
    username: "",
    password: "",
    });
    const {username, password} = formState;

    const {doLogin} = useLogin();

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <div className="login-input-container">
          <label htmlFor="username" className="login-label">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            className="login-input"
            onChange={onInputChange} 
            value={username} 
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="password" className="login-label">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="login-input"
            onChange={onInputChange} 
            value={password}
          />
          {/* <div className="login-remember-container">
            <input
              type="checkbox"
              id="rememberMe"
              className="login-checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe" className="login-remember-label">Remember Me</label>
          </div> */}
        </div>
        <button type="submit" className="login-button" onClick={ () => { doLogin(formState) }}>Login</button>
      </div>
      <p className="login-register-text">¿No tienes una cuenta? <a onClick={ ()=> setLogin(false) }>Regístrate aquí</a></p>
    </div>
  );
};

export default Login;

