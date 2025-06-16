import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import FAQItem from './FAQItem';

import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`py-20 bg-white overflow-hidden transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
      id="kontak"
    >
      <div className="container">        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* FAQ Section - Takes 8 columns */}
          <div className="lg:col-span-7">
            <AnimateOnScroll delay={100}>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">Paling Sering ditanyakan</h3>
                
              </div>
            </AnimateOnScroll>
            
            <div className="space-y-2">
              <FAQItem 
                question="Apa saja layanan yang disediakan?"
                answer="Kami menyediakan layanan internet berkecepatan tinggi, solusi IT untuk bisnis, pengembangan website, dan layanan konsultasi teknologi."
              />
              <FAQItem 
                question="Bagaimana cara berlangganan layanan?"
                answer="Anda dapat menghubungi tim penjualan kami melalui telepon, email, atau mengisi formulir kontak di website ini."
              />
              <FAQItem 
                question="Berapa lama proses instalasi?"
                answer="Proses instalasi biasanya memakan waktu 2-3 hari kerja setelah proses verifikasi data selesai."
              />
              <FAQItem 
                question="Apa metode pembayaran yang tersedia?"
                answer="Kami menerima pembayaran melalui transfer bank, virtual account, dan berbagai metode pembayaran digital lainnya."
              />
              <FAQItem 
                question="Bagaimana jika terjadi gangguan layanan?"
                answer="Tim teknis kami siap membantu 24/7. Segera hubungi layanan pelanggan kami untuk mendapatkan bantuan."
              />
            </div>
          </div>
          
          {/* Contact Card - Takes 5 columns */}
          <AnimateOnScroll delay={200} className="w-full lg:col-span-5">
            <div className="relative flex flex-col items-start p-6 md:p-8 gap-6 bg-[#F4FCFC] w-full max-w-[535px] mx-auto">
              {/* Outer frame */}
              <div className="flex flex-col items-start gap-6 w-full">
                {/* Inner frame for title and description */}
                <div className="flex flex-col items-start gap-4 w-full max-w-[327px]">
                  <h2 className="text-base font-bold uppercase flex items-center gap-3 w-full">
                    <span className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></span>
                    Kontak
                  </h2>
                  <h3 className="text-3xl md:text-4xl leading-tight font-semibold">Hubungi Kami</h3>
                  <p className="text-text-secondary text-sm md:text-base">
                    Mari berdiskusi dan temukan solusi terbaik untuk kebutuhan Anda. Kami siap mendampingi setiap langkah Anda.
                  </p>
                </div>

                {/* Button */}
                <button className="flex items-center justify-center w-full md:w-[280px] px-4 py-2 bg-primary text-white font-medium text-base leading-6 rounded-[20px] hover:bg-primary-dark transition-colors">
                  Layanan Customer Service
                </button>
              </div>

              {/* Decorative image */}
              <div className="hidden md:block absolute w-[180px] md:w-[215px] h-[270px] md:h-[322px] aspect-[215/322] right-[-20px] md:right-[-10px] bottom-0">
                <img src="/src/assets/images/customer-service.png" alt="Decoration" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
