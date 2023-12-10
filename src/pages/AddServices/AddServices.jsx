import FormServices from "../../components/FormServices/FormServices"
import Proteccion from "../../components/Proteccion/Proteccion"

const AddServices = () => {
  const token = JSON.parse(localStorage.getItem('user'))?.token
  return (
    <>
      {token ? (
        <div>
          <FormServices />
        </div>
      ) : <Proteccion />}
    </>
  )
}

export default AddServices