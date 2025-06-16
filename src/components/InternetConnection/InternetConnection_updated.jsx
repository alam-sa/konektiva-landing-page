import React, { useState } from 'react';
import Lottie from 'lottie-react';
import formAnimation from '../../assets/json/form_17626900.json';
import callAnimation from '../../assets/json/call_12544451.json';
import routerAnimation from '../../assets/json/router_19005271.json';

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
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">Internet Connection</h1>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Button 1 */}
          <button className="group text-left bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="w-full flex items-center p-6 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0">
                <Lottie 
                  animationData={formAnimation} 
                  loop={true}
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Mau Berlangganan?</h2>
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-600">Daftar sekarang</span>
                  <svg className="w-6 h-6 text-blue-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Button 2 */}
          <button className="group text-left bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="w-full flex items-center p-6 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0">
                <Lottie 
                  animationData={callAnimation} 
                  loop={true}
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Langganan Lebih Cepat</h2>
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-600">Chat WhatsApp</span>
                  <svg className="w-6 h-6 text-green-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Button 3 */}
          <button className="group text-left bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="w-full flex items-center p-6 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0">
                <Lottie 
                  animationData={routerAnimation} 
                  loop={true}
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Cari Paket Internet?</h2>
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-600">Cek paket</span>
                  <svg className="w-6 h-6 text-purple-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mt-10 mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Atau</span>
          </div>
        </div>

        {/* Coverage Area */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Check Coverage Area</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Provinsi</label>
              <select 
                value={province}
                onChange={handleProvinceChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">- Pilih Provinsi -</option>
                <option value="jawa-barat">Jawa Barat</option>
                <option value="jawa-timur">Jawa Timur</option>
                <option value="jawa-tengah">Jawa Tengah</option>
                {/* Add more provinces as needed */}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">Kota/Kabupaten</label>
              <select 
                value={city}
                onChange={handleCityChange}
                disabled={!province}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
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
                {/* Add more cities based on province */}
              </select>
            </div>
            
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Cek Lokasi
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InternetConnection;
