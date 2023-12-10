import React, { useState, useEffect } from 'react';
import './mascoters.css';
import axios from 'axios';
import { Link as Anchor } from 'react-router-dom';

const Mascoters = () => {
  const [servicios, setServicios] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = 'https://xuavia.onrender.com/services';

    axios.get(url)
      .then((response) => {
        const servicios = response.data.services;
        setServicios(servicios)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section className="mascoter">
      <div className="servicios-cards">
        {Array.isArray(servicios) && servicios.length > 0 ? (
          servicios.map((servicio) => (
            <div key={servicio._id} className="card-service">
              <Anchor to={`/servicios/${servicio._id}`} className="anchor-tarjet">
                <div>
                  <img className="foto-perfil" src={servicio?.image} alt={servicio.name} />
                </div>
                <div className="precio">
                  <h2>{servicio.name}</h2>
                  <p>{`Precio: ${servicio.price}`}</p>
                </div>
              </Anchor>
            </div>
          ))
        ) : (
          <p>No hay servicios disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default Mascoters;
