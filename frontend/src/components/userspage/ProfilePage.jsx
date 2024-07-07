import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';

function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error al obtener información del perfil:', error);
        }
    };

    return (
        <div className="profile-page-container">
            <h2>Información del perfil</h2>
            <p>Nombre: {profileInfo.name}</p>
            <p>Email: {profileInfo.email}</p>
            <p>Ciudad: {profileInfo.city}</p>
            {profileInfo.role === "ADMIN" && (
                <>
                    <button className="btn btn-primary">
                        <Link to={`/update-user/${profileInfo.id}`} className="text-white text-decoration-none">
                            Actualizar este perfil
                        </Link>
                    </button>
                    <button>
                        <Link to="/admin/user-management">Apartado administrador</Link>
                    </button>
                </>
            )}
        </div>
    );
}

export default ProfilePage;
