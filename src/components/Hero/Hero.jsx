import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=6285157157760&text=Halo+Konektiva&type=phone_number&app_absent=0';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center py-32 bg-[url('/src/assets/images/hero-bg.png')] bg-cover bg-center">
      <div className="container relative z-10">
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-8 text-center text-white leading-normal max-w-4xl mx-auto">
          Koneksi Andal, Inovasi Nyata Bersama Konektiva
        </h1>
        <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl mb-12 max-w-3xl mx-auto">
          Kami menghadirkan lebih dari sekadar koneksi, kami bantu Anda tumbuh melalui teknologi yang tepat.
        </p>
        <button 
          onClick={handleWhatsAppClick}
          className="text-white px-1 py-1 rounded-[100px] flex items-center gap-3 mx-auto shadow-lg transition-all duration-300 border border-white/30 bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:border-white/50 group cursor-pointer"
        >
          <span className="ml-6">Hubungi Kami</span>
          <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transform transition-transform duration-300 ease-in-out">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
