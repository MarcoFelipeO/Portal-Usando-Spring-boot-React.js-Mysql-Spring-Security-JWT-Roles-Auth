import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/foto3.jpg';

const IndexPage = () => {
    return (
        <div className="background-image">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-white'>Bienvenidos</h1>
                        <p className='text-white'>Esta es una plantilla básica para una nueva página en React.</p>
                        <Link to="/login" className="btn btn-outline-danger">¿Te gustaria iniciar Sesion?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
