import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link as Anchor } from 'react-router-dom';
import axios from 'axios';
import '../ModalLogin/modal-login.css';
import './register.css'
import { toast } from 'react-toastify';

function Register() {
  const [newRol, setNewRol] = useState([]);
  const name = useRef();
  const mail = useRef();
  const password = useRef();
  const rol = useRef();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get('https://xuavia.onrender.com/roles')
      .then((response) => {
        setNewRol(response.data.rol);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: name.current.value,
      mail: mail.current.value,
      password: password.current.value,
      rol: rol.current.value
    };
    try{
      axios.post('https://xuavia.onrender.com/users', user);
      toast.success(`Bienvenido ${user.name}. Por favor inicia sesión`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
      setTimeout(() => {
        navigate('/iniciosesion')
      }, 1000)
    }
    catch (err){
      toast.error(`Ocurrió un error al intentar registrarte ${err.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
      console.log(err)
    }
    }

  return (
    <div className="register-box" id="">
      <div className='login-box reg-box'>
        <h2>Registrate</h2>
        <form id="form-login" className="form-login" onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              ref={name}
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
          <div className="user-box">
            <input
              type="password"
              name="password"
              ref={password}
              required
            />
            <label>Contraseña</label>
          </div>
          <div className="select">
            <label>Rol:</label>
            <select name="rol" ref={rol} required>
              {newRol.map( rol => {
                return <option key={rol._id} value={rol._id}>{rol.rol}</option>
              })}
            </select>
          </div>
          <div className="register">
            <span>¿Tiene una cuenta?</span>
            <Anchor to='/iniciosesion' className="btn-register">
              Iniciar sesión
            </Anchor>
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
