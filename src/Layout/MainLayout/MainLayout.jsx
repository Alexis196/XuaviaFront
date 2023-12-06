import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function MainLayout(props) {
  return (
    <div className='MainLayout'>
        <NavBar className="navBar"/>
        <Outlet className="main"/>
        <Footer className="footer"/>
    </div>
  )
}