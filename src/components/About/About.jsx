import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const About = () => {
  return (
    <section className="py-20 text-text-primary" id="tentang">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit font-bold">
            <span className="w-4 h-4 bg-primary rounded-full"></span>
            Tentang Kami
          </h2>
        </AnimateOnScroll>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <AnimateOnScroll delay={100} className="lg:w-2/5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight">
              Kualitas, Kecepatan, dan Kepercayaan Bersama Konektiva.
            </h3>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200} className="lg:w-3/5">
            <p className="text-text-secondary text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed">
              Konektiva hadir sebagai mitra teknologi terpercaya, menyediakan layanan internet berkualitas tinggi dan solusi produk IT terintegrasi untuk mendorong transformasi digital dan kemajuan teknologi di Indonesia.
            </p>
          </AnimateOnScroll>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* High Integrity Card */}
          <AnimateOnScroll delay={100} className="md:col-span-1 md:row-span-2">
            <div className="card bg-[url('/src/assets/images/high-integrity.png')] bg-cover bg-center rounded-[20px] p-8 text-white relative overflow-hidden h-full flex flex-col" style={{ minHeight: '515px' }}>
            <div className="relative z-10">
              <h4 className="text-2xl font-medium mb-3">High Integrity</h4>
              <p className="text-base leading-relaxed">
                Kami berkomitmen pada integritas tinggi, dengan menjunjung transparansi di setiap langkah untuk membangun kepercayaan penuh dari setiap klien.
              </p>
            </div>
            </div>
          </AnimateOnScroll>
          
          {/* Team Work Card */}
          <div className="flex flex-col gap-5 md:col-span-1 md:row-span-2">
            <AnimateOnScroll delay={150} className="h-full">
              <div className="card bg-[url('/src/assets/images/team-work.png')] bg-cover bg-center rounded-[20px] p-8 text-white relative overflow-hidden h-full flex flex-col" style={{ minHeight: '337px' }}>
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h4 className="text-2xl font-medium mb-3">Team Work</h4>
                <p className="text-base leading-relaxed">
                  Sinergi tim yang kuat menghasilkan solusi terbaik untuk klien kami.
                </p>
              </div>
              </div>
            </AnimateOnScroll>
            
            {/* Fearless Card */}
            <AnimateOnScroll delay={200} className="h-full">
              <div className="card bg-[url('/src/assets/images/fearless.png')] bg-cover bg-center rounded-[20px] p-8 text-white relative overflow-hidden h-full flex flex-col" style={{ minHeight: '159px' }}>
                <div className="relative z-10">
                  <h4 className="text-2xl font-medium mb-3">Fearless</h4>
                  <p className="text-base leading-relaxed">
                    Kami menghadapi tantangan dengan inovasi untuk mewujudkan keberhasilan Anda.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Excellent Service & Smart Working Cards */}
          <div className="flex flex-col gap-5 md:col-span-1 md:row-span-2">
            <AnimateOnScroll delay={150} className="h-full">
              <div className="card bg-[url('/src/assets/images/excellent-service.png')] bg-cover bg-center rounded-[20px] p-8 text-white relative overflow-hidden h-full flex flex-col" style={{ minHeight: '236px' }}>
              <div className="relative z-10">
                <h4 className="text-2xl font-medium mb-3">Excellent Service</h4>
                <p className="text-base leading-relaxed">
                  Kami berkomitmen memberikan layanan terbaik, dengan dedikasi penuh untuk memastikan kepuasan dan kenyamanan setiap klien.
                </p>
              </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200} className="h-full">
              <div className="card bg-[url('/src/assets/images/smart-working.png')] bg-cover bg-top rounded-[20px] p-8 text-white relative overflow-hidden h-full flex flex-col" style={{ minHeight: '259px' }}>
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <h4 className="text-2xl font-medium mb-3">Smart Working</h4>
                  <p className="text-base leading-relaxed">
                    Solusi inovatif dan efisien melalui pendekatan kerja yang cerdas dan terarah.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
