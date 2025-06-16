import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimateOnScroll from '../AnimateOnScroll';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=6285157157760&text=Halo+Konektiva&type=phone_number&app_absent=0';
  };

  return (
    <section className="relative min-h-screen flex items-center text-white py-32 bg-[url('/src/assets/images/hero-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-center lg:text-left text-white leading-tight max-w-4xl mx-auto lg:mx-0">
            Koneksi Andal, Inovasi Nyata Bersama Konektiva
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-xl sm:text-xl md:text-2xl mb-8 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            Kami menghadirkan lebih dari sekadar koneksi, kami bantu Anda tumbuh melalui teknologi yang tepat.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200} className="flex justify-center lg:justify-start">
          <button 
            onClick={handleWhatsAppClick}
            className="text-white px-1 py-1 rounded-[100px] flex items-center gap-3 shadow-lg transition-all duration-300 border border-white/30 bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:border-white/50 group cursor-pointer"
          >
            <span className="ml-6">Hubungi Kami</span>
            <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transform transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
