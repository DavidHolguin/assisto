import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Redirige al usuario a la página de login, pero guarda la ubicación actual
    // para poder redirigirlo de vuelta después de autenticarse
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};