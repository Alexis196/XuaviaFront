import './recommendations.css';
import persona1 from '../../assets/img/persona1.jpg';
import persona2 from '../../assets/img/persona2.jpg';
import persona3 from '../../assets/img/persona3.png';

const Recomendaciones = () => {
  return (
    <section className="section-recomendaciones">
      <h3>Algunos comentarios que recibimos por parte de nuestra comunidad</h3>
      <div id="card-reco"></div>
      <div className="cards-reco">
        <div className="card-user">
          <div className="info-user">
            <img className="foto-perfil" src={persona1} alt="foto-perfil" />
            <p>Camila Gonzalez</p>
          </div>
          <p className="recomendacion">"¡Este sitio web es un salvavidas para encontrar cuidadores de mascotas confiables! Encontré a un paseador de perros increíble en mi área en cuestión de minutos. ¡Muy recomendado!"</p>
        </div>
        <div className="card-user">
          <div className="info-user">
            <img className="foto-perfil" src={persona2} alt="foto-perfil" />
            <p>Agustín Gutiérrez</p>
          </div>
          <p className="recomendacion">"Nunca había sido tan fácil encontrar a alguien para cuidar a mi gato mientras estoy de viaje. El proceso de reserva es simple y efectivo. ¡Gracias por hacer que la búsqueda de cuidadores de mascotas sea tan sencilla!"</p>
        </div>
        <div className="card-user">
          <div className="info-user">
            <img className="foto-perfil" src={persona3} alt="foto-perfil" />
            <p>Franco Martinez</p>
          </div>
          <p className="recomendacion">"Como dueño de un gato exigente, encontrar a alguien que se preocupe por sus necesidades especiales era una prioridad. Gracias a este sitio, encontré a la persona perfecta que se encarga de mi gato con amor y profesionalismo."</p>
        </div>
      </div>
    </section>
  );
};

export default Recomendaciones;
