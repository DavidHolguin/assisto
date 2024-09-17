import React from 'react';

export const Alert = ({ type, message }) => {
  const bgColor = type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700';

  return (
    <div className={`border-l-4 p-4 ${bgColor}`} role="alert">
      <p className="font-bold">{type === 'success' ? 'Éxito' : 'Error'}</p>
      <p>{message}</p>
    </div>
  );
};