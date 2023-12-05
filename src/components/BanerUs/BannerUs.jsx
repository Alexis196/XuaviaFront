import bannerImage from '../../assets/img/carrusel4.jpg';
import './banner-us.css'; 

const BannerUs = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={bannerImage} alt="perrito-banner" style={{ width: '100%', height: '100%' }} />
      <h1 className="title-nosotros">Nosotros</h1>
    </div>
  );
};

export default BannerUs;
