import './Services.css'
import Mascoters from '../../components/Mascoters/Mascoters'
import ButtonAdd from '../../assets/img/buttonadd.png'
import { Link as Anchor } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <Anchor to='./nuevoservicio' className='button-add'>
        <img src={ButtonAdd} alt="button-add" />
      </Anchor>
      <Mascoters />
    </div>
  )
}

export default Services