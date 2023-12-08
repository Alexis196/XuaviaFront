import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

const FormServices = () => {
    const [categories, setCategories] = useState([])

    const name = useRef()
    const detail = useRef()
    const price = useRef()
    const category = useRef()


    useEffect(() => {
        const url = 'http://localhost:8080/categories'
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

        const url = 'http://localhost:8080/services/addservices';
        axios.post(url, data, headers)
            .then((response) => {
                console.log(response.data);
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
                    {/* <div className="user-box">
                        <input
                            type="file"
                            name="file"
                            ref={price}
                            required
                        />
                        <label>Imágenes</label>
                    </div> */}
                    <button className="btn-login btn-login2" type="submit">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormServices