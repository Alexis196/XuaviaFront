import './navbar.css'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid navbar-container">
                <div className='div-logo'>
                    <a href="#"><img className='logo' src={logo} alt="logo" /></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html" style={{ color: 'white' }}>Inicio</a>
                        </li>
                        <li className="nav-item" id="nav1">
                            <a className="nav-link" href="./assets/html/mascoters.html" style={{ color: 'white' }}>Mascotas</a>
                        </li>
                        <li className="nav-item" id="nav2">
                            <a className="nav-link" href="./assets/html/nosotros.html" style={{ color: 'white' }}>Nosotros</a>
                        </li>
                    </ul>
                    <button className="btn-login" id="login" style={{ color: 'white' }}>Iniciar sesión</button>
                    <button className="no-logout" id="logout" style={{ color: 'white' }}>Cerrar sesión</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
