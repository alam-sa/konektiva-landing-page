import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import networkIcon from '../../assets/icons/network.svg';
import servicesIcon from '../../assets/icons/services.svg';
import consultationIcon from '../../assets/icons/consultation.svg';
import vectorIcon from '../../assets/icons/vector.svg';
import domainIcon from '../../assets/icons/domain.svg';
import mobileIcon from '../../assets/icons/mobile-apps.svg';

const Services = () => {
  return (
    <section className="py-20 bg-gray-custom" id="layanan">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit mx-auto">
            <span className="w-4 h-4 bg-primary rounded-full"></span>
            Layanan Kami
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100} className="text-center">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Solusi Digital Terpercaya.</h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={150} className="text-center mb-12">
          <p className="text-text-secondary text-base">
            Konektiva hadir untuk memberikan solusi layanan Internet dan Produk IT Digital<br />
            untuk menunjang kemajuan teknologi dan Informasi di Indonesia
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Internet Connection */}
          <AnimateOnScroll delay={100}>
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
            <img src={networkIcon} alt="Internet Connection" className="w-12 md:w-16 h-12 md:h-16 mb-4 md:mb-6" />
            <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Internet Connection</h4>
            <p className="text-text-secondary text-sm md:text-base">
              Rasakan pengalaman internet terbaik dengan kecepatan tinggi dan koneksi stabil melalui layanan unggulan kami.
            </p>
            </div>
          </AnimateOnScroll>
          
          {/* Manage Service */}
          <AnimateOnScroll delay={150}>
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
            <img src={servicesIcon} alt="Manage Service" className="w-12 md:w-16 h-12 md:h-16 mb-4 md:mb-6" />
            <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Manage Service</h4>
            <p className="text-text-secondary text-sm md:text-base">
              Optimalkan operasional bisnis Anda dengan layanan managed service yang andal dan tepercaya dari Konektiva.
            </p>
            </div>
          </AnimateOnScroll>
          
          {/* IT Consultant */}
          <AnimateOnScroll delay={200}>
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
            <img src={consultationIcon} alt="IT Consultant" className="w-12 md:w-16 h-12 md:h-16 mb-4 md:mb-6" />
            <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">IT Consultant</h4>
            <p className="text-text-secondary text-sm md:text-base">
              Dapatkan solusi IT terbaik melalui layanan konsultasi profesional dari tim ahli kami.
            </p>
            </div>
          </AnimateOnScroll>
          
          {/* Design Graphic */}
          <AnimateOnScroll delay={100}>
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
            <img src={vectorIcon} alt="Design Graphic" className="w-12 md:w-16 h-12 md:h-16 mb-4 md:mb-6" />
            <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Design Graphic</h4>
            <p className="text-text-secondary text-sm md:text-base">
              Desain grafis profesional untuk mendukung ide dan identitas visual Anda
            </p>
            </div>
          </AnimateOnScroll>
          
          {/* Web Development */}
          <AnimateOnScroll delay={150}>
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
            <img src={domainIcon} alt="Web Development" className="w-12 md:w-16 h-12 md:h-16 mb-4 md:mb-6" />
            <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Web Development</h4>
            <p className="text-text-secondary text-sm md:text-base">
              Dapatkan website profesional yang responsif, menarik, dan siap mendukung kebutuhan digital bisnis Anda
            </p>
            </div>
          </AnimateOnScroll>
          
          {/* Mobile Development */}
          <AnimateOnScroll delay={200}>
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
            <img src={mobileIcon} alt="Mobile Development" className="w-12 md:w-16 h-12 md:h-16 mb-4 md:mb-6" />
            <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Mobile Development</h4>
            <p className="text-text-secondary text-sm md:text-base">
              Dapatkan aplikasi mobile inovatif dan user-friendly melalui layanan pengembangan mobile terbaik dari kami.
            </p>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Services;
