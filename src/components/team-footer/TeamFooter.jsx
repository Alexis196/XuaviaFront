import './team-footer.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TeamFooter = () => {
  const [integrantes, setIntegrantes] = useState([]);
  const [link, setLink] = useState([]);


  useEffect(() => {
    const url = 'https://xuavia.onrender.com/team';
    axios.get(url)
      .then((response) => {
        const integrantes = response.data.team;
        setIntegrantes(integrantes);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    
    const urlLink = 'https://xuavia.onrender.com/technologies';
    axios.get(urlLink)
      .then((response) => {
        const tecnologias = response.data.technologies;
        setLink(tecnologias[10]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

  }, [])

  return (
    <div className="equipo">
      <h3>Desarrolladores de este equipo</h3>
      {integrantes.map((integrante) => (
        <div className="integrante" key={integrante._id}>
          <img className="foto-integrante" src={integrante.foto} alt={integrante.nombre} />
          <span>⭐{integrante.nombre} 🐶</span>
          <a href={integrante.linkedin} target="_blank">
            <img className="linkedin" src={link.image} alt="link.name" />
          </a>
        </div>))}
    </div>
  );
};

export default TeamFooter;
