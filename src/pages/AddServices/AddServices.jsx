import FormServices from "../../components/FormServices/FormServices"
import Proteccion from "../../components/Proteccion/Proteccion"
import axios from "axios"
import { useEffect, useState } from "react"
import '../../components/Proteccion/Proteccion.css'

const AddServices = () => {
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
          {rol === user.rol ? (
            <FormServices />
          ) : (
            <div className="content-protect bg-secondary">
              <p className="title-protect2">Debes ser un Mascoter para poder publicar un nuevo servicio</p>
            </div>)}
        </div>
      ) : <Proteccion />}
    </>
  )
}

export default AddServices