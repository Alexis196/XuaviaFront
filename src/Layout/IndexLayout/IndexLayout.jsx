import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IndexLayout(props) {
    return (
        <div>
            <ToastContainer />
            <NavBar/>
            <Outlet/>
            <Footer />
        </div>
    )
}