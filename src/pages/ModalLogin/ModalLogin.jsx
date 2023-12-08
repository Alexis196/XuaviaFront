import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link as Anchor } from 'react-router-dom';
import axios from 'axios';
import './modal-login.css';

const ModalLogin = () => {
  const [user, setUser] = useState({});
  const mail = useRef();
  const password = useRef();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData ={
        mail: mail.current.value,
        password: password.current.value
      }
      const response = await axios.post('http://localhost:8080/users/signin', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
      event.target.reset();

      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
  useEffect(()=>{
     const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) {
      setUser(localUser);
    }
  },[])


  return (
    <div className="show-modal" id="login-modal">
      <div className="login-box">
        <h2>Login</h2>
        <form id="form-login" className="form-login" onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="email"
              name="mail"
              ref={mail}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              ref={password}
              required
            />
            <label>Contraseña</label>
          </div>
          <div className="register">
            <span>¿No tienes una cuenta?</span>
            <Anchor to='/registro' className="btn-register">
              Regístrate
            </Anchor>
          </div>
          <button className="btn-login btn-login2" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
