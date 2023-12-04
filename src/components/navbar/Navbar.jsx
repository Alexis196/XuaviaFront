import './navbar.css'
import {Link as Anchor} from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import user from '../../assets/img/icon-user.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid navbar-container">
                <div className='div-logo'>
                    <Anchor to={'/'}><img className='logo' src={logo} alt="logo" /></Anchor>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Anchor className="nav-link" to={'/'} style={{ color: 'white' }}>Inicio</Anchor>
                        </li>
                        <li className="nav-item" id="nav1">
                            <Anchor className="nav-link" to={'/servicios'} style={{ color: 'white' }}>Mascotas</Anchor>
                        </li>
                        <li className="nav-item" id="nav2">
                            <Anchor className="nav-link" to={'/nosotros'} style={{ color: 'white' }}>Nosotros</Anchor>
                        </li>
                    </ul>
                    <img className='icon-user' src={user} alt="icon-user" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
