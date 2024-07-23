import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/foto3.jpg';
import '../../styles/custom.css';
import { Link } from 'react-router-dom';

const IndexPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="background-image">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-white'>Bienvenidos</h1>
                        <p className='text-white'>El mundo de la programación.</p>
                        <Link to="/login" className="btn btn-danger">¿Te gustaría iniciar sesión?</Link>

                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Avances en mis proyectos</h5>
                                        <p className="card-text text-white">This is a short description of the first card. It contains brief information about the content.</p>
                                        <div className="d-flex align-items-center">
                                            <Link to="/link1" className="btn btn-outline-danger me-2">Ir a Avances de Proyectos</Link>
                                            <a href="https://github.com/MarcoFelipeO" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-github github-icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Descarga mi CV aquí para más información</h5>
                                        <p className="card-text text-white">This is a short description of the second card. It contains brief information about the content.</p>
                                        <Link to="/link2" className="btn btn-outline-danger">Descargar CV</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Lista de Usuarios consumidos con API https://jsonplaceholder.typicode.com/users</h5>
                                        {loading ? (
                                            <p className="card-text text-white">Cargando...</p>
                                        ) : error ? (
                                            <p className="card-text text-white">Error: {error.message}</p>
                                        ) : users.length ? (
                                            <ul className="list-group">
                                                {users.map(user => (
                                                    <li key={user.id} className="list-group-item text-dark">
                                                        {user.username} - {user.name} - {user.email} - {user.phone}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="card-text text-white">No se encontraron usuarios.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Avances en mis proyectos</h5>
                                        <p className="card-text text-white">This is a short description of the first card. It contains brief information about.</p>
                                        <div className="d-flex align-items-center">
                                            <Link to="/link1" className="btn btn-outline-danger me-2">Ir a Avances de Proyectos</Link>
                                            <a href="https://github.com/MarcoFelipeO" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-github github-icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Descarga mi CV</h5>
                                        <p className="card-text text-white">This is a short description of the second card. It contains brief information about the content.</p>
                                        <Link to="/link2" className="btn btn-outline-danger">Descargar CV</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
