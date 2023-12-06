// Register.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../ModalLogin/modal-login.css';
import './register.css'

function Register() {
  const nombre = useRef();
  const mail = useRef();
  const password = useRef();
  const rol = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('hola');
  }

  return (
    <div className="register-box" id="">
      <div className='login-box reg-box'>
        <h2>Registrate</h2>
        <form id="form-login" className="form-login" onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="nombre"
              ref={nombre}
              required
            />
            <label>Nombre</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="mail"
              ref={mail}
              required
            />
            <label>Email</label>
          </div>
          <div className="select">
            <label>Rol:</label>
            <select name="rol" ref={rol} required>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
            </select>
          </div>
          <div className="register">
            <span>¿No tienes una cuenta?</span>
            <a className="btn-register" href="#register">
              Regístrate
            </a>
          </div>
          <button className="btn-login btn-login2" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
