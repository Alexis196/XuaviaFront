import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';


const FormServices = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])

    const name = useRef()
    const detail = useRef()
    const price = useRef()
    const category = useRef()


        useEffect(() => {
            const url = 'https://xuavia.onrender.com/categories'
            axios.get(url)
                .then((response) => {
                    setCategories(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('user')).token;
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        if (!token) {
            console.error('Token not found in localStorage');
            return;
        }

        const data = {
            name: name.current.value,
            detail: detail.current.value,
            price: price.current.value,
            category: category.current.value,
        };

        const url = 'https://xuavia.onrender.com/services/addservices';
        axios.post(url, data, headers)
            .then((response) => {
                toast.success('Felicitaciones! Nuevo servicio creado', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setTimeout(() => {
                    navigate('/servicios')
                }, 1300)
            })
            .catch((error) => {
                console.log(error);
            });

        e.target.reset();
    };


    return (
        <div className="register-box" id="">
            <div className='login-box reg-box'>
                <h2>Nuevo servicio</h2>
                <form id="form-login" className="form-login" onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            type="text"
                            name="name"
                            ref={name}
                            required
                        />
                        <label>Nombre del servicio</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            name="detail"
                            ref={detail}
                            required
                        />
                        <label>Descripcion</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="number"
                            name="price"
                            ref={price}
                            required
                        />
                        <label>Precio</label>
                    </div>
                    <label id="category" className='text-light'>Categoria</label>
                    <select name="category" id="category" ref={category}>
                        {categories.map((category) => {
                            return (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            )
                        })}
                    </select>
                    <button className="btn-login btn-login2" type="submit">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormServices