import './log-out.css';
import axios from 'axios';
import { useState } from 'react';
import {toast} from 'react-toastify';

const LogOut = ({ onUpdateUser }) => {
    const handleLogout = (e) => {
        const localUser = JSON.parse(localStorage.getItem('user'));

        const headers = {
            'Authorization': `Bearer ${localUser.token}`
        };
        axios.post('http://localhost:8080/users/signout', "", { headers })
            .then((response) => {
                localStorage.removeItem('user');
                onUpdateUser();
                toast.success('Esperamos que pronto estés devuelta', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default LogOut;
