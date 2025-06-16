import React, { useState } from 'react';
import Lottie from 'lottie-react';
import formAnimation from '../../assets/json/form_17626900.json';
import callAnimation from '../../assets/json/call_12544451.json';
import routerAnimation from '../../assets/json/router_19005271.json';
import AnimateOnScroll from '../AnimateOnScroll';

const InternetConnection = () => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setCity('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <section className="w-full bg-[#F4FCFC] py-20">
      <div className="container max-w-7xl px-4 md:px-6">
        <AnimateOnScroll>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Internet Connection
          </h1>
        </AnimateOnScroll>
        
        <div className="space-y-16">
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="w-full sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(33.333%-0.666rem)]">
            {/* Button 1 */}
            <AnimateOnScroll delay={100} className="w-full h-full">
              <button className="group bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 active:shadow-inner w-full">
                <div className="w-full flex items-start p-2 rounded-lg bg-white group-hover:bg-gray-50 transition-all duration-200">
                  <div className="flex-shrink-0 mr-4">
                    <Lottie 
                      animationData={formAnimation} 
                      loop={true}
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 text-start">Mau Berlangganan?</h2>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-base text-primary">Daftar sekarang</span>
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </AnimateOnScroll>
            
            {/* Button 2 */}
            </div>
            <div className="w-full sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(33.333%-0.666rem)]">
            <AnimateOnScroll delay={200} className="w-full h-full">
              <button className="group bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 active:shadow-inner w-full">
                <div className="w-full flex items-start p-2 rounded-lg bg-white group-hover:bg-gray-50 transition-all duration-200">
                  <div className="flex-shrink-0 mr-4">
                    <Lottie 
                      animationData={callAnimation} 
                      loop={true}
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 text-start">Langganan Lebih Cepat</h2>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-base text-primary">Chat WhatsApp</span>
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </AnimateOnScroll>
            
            {/* Button 3 */}
            </div>
            <div className="w-full sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(33.333%-0.666rem)]">
            <AnimateOnScroll delay={300} className="w-full h-full">
              <button className="group bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 active:shadow-inner w-full">
                <div className="w-full flex items-start p-2 rounded-lg bg-white group-hover:bg-gray-50 transition-all duration-200">
                  <div className="flex-shrink-0 mr-4">
                    <Lottie 
                      animationData={routerAnimation} 
                      loop={true}
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 text-start">Cari Paket Internet?</h2>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-base text-primary">Cek paket</span>
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </AnimateOnScroll>
          </div>
          </div>
          
          {/* Coverage Area */}
          <AnimateOnScroll delay={400}>
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100 w-full max-w-7xl mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 md:mb-5">Check Coverage Area</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-end">
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                  <select 
                    value={province}
                    onChange={handleProvinceChange}
                    className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">- Pilih Provinsi -</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-timur">Jawa Timur</option>
                    <option value="jawa-tengah">Jawa Tengah</option>
                  </select>
                </div>
                
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kota/Kabupaten</label>
                  <select 
                    value={city}
                    onChange={handleCityChange}
                    disabled={!province}
                    className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 text-sm"
                  >
                    <option value="">- Pilih Kota/Kabupaten -</option>
                    {province === 'jawa-barat' && (
                      <>
                        <option value="bandung">Bandung</option>
                        <option value="bekasi">Bekasi</option>
                        <option value="bogor">Bogor</option>
                      </>
                    )}
                    {province === 'jawa-timur' && (
                      <>
                        <option value="surabaya">Surabaya</option>
                        <option value="malang">Malang</option>
                        <option value="kediri">Kediri</option>
                      </>
                    )}
                  </select>
                </div>
                
                <div className="md:col-span-2 flex justify-center">
                  <button className="relative w-full max-w-[160px] bg-primary text-white px-6 py-2.5 rounded-[20px] hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm font-medium whitespace-nowrap group overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <span className="transition-all duration-300 group-hover:mr-2">Cek Lokasi</span>
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default InternetConnection;