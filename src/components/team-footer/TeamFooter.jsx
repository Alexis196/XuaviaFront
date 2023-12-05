import './team-footer.css';
import camilaDelValle from '../../assets/img/Camila del Valle.jpg';
import giovannaOrsi from '../../assets/img/Giovanna Antonella Orsi.jpeg';
import agustinVidela from '../../assets/img/Agustin Videla.jpeg';
import exequielMartinez from '../../assets/img/Exequiel Martinez.jpeg';
import alexisFranco from '../../assets/img/Alexis Franco.png';
import linkedinLogo from '../../assets/img/LinkedIn_logo.png';

const TeamFooter = () => {
  return (
    <div className="equipo">
      <h3>Desarrolladores de este equipo</h3>
      <div className="integrante">
        <img className="foto-integrante" src={camilaDelValle} alt="foto-perfil" />
        <span>⭐Camila Del Valle 🐶</span>
        <a href="https://www.linkedin.com/in/camila-del-valle-94669b265/" target="_blank">
          <img className="linkedin" src={linkedinLogo} alt="linkedin_logo" />
        </a>
      </div>
      <div className="integrante">
        <img className="foto-integrante" src={giovannaOrsi} alt="foto-perfil" />
        <span>💫Antonella Orsi 🦁</span>
        <a href="https://www.linkedin.com/in/orsigiovanna/" target="_blank">
          <img className="linkedin" src={linkedinLogo} alt="linkedin_logo" />
        </a>
      </div>
      <div className="integrante">
        <img className="foto-integrante" src={agustinVidela} alt="foto-perfil" />
        <span>✨Agustin Videla 🐹</span>
        <a href="https://www.linkedin.com/in/agustin-videla-959607232/" target="_blank">
          <img className="linkedin" src={linkedinLogo} alt="linkedin_logo" />
        </a>
      </div>
      <div className="integrante">
        <img className="foto-integrante" src={exequielMartinez} alt="foto-perfil" />
        <span>🌟Exequiel Martinez 🐱</span>
        <a href="https://www.linkedin.com/in/cristian-exequiel-martinez-b327a4154/" target="_blank">
          <img className="linkedin" src={linkedinLogo} alt="linkedin_logo" />
        </a>
      </div>
      <div className="integrante">
        <img className="foto-integrante" src={alexisFranco} alt="foto-perfil" />
        <span>✨Alexis Franco 🐼</span>
        <a href="https://www.linkedin.com/in/alexis-franco196/" target="_blank">
          <img className="linkedin" src={linkedinLogo} alt="linkedin_logo" />
        </a>
      </div>
    </div>
  );
};

export default TeamFooter;
