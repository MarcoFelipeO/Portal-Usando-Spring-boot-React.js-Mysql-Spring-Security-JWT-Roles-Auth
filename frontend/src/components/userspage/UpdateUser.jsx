import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();


  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    rol: '',
    ciudad: ''
  });

  useEffect(() => {
    fetchUserDataById(userId); // Pass the userId to fetchUserDataById
  }, [userId]); //wheen ever there is a chane in userId, run this

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
      const { name, email, rol, ciudad } = response.ourUsers;
      setUserData({ name, email, rol, ciudad });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const handleInputChange = (e) => {
    const { nombre, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [nombre]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmDelete = window.confirm('Estas seguro de que quieres actualizar a este Usuario?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res)
        // Redirect to profile page or display a success message
        navigate("/admin/user-management")
      }

    } catch (error) {
      console.error('Error al cargar el perfil del Usuario:', error);
      alert(error)
    }
  };

  return (
    <div className="auth-container">
      <h2>Actualizar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={userData.nombre} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Rol:</label>
          <input type="text" name="rol" value={userData.rol} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Ciudad:</label>
          <input type="text" name="ciudad" value={userData.ciudad} onChange={handleInputChange} />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default UpdateUser;
