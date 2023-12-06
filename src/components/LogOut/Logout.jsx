import './log-out.css';
import axios from 'axios';
import { useState } from 'react';

const LogOut = ({ onUpdateUser }) => {
    const handleLogout = (e) => {
        const localUser = JSON.parse(localStorage.getItem('user'));

        const headers = {
            'Authorization': `Bearer ${localUser.token}`
        };
        axios.post('http://localhost:8080/users/signout', "", { headers })
            .then((response) => {
                localStorage.removeItem('user');
                onUpdateUser(); // Llamar a la función prop proporcionada por el componente padre
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
