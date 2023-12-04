import './footer.css'
import TeamFooter from '../team-footer/TeamFooter'
import ContactFooterForm from '../ContactFooterForm/ContactFooterForm'
import FooterTech from '../FooterTech/FooterTech'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <TeamFooter />
      <FooterTech />
      <ContactFooterForm />
    </footer>
  )
}

export default Footer