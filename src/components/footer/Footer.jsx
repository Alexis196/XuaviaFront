import './footer.css'
import EquipoFooter from '../equipo-footer/EquipoFooter'
import ContactFooterForm from '../ContactFooterForm/ContactFooterForm'
import FooterTech from '../FooterTech/FooterTech'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <EquipoFooter />
      <FooterTech />
      <ContactFooterForm />
    </footer>
  )
}

export default Footer