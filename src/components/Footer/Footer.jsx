import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-20 bg-[url('/src/assets/images/product-background.png')] bg-cover bg-center text-white">
      <div className="container mx-auto px-5 max-w-6xl">
        {/* Logo */}
        <img src="/src/assets/images/logo.png" alt="Konektiva Logo" className="h-10 mb-12" />
    
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Left Column - Paragraph */}
          <div className="lg:w-2/5">
            <p className="text-white text-base font-normal leading-6">
              Konektiva adalah penyedia layanan internet dan solusi IT terintegrasi yang berfokus pada konektivitas andal, inovasi digital, dan layanan profesional untuk mendukung transformasi teknologi di Indonesia.
            </p>
          </div>
    
          {/* Right Column - Contact Info */}
          <div className="lg:w-3/5 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <i className="fas fa-location-dot text-primary text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-gray-konektiva font-medium text-sm uppercase tracking-wider mb-1">ALAMAT</p>
                  <p className="text-white text-base font-normal leading-6">
                    Kompleks Sekumpul Hill, Unit 03<br />
                    Jl. P. Suryanata RT 14-15 Kel. Bukit Pinang<br />
                    Kec. Samarinda Ulu, 75131
                  </p>
                </div>
              </div>
    
              {/* Contact Details */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-konektiva font-medium text-sm uppercase tracking-wider mb-1">E-MAIL</p>
                    <p className="text-white text-base font-normal leading-6">support@kaltimnet.com</p>
                  </div>
                </div>
    
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <FontAwesomeIcon icon={faPhone} className="text-primary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-konektiva font-medium text-sm uppercase tracking-wider mb-1">PHONE NUMBER</p>
                    <p className="text-white text-base font-normal leading-6">+6285157157760</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-2">
            <p className="text-gray-400 text-sm text-center sm:text-left">PT Kalim Net Nusantara</p>
            <p className="text-gray-400 text-xs text-center sm:text-right">© 2025 konektiva. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
