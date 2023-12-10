import BannerUs from "../../components/BanerUs/BannerUs"
import NosotrosPage from "../../components/InfoUs/InfoUs"
import Proteccion from "../../components/Proteccion/Proteccion"
import './Us.css'

const Us = () => {
  const token = JSON.parse(localStorage.getItem('user'))?.token
  return (
    <>
      {token ? (
        <>
          <BannerUs />
          <NosotrosPage />
        </>
      ) : (<Proteccion />)}
    </>
  )
}

export default Us