import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleLoginClick = () => {
    window.location.href = 'https://konektiva.net.id/';
  };
  return (
    <header className="absolute top-0 left-0 w-full h-[120px] z-50 text-white">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <img src="/src/assets/images/logo.png" alt="Konektiva Logo" className="h-7" />
          </div>
          <nav>
            <button 
              onClick={handleLoginClick}
              className="hidden md:block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full border border-primary hover:border-primary-dark transition-all duration-300 font-medium text-base"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
