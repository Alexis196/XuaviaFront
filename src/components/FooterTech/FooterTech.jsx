import './footer-tech.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Tecnologias = () => {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:8080/technologies';
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
      {/* <div className="todas-tarjetas">
        <div className="tarjeta-tec">
          <img src={htmlLogo} alt="logo-html" />
          <p>HTML</p>
        </div>
        <div className="tarjeta-tec">
          <img src={cssLogo} alt="logo-css" />
          <p>CSS</p>
        </div>
        <div className="tarjeta-tec">
          <img src={bootstrapLogo} alt="Bootstrap_logo" />
          <p>Bootstrap</p>
        </div>
        <div className="tarjeta-tec">
          <img src={trelloIcon} alt="trello_icon" />
          <p>Trello</p>
        </div>
        <div className="tarjeta-tec">
          <img src={gitIcon} alt="git_icon" />
          <p>Git</p>
        </div>
        <div className="tarjeta-tec">
          <img src={githubIcon} alt="github_icon" />
          <p>Github</p>
        </div>
        <div className="tarjeta-tec">
          <img src={jsIcon} alt="JavaScript_icon" />
          <p>JavaScript</p>
        </div>
      </div> */}
    </div>
  );
};

export default Tecnologias;
