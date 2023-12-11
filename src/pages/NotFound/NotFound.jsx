import './not-found.css'
import Perrito from '../../assets/img/perrito.jpg'

function ErrorPage() {
    return (
        <div className='div-error bg-secondary'>
            <img src={Perrito} alt="error-404" />
            <div className='div-texto'>
                <p>ERROR 404</p>
                <p>Página no Encontrada</p>
            </div>
        </div>
    )
}

export default ErrorPage