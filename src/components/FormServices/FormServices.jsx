import React from 'react'

const FormServices = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('hola')   
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
              
              required
            />
            <label>name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="mail"
              
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              
              required
            />
            <label>Password</label>
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
  )
}

export default FormServices