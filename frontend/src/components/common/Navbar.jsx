import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();



    const handleLogout = () => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres cerrar sesión este usuario?');
        if (confirmDelete) {
            UserService.logout();
        }
    };


    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Marco Dev</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Perfil</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">Gestión de usuarios</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Cerrar sesión </Link></li>}
            </ul>
        </nav>
    );
}

export default Navbar;
