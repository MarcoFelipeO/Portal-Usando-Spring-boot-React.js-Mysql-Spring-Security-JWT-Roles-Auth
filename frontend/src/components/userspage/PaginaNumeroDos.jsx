import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginaNumeroDos = () => {
    return (
        <div className="background-image">
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1 className='text-white'>Bienvenido a la Segunda Pagina de React</h1>
                    <p className='text-white'>Esta es una plantilla básica para una nueva página en React.</p>
                    <Link to="/" className="btn btn-outline-danger me-2 text-white">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
         </div>
    );
};

export default PaginaNumeroDos;
