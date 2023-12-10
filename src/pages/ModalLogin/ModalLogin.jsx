import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link as Anchor } from 'react-router-dom';
import axios from 'axios';
import './modal-login.css';
import { toast } from 'react-toastify';

const ModalLogin = () => {
  const [user, setUser] = useState({});
  const mail = useRef();
  const password = useRef();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        mail: mail.current.value,
        password: password.current.value
      }
      const response = await axios.post('https://xuavia.onrender.com/users/signin', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
      event.target.reset();
      toast.success(`¡Bienvenido ${response.data.name}!`, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      toast.error(`Error al iniciar sesión`, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      console.error('Error al enviar el formulario:', error);
    }
  };
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) {
      setUser(localUser);
    }
  }, [])


  return (
    <div className="show-modal" id="login-modal">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
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
