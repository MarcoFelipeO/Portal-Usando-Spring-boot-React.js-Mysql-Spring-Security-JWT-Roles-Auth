import React, { useState } from 'react';
import UserService from '../service/UserService';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/foto3.jpg';
import '../../styles/custom.css';

function RegistrationPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rol: '',
        ciudad: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService

            const token = localStorage.getItem('token');
            await UserService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                rol: '',
                ciudad: ''
            });
            alert('Usuario Registrado Exitosamente');
            navigate('/admin/user-management');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('Se produjo un error al registrar el usuario.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Apellido:</label>
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                
                <div className="form-group">
                    <label>Rol:</label>
                    <select className='form-select' name="rol" value={formData.rol} onChange={handleInputChange}required>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>


                <div className="form-group">
                    <label>Ciudad:</label>
                    <input type="text" name="ciudad" value={formData.ciudad} onChange={handleInputChange} placeholder="Introduce tu ciudad" required />
                </div>
                <button type="submit">Registro</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
