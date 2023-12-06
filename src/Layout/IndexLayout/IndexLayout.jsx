import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function IndexLayout(props) {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer />
        </div>
    )
}