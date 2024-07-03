// components/UserManagementPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';

function UserManagementPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getAllUsers(token);
      //   console.log(response);
      setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
      console.error('Error al recuperar usuarios:', error);
    }
  };


  const deleteUser = async (userId) => {
    try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        // After deleting the user, fetch the updated list of users
        fetchUsers();
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <div className="user-management-container">
      <h2>Gestión de usuarios</h2>
      <button className='reg-button'> <Link to="/register">Agregar Usuario</Link></button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <button className='delete-button' onClick={() => deleteUser(user.id)}>Eliminar</button>
                <button><Link to={`/update-user/${user.id}`}>Actualizar</Link></button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagementPage;
