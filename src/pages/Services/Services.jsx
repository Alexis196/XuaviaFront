import './Services.css'
import Mascoters from '../../components/Mascoters/Mascoters'
import ButtonAdd from '../../assets/img/buttonadd.png'
import { Link as Anchor } from 'react-router-dom'
import Proteccion from '../../components/Proteccion/Proteccion'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Services = () => {
  const [rol, setRol] = useState('')

  const user = JSON.parse(localStorage.getItem('user'))
  const token = user?.token
  console.log(user.rol)
  useEffect(() => {
    const url = 'https://xuavia.onrender.com/roles'
    axios.get(url)
      .then((response) => {
        setRol(response.data.rol[0]._id)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {token ? (<div>
        {rol === user.rol ? (
          <Anchor to='./nuevoservicio' className='button-add'>
            <img src={ButtonAdd} alt="button-add" />
          </Anchor>
        ) : ''}
        <Mascoters />
      </div>
      ) : (<Proteccion />)}
    </>
  )
}

export default Services