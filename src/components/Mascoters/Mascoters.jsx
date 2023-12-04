import React from 'react';
import './mascoters.css';

const servicios = [
  {
    id: 1,
    nombre: 'Nombre Mascoter 1',
    descripcion: 'Pellentesque habitant morbi tristique...',
    imagen: './img/usuario.png',
  },
  {
    id: 2,
    nombre: 'Nombre Mascoter 2',
    descripcion: 'Pellentesque habitant morbi tristique...',
    imagen: './img/usuario.png',
  },{
    id: 1,
    nombre: 'Nombre Mascoter 1',
    descripcion: 'Pellentesque habitant morbi tristique...',
    imagen: './img/usuario.png',
  },
  {
    id: 2,
    nombre: 'Nombre Mascoter 2',
    descripcion: 'Pellentesque habitant morbi tristique...',
    imagen: './img/usuario.png',
  },{
    id: 1,
    nombre: 'Nombre Mascoter 1',
    descripcion: 'Pellentesque habitant morbi tristique...',
    imagen: './img/usuario.png',
  },
  {
    id: 2,
    nombre: 'Nombre Mascoter 2',
    descripcion: 'Pellentesque habitant morbi tristique...',
    imagen: './img/usuario.png',
  },
  // Agrega más objetos según sea necesario
];

const Mascoters = () => {
  return (
    <section className="mascoter">
      <div className="seccion-mascoter">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="card-user">
            <div className="info-user">
              <img className="foto-perfil" src={servicio.imagen} alt="foto-perfil" />
              <a href="#" className="header">
                {servicio.nombre}
              </a>
            </div>
            <div className="enunciado">
              <p>{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mascoters;
