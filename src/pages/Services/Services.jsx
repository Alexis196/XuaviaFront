import './Services.css';
import Mascoters from '../../components/Mascoters/Mascoters';
import ButtonAdd from '../../assets/img/buttonadd.png';
import { Link as Anchor } from 'react-router-dom';
import Proteccion from '../../components/Proteccion/Proteccion';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Services = () => {
  const [rol, setRol] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  useEffect(() => {
    if (token) {
      const url = 'https://xuavia.onrender.com/roles';
      axios.get(url)
        .then((response) => {
          setRol(response.data.rol[0]._id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <>
      {token ? (
        <div>
          <Mascoters />
          {rol === user.rol ? (
            <Anchor to='./nuevoservicio' className='button-add'>
              <img src={ButtonAdd} alt="button-add" />
            </Anchor>
          ) : ''}
        </div>
      ) : (
        <Proteccion />
      )}
    </>
  );
};

export default Services;
