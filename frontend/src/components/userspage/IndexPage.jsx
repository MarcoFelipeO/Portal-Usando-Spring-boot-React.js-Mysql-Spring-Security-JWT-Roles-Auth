import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/estrellas3.jpg';

const IndexPage = () => {
    return (
        <div className="background-image">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-white'>Bienvenidos a nuestro Inicio</h1>
                        <p className='text-white'>Esta es una plantilla básica para una nueva página en React.</p>
                        <Link to="/login" className="btn btn-primary">¿Te gustaria iniciar Sesion?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
