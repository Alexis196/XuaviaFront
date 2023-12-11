import './footer-tech.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Tecnologias = () => {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    const url = 'https://xuavia.onrender.com/technologies';
    axios.get(url)
      .then((response) => {
        const tecnologias = response.data.technologies;
        setTecnologias(tecnologias);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, [])

  return (
    <div className="tecnologias">
      <h3>Tecnologías</h3>
      <div className="todas-tarjetas">
        {tecnologias.map((tecnologia) => (
          <div className="tarjeta-tec" key={tecnologia._id}>
            <img src={tecnologia.image} alt={tecnologia.name} />
            <p>{tecnologia.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
