import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=6285157157760&text=Halo+Konektiva&type=phone_number&app_absent=0';
  };
  return (
    <section className="py-20 bg-[url('/src/assets/images/product-background.png')] bg-cover bg-center text-white" id="produk">
      <div className="container">
        <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit mx-auto md:mx-0">
          <span className="w-4 h-4 bg-primary rounded-full"></span>
          Produk Kami
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12 lg:mb-16">
          <h3 className="w-full lg:w-1/2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight whitespace-pre-line text-center lg:text-left">
            Produk IT untuk Semua
            Kebutuhan Digital Anda.
          </h3>
          <span className="w-full lg:w-1/2 block w-20 h-0.5 bg-gray-custom/50 mx-auto lg:mx-0"></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Dedicated Premium */}
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-[20px] shadow-lg">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">01.</h4>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Dedicated Premium</h4>
            <ul className="space-y-3 md:space-y-4 text-white/80 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                <span>Internet stabil 1:1</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                <span>Layanan prioritas 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                <span>Jaminan SLA 99.8%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Support perangkat sesuai kebutuhan bisnis anda</span>
              </li>
            </ul>
          </div>
          
          {/* Manage Service */}
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-[20px] shadow-lg">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">02.</h4>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Manage Service</h4>
            <ul className="space-y-3 md:space-y-4 text-white/80 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Memberikan pelayanan manage service terhadap infrastruktur internet anda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Support pelayanan 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Biaya Terjangkau</span>
              </li>
            </ul>
          </div>
          
          {/* IT Consultant */}
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-[20px] shadow-lg">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">03.</h4>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">IT Consultant</h4>
            <ul className="space-y-3 md:space-y-4 text-white/80 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Didukung oleh tim berpengalaman dibidang IT</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Konektiva mampu mengidentifikasi dan menyelesaikan permasalahan kompleks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                <span>Rekomendasi tentang infrastruktur dan masalah IT anda.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-[20px] gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex -space-x-4">
              <img src="/src/assets/images/man.jpg" alt="Avatar 1" className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white" />
              <img src="/src/assets/images/man.jpg" alt="Avatar 2" className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white" />
              <img src="/src/assets/images/man.jpg" alt="Avatar 3" className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white" />
              <img src="/src/assets/images/man.jpg" alt="Avatar 4" className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white" />
            </div>
            <p className="text-lg md:text-xl text-white/80 text-center md:text-left">
              Bersama Konektiva, wujudkan solusi teknologi terbaik untuk bisnis Anda.
            </p>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="group bg-primary hover:bg-primary-dark text-white px-1 py-1 rounded-full flex items-center gap-3 shadow-lg transition-all duration-300 w-full md:w-auto justify-center cursor-pointer"
          >
            <span className="ml-6">Hubungi Kami Sekarang</span>
            <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-black group-hover:scale-110 transform transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
