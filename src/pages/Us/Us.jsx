import BannerUs from "../../components/BanerUs/BannerUs"
import NosotrosPage from "../../components/InfoUs/InfoUs"
import Proteccion from "../../components/Proteccion/Proteccion"

const Us = () => {
  const token = JSON.parse(localStorage.getItem('user'))?.token
  return (
    <>
      {token ? (
        <div>
          <BannerUs />
          <NosotrosPage />
        </div>
      ) : (<Proteccion />)}
    </>
  )
}

export default Us