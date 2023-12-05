import React, { useState, useEffect } from 'react';
import './mascoters.css';
import axios from 'axios';
import { Link as Anchor } from 'react-router-dom';

const Mascoters = () => {
  const [servicios, setServicios] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:8080/services';

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
      <div className="seccion-mascoter">
        {Array.isArray(servicios) && servicios.length > 0 ? (
          servicios.map((servicio) => (
            <div key={servicio._id} className="card-user">
              <div className="info-user">
                <img className="foto-perfil" src={servicio.imagen} alt="foto-perfil" />
                <Anchor to='/' className="header">
                  {servicio.name}
                </Anchor>
              </div>
              <div className="precio">
                <p>{`Precio: ${servicio.price}`}</p>
              </div>
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
