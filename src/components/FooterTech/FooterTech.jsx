import './footer-tech.css';
import htmlLogo from '../../assets/img/html.png';
import cssLogo from '../../assets/img/css-3.png';
import bootstrapLogo from '../../assets/img/Bootstrap_logo.svg.png';
import trelloIcon from '../../assets/img/trello_icon_146085.png';
import gitIcon from '../../assets/img/git.png';
import githubIcon from '../../assets/img/github.png';
import jsIcon from '../../assets/img/js.png';

const Tecnologias = () => {
  return (
    <div className="tecnologias">
      <h3>Tecnologías</h3>
      <div className="todas-tarjetas">
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
      </div>
    </div>
  );
};

export default Tecnologias;
