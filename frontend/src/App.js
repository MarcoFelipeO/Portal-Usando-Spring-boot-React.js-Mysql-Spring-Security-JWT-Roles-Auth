import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/common/Navbar';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import FooterComponent from './components/common/Footer';
import UserService from './components/service/UserService';
import UpdateUser from './components/userspage/UpdateUser';
import UserManagementPage from './components/userspage/UserManagementPage';
import ProfilePage from './components/userspage/ProfilePage';
import IndexPage from './components/userspage/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Primera ruta para la página de inicio */}
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/index" element={<IndexPage />} />
            
            {/* Rutas restantes */}
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Verificar si el usuario está autenticado y es administrador antes de renderizar rutas solo para administradores */}
            {UserService.adminOnly() && (
              <>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/admin/user-management" element={<UserManagementPage />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>
            )}
            
            {/* Ruta de fallback para redirigir a la página de inicio de sesión si la URL no coincide con ninguna ruta definida */}
            <Route path="*" element={<Navigate to="/index" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
