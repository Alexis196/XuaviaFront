import './log-out.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const LogOut = ({ onUpdateUser }) => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        const localUser = JSON.parse(localStorage.getItem('user'));

        const headers = {
            'Authorization': `Bearer ${localUser.token}`
        };
        axios.post('https://xuavia.onrender.com/users/signout', "", { headers })
            .then((response) => {
                localStorage.removeItem('user');
                onUpdateUser();
                toast.success('Esperamos que pronto estés de vuelta', {
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
                    navigate('/');
                }, 1500)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <button className='btn-logout' onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default LogOut;
