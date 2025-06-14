import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-custom" id="kontak">
      <div className="container">
        <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit mx-auto md:mx-0">
          <span className="w-4 h-4 bg-primary rounded-full"></span>
          Kontak
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-32">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">Hubungi Kami</h3>
              <p className="text-text-secondary">
                Mari berdiskusi dan temukan solusi terbaik untuk kebutuhan Anda. 
                Kami siap mendampingi setiap langkah Anda.
              </p>
            </div>
            
            <div className="space-y-4 w-full">
              {/* Address */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Alamat</h4>
                    <p className="text-text-secondary text-sm">
                      Kompleks Sekumpul Hill, Unit 03<br />
                      Jl. P. Suryanata RT 14-15 Kel. Bukit Pinang<br />
                      Kec. Samarinda Ulu, 75131
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Details */}
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                {/* Email */}
                <div className="bg-white p-6 rounded-[20px] shadow-lg flex-1">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="text-text-primary font-medium mb-1">Email</h4>
                      <p className="text-text-secondary text-sm">support@kaltimnet.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="bg-white p-6 rounded-[20px] shadow-lg flex-1">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <FontAwesomeIcon icon={faPhone} className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="text-text-primary font-medium mb-1">Telepon</h4>
                      <p className="text-text-secondary text-sm">+62 851-5715-7760</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="bg-white p-8 rounded-[20px] shadow-lg h-full w-full max-w-[600px] mx-auto">
            <form className="space-y-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Nama Anda" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
              
              <div className="space-y-8">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="email@contoh.com" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Nomor Telepon
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+62 812-3456-7890" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Pesan
                </label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Tulis pesan Anda di sini..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                ></textarea>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-sm text-text-secondary">
                  Saya menyetujui kebijakan privasi
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
