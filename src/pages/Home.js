import React from 'react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="flex justify-between items-center p-4">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none shadow-inner [box-shadow:inset_0_1px_2px_0_rgba(60,64,67,0.3),_inset_0_2px_6px_2px_rgba(60,64,67,0.15)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-[#f6e5ff] text-purple-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex bg-purple-100 w-20 h-10 items-center justify-center shadow-inner [box-shadow:inset_0_1px_2px_0_rgba(60,64,67,0.3),_inset_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-full">
        <button>
       
        <svg xmlns="http://www.w3.org/2000/svg"className="w-5 h-4 text-purple-600" fill="none" stroke="currentColor"  viewBox="0 0 21 26">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 0C6.876 0 3.937 2.91 3.937 6.5S6.877 13 10.5 13c3.624 0 6.563-2.91 6.563-6.5S14.123 0 10.5 0ZM5.578 6.5c0-2.692 2.204-4.875 4.922-4.875 2.718 0 4.922 2.183 4.922 4.875s-2.204 4.875-4.922 4.875c-2.718 0-4.922-2.183-4.922-4.875ZM2.79 15.6C1.249 15.6 0 16.836 0 18.362v.488c0 2.441 1.274 4.268 3.229 5.447C5.15 25.457 7.735 26 10.5 26c2.765 0 5.349-.544 7.271-1.703C19.726 23.12 21 21.291 21 18.85v-.488c0-1.526-1.249-2.762-2.789-2.762H2.79Zm-1.148 2.762c0-.628.513-1.137 1.148-1.137h15.422c.635 0 1.148.509 1.148 1.137v.488c0 1.784-.892 3.125-2.441 4.06-1.581.953-3.837 1.465-6.418 1.465-2.58 0-4.837-.512-6.418-1.466-1.549-.934-2.441-2.275-2.441-4.059v-.488Z"></path>
        </svg>

        </button>
        <button>
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
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
    <p className="text-gray-600 text-sm text-start">{description}</p>
  </div>
);

export const Home = () => {
  const model = {
    title: "ASSISTO.EDU",
    description: "Asistente académico para crear recursos, responder preguntas y brindarte apoyo en clase"
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