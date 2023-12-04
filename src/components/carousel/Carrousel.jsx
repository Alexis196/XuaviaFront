import './carousel.css'; 
import gatoImage from '../../assets/img/gato.jpg';
import carrusel1Image from '../../assets/img/carrusel1.png';
import carrusel2Image from '../../assets/img/carrusel2.jpg';
import carrusel3Image from '../../assets/img/carrusel3.png';

const Carousel = () => {
  return (
    <section id="carouselExample" className="carousel slide">
      <h1 className="title-xuavia">XUAVIA</h1>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={gatoImage} className="img" alt="persona-mascota" />
        </div>
        <div className="carousel-item active">
          <img src={carrusel1Image} className="img" alt="persona-mascota" />
        </div>
        <div className="carousel-item">
          <img src={carrusel2Image} className="img" alt="persona-mascota" />
        </div>
        <div className="carousel-item">
          <img src={carrusel3Image} className="img" alt="persona-mascota" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon prev" aria-hidden="false"></span>
        <span className="visually-hidden prev">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon next" aria-hidden="false"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Carousel;
