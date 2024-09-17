import React, { useState, useEffect } from 'react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="flex justify-between items-center p-4">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none shadow-inner [box-shadow:inset_0_1px_2px_0_rgba(60,64,67,0.3),_inset_0_2px_6px_2px_rgba(60,64,67,0.15)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-[#f6e5ff] text-purple-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex bg-purple-100 w-20 h-10 items-center justify-center shadow-inner [box-shadow:inset_0_1px_2px_0_rgba(60,64,67,0.3),_inset_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-full">
        <button className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <button>
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

const TarjetaModeloIA = ({ titulo, descripcion }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex items-center mb-2">
      <div className="bg-purple-100 p-2 rounded-lg mr-3">
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold">{titulo}</h2>
      <button className="ml-auto">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </button>
    </div>
    <p className="text-gray-600 text-sm text-start">{descripcion}</p>
  </div>
);

export const Home = () => {
  const [mostrarSolicitudInstalacion, setMostrarSolicitudInstalacion] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("Usuario");
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Lógica para detectar si la app puede ser instalada
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setMostrarSolicitudInstalacion(true);
    });

    // Lógica para detectar si la app ya está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setMostrarSolicitudInstalacion(false);
    }

    // Obtener el nombre del usuario desde el localStorage
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
      setNombreUsuario(nombreGuardado);
    } else {
      // Si no hay nombre guardado, podríamos pedir al usuario que lo ingrese
      const nombre = prompt('Por favor, ingresa tu nombre:');
      if (nombre) {
        setNombreUsuario(nombre);
        localStorage.setItem('nombreUsuario', nombre);
      }
    }

    // Limpieza del event listener
    return () => {
      window.removeEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setMostrarSolicitudInstalacion(true);
      });
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación de la A2HS');
        } else {
          console.log('El usuario rechazó la instalación de la A2HS');
        }
        setDeferredPrompt(null);
      });
    }
    setMostrarSolicitudInstalacion(false);
  };

  const modelo = {
    titulo: "EDU.ASSISTO",
    descripcion: "Asistente académico para crear recursos, responder preguntas y brindarte apoyo en clase"
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {mostrarSolicitudInstalacion && (
        <SolicitudInstalacion onClose={() => setMostrarSolicitudInstalacion(false)} onInstall={handleInstallClick} />
      )}
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Hola, {nombreUsuario}
          </h1>
          <p className="text-2xl text-gray-600 mt-2">
            ¿En qué puedo ayudarte?
          </p>
        </div>
        <TarjetaModeloIA titulo={modelo.titulo} descripcion={modelo.descripcion} />
      </main>
    </div>
  );
};

// Asegúrate de que el componente SolicitudInstalacion acepte la prop onInstall
const SolicitudInstalacion = ({ onClose, onInstall }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-sm">
      <h2 className="text-xl font-bold mb-4">Instalar Nuestra Aplicación</h2>
      <p className="mb-4">¡Obtén la mejor experiencia instalando nuestra app en tu dispositivo!</p>
      <div className="flex justify-end">
        <button onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">
          Más tarde
        </button>
        <button onClick={onInstall} className="bg-purple-600 text-white px-4 py-2 rounded">
          Instalar
        </button>
      </div>
    </div>
  </div>
);