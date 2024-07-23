import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';

function UserManagementPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getAllUsers(token);
      setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        await UserService.deleteUser(userId, token);
        fetchUsers(); // Fetch updated users after deletion
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-management-container">
      <h2 className="mb-4">Gestión de usuarios</h2>
      <Link to="/admin/register" className="btn btn-primary mb-3">Agregar Usuario</Link>

      <div className="table-responsive">
        <table className="table table-striped mb-4">
          <thead className="thead-dark">
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
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update-user/${user.id}`} className="btn btn-sm btn-primary me-2">Actualizar</Link>
                  <Link className="btn btn-sm btn-danger" onClick={() => deleteUser(user.id)}>Eliminar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagementPage;
