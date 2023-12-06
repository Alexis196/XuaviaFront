import './login.css'
import { useState } from 'react'
// import Register from '../Register/Register'
import ModalLogin from '../../pages/ModalLogin/ModalLogin'
import { Link as Anchor } from 'react-router-dom'

function Login() {
    const [showModalLogin, setShowModalLogin] = useState(false)

    function handleInicio() {
        setShowModalLogin(!showModalLogin)
    }
    function handleRegistro() {
        console.log('registro')
    }

    return (
        <div className="login bg-dark">
            <Anchor to='/login' className='login-text'>Iniciar sesión</Anchor>
            {showModalLogin && <ModalLogin closeModal={handleInicio} />}
            <Anchor onClick={handleRegistro} className='login-text'>Registrate</Anchor>
        </div>
    )
}

export default Login