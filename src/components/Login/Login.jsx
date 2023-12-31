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
                    <Anchor to="/iniciosesion" className="anchor" onClick={handleInicio}>
                        <button className="login-text">
                            Iniciar sesión
                        </button>
                    </Anchor>
                    <Anchor to="/registro" className="anchor">
                        <button className="login-text">
                            Regístrate
                        </button>
                    </Anchor>
                </>
            )}
        </div>
    );
}

export default Login;