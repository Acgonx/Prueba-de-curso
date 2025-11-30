
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md w-full p-4 flex items-center z-10">
        <div className="flex items-center">
            <div className="bg-blue-600 p-2 rounded-lg mr-3">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Curso de IA para Personas Mayores
            </h1>
      </div>
    </header>
  );
};

export default Header;
