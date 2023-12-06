import './not-found.css'

// const NotFound = () => {
//   return (
//     <div className='cont-not'>
//         <h2 className='title-textNF'>Error 404: Página no encontrada</h2>
//     </div>
//   )
// }

// export default NotFound

import Error from '../../assets/img/error-404.png'

function ErrorPage() {
    return (
        <div className='div-error bg-secondary'>
            <img src={Error} alt="error-404" />
            <div className='div-texto'>
                <p>ERROR 404</p>
                <p>Página no Encontrada</p>
            </div>
        </div>
    )
}

export default ErrorPage