import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailServices.css';

const DetailServices = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://xuavia.onrender.com/services/${id}`;

        axios.get(url)
            .then((response) => {
                const servicio = response.data.service;
                setService(servicio);
            })
            .catch((error) => {
                console.error('Error fetching service details:', error);
            });
    }, [id]);

    return (
        <div className='detail bg-secondary'>
            <div className='detail-service'>
                <div>
                    <img src={service.image} alt={service.name} />
                    <h2>{service.name}</h2>
                </div>
                <div>
                    <h3>Descripción del servicio:</h3>
                    <p>{service.detail}</p>
                    <p>Precio: ${service.price}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailServices;
