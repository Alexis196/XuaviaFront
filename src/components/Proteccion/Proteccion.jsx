import './Proteccion.css'
import {Link as Anchor} from 'react-router-dom'

const Proteccion = () => {
  return (
    <div className='content-protect bg-secondary'>
        <h2 className='title-protect'>Debes iniciar sesion para ver este contenido</h2>
        <Anchor className='btn-protect' to='/iniciosesion'>Iniciar Sesion</Anchor>
    </div>
  )
}

export default Proteccion