import './team-footer.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import linkedinLogo from '../../assets/img/linkedIn_logo.png';

const TeamFooter = () => {
  const [integrantes, setIntegrantes] = useState([]);


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
  }, [])

  return (
    <div className="equipo">
      <h3>Desarrolladores de este equipo</h3>
      {integrantes.map((integrante) => (
        <div className="integrante" key={integrante._id}>
          <img className="foto-integrante" src={integrante.foto} alt={integrante.nombre} />
          <span>⭐{integrante.nombre} 🐶</span>
          <a href={integrante.linkedin} target="_blank">
            <img className="linkedin" src={linkedinLogo} alt="linkedin_logo" />
          </a>
        </div>))}
    </div>
  );
};

export default TeamFooter;
