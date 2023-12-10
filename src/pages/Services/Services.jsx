import './Services.css'
import Mascoters from '../../components/Mascoters/Mascoters'
import ButtonAdd from '../../assets/img/buttonadd.png'
import { Link as Anchor } from 'react-router-dom'
import Proteccion from '../../components/Proteccion/Proteccion'

const Services = () => {
  const token = JSON.parse(localStorage.getItem('user'))?.token
  return (
    <>
      {token ? (<div>
        <Anchor to='./nuevoservicio' className='button-add'>
          <img src={ButtonAdd} alt="button-add" />
        </Anchor>
        <Mascoters />
      </div>
      ) : (<Proteccion />)}
    </>
  )
}

export default Services