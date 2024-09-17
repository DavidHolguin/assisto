import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import api from '../api/axios';

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending data:', formData);
      const response = await api.post('/api/token/', formData);
      localStorage.setItem('token', response.data.access);
      setAlert({ type: 'success', message: 'Inicio de sesión exitoso' });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Login error:', error.response?.data);
      setAlert({ type: 'error', message: error.response?.data?.detail || 'Error en el inicio de sesión' });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full p-3 max-w-md">
        <div className="mb-6 text-center">
        <img src="/assistoIcon512.png" alt="Company Logo" className="mx-auto mb-4" style={{width: '170px', height: 'auto'}} />
          <h1 className="text-3xl font-bold font-sans	 text-[#9333ea]">ASSISTO AI</h1>
          <p className="text-gray-600">Inicio de Sesión Educadores</p>
        </div>
        {alert && <Alert type={alert.type} message={alert.message} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Usuario"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="mb-6 relative">
            <input
              className="shadow appearance-none border flex rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-[#9333ea]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🔒' : '👁️'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="text-center  text-gray-500 text-sm leading-tight mt-4">
          Al continuar, aceptas nuestras{' '}
          <button onClick={() => navigate('/privacy-policy')} className="text-[#9333ea] font-semibold	no-underline">politicas de privacidad</button> y los {' '}
          <button onClick={() => navigate('/terms-of-service')} className="text-[#9333ea] font-semibold	no-underline">terminos y condiciones</button>.
        </p>
        <div className="flex justify-evenly mt-4">
          <button onClick={() => navigate('/register')} className="text-[#9333ea] hover:underline">Registrate</button>
        
          <button onClick={() => navigate('/forgot-password')} className="text-[#9333ea] hover:underline">Olvide mi contraseña</button>
           </div>
      </div>
    </div>
  );
};
