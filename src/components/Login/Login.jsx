import './login.css';
import { useState, useEffect } from 'react';
import ModalLogin from '../../pages/ModalLogin/ModalLogin';
import { Link as Anchor } from 'react-router-dom';
import LogOut from '../LogOut/Logout';

function Login() {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [userLS, setUserLS] = useState({});

    useEffect(() => {
        const userStorage = localStorage.getItem('user');
        setUserLS(JSON.parse(userStorage));
    }, [])

    function handleInicio() {
        setShowModalLogin(true);
    }

    function handleUserUpdate() {
        const updatedUser = JSON.parse(localStorage.getItem('user'));
        setUserLS(updatedUser);
        setShowModalLogin(false);
    }

    return (
        <div className="login bg-dark">
            {userLS ? (
                <LogOut onUpdateUser={handleUserUpdate} />
            ) : (
                <>
                    <Anchor to="/iniciosesion" className="login-text" onClick={handleInicio}>
                        Iniciar sesión
                    </Anchor>
                    <Anchor to="/registro" className="login-text">
                        Regístrate
                    </Anchor>
                </>
            )}
        </div>
    );
}

export default Login;