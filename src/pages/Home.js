import React from 'react';
import { Menu, Check, Settings } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="flex justify-between items-center p-4">
      <Menu className="text-purple-600" size={24} />
      <div className="flex space-x-4">
        <button className="p-2 bg-purple-100 rounded-full">
          <Check className="text-purple-600" size={20} />
        </button>
        <button className="p-2 bg-gray-100 rounded-full">
          <Settings className="text-gray-600" size={20} />
        </button>
      </div>
    </div>
  </header>
);

const AIModelCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex items-center mb-2">
      <div className="bg-purple-100 p-2 rounded-lg mr-3">
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <button className="ml-auto">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </button>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export const Home = () => {
  const model = {
    title: "Letter of Recommendation",
    description: "Generate a letter of recommendation to a university..."
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AIModelCard title={model.title} description={model.description} />
      </main>
    </div>
  );
};