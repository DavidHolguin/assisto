// src/pages/Home.js
import React from 'react';
import { Card } from '../components/Card';


const AIModel = ({ title, description }) => (
  <Card title={title}>
    <p className="text-gray-700">{description}</p>
    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Usar modelo
    </button>
  </Card>
);

export const Home = () => {
  const models = [
    { title: 'Modelo 1', description: 'Descripción del modelo 1' },
    { title: 'Modelo 2', description: 'Descripción del modelo 2' },
    { title: 'Modelo 3', description: 'Descripción del modelo 3' },
    { title: 'Modelo 4', description: 'Descripción del modelo 4' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Modelos de IA disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {models.map((model, index) => (
          <AIModel key={index} title={model.title} description={model.description} />
        ))}
      </div>
    </div>
  );
};