import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import api from '../api/axios';

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('URL de registro:', api.defaults.baseURL + 'api/users/');
      await api.post('api/users/', formData);
      setAlert({ type: 'success', message: 'Registro exitoso. Por favor, inicia sesión.' });
      setTimeout(() => navigate('/login'), 3000); // Redirigir al login después de 3 segundos
    } catch (error) {
      console.error('Error en el registro:', error.response || error);
      setAlert({
        type: 'error',
        message: error.response?.data?.message || 'Error en el registro. Verifica los campos e intenta nuevamente.',
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full p-3 max-w-md">
        <div className="mb-6 text-center">
          <img src="/assistoIcon512.png" alt="Company Logo" className="mx-auto mb-4" style={{ width: '170px', height: 'auto' }} />
          <h1 className="text-3xl font-bold font-sans text-[#9333ea]">ASSISTO AI</h1>
          <p className="text-gray-600">Registro de Educadores</p>
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
          <div className="mb-1">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border flex rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm leading-tight mt-4">
          Al continuar, aceptas nuestras{' '}
          <button onClick={() => navigate('/privacy-policy')} className="text-[#9333ea] font-semibold no-underline">
            políticas de privacidad
          </button>{' '}
          y los{' '}
          <button onClick={() => navigate('/terms-of-service')} className="text-[#9333ea] font-semibold no-underline">
            términos y condiciones
          </button>.
        </p>
        <div className="flex justify-evenly mt-4">
          <button onClick={() => navigate('/login')} className="text-[#9333ea] hover:underline">
            Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
};
