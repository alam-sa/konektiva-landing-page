import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import Lottie from 'lottie-react';
import internetAnimation from '../../assets/json/internet_18994922.json';
import servicesAnimation from '../../assets/json/services_16766957.json';
import consultationAnimation from '../../assets/json/consultation_10690276.json';
import designAnimation from '../../assets/json/vector_8800707.json';
import webAnimation from '../../assets/json/domain_14447789.json';
import mobileAnimation from '../../assets/json/mobile-apps_14447489.json';

const services = [
  {
    title: "Internet Connection",
    description: "Rasakan pengalaman internet terbaik dengan kecepatan tinggi dan koneksi stabil melalui layanan unggulan kami.",
    animation: internetAnimation
  },
  {
    title: "Manage Service",
    description: "Optimalkan operasional bisnis Anda dengan layanan managed service yang andal dan tepercaya dari Konektiva.",
    animation: servicesAnimation
  },
  {
    title: "IT Consultant",
    description: "Dapatkan solusi IT terbaik melalui layanan konsultasi profesional dari tim ahli kami.",
    animation: consultationAnimation
  },
  {
    title: "Design Graphic",
    description: "Desain grafis profesional untuk mendukung ide dan identitas visual Anda",
    animation: designAnimation
  },
  {
    title: "Web Development",
    description: "Dapatkan website profesional yang responsif, menarik, dan siap mendukung kebutuhan digital bisnis Anda",
    animation: webAnimation
  },
  {
    title: "Mobile Development",
    description: "Dapatkan aplikasi mobile inovatif dan user-friendly melalui layanan pengembangan mobile terbaik dari kami.",
    animation: mobileAnimation
  }
];

const ServiceCard = ({ title, description, animation, delay }) => (
  <AnimateOnScroll delay={delay}>
    <div className="h-full">
      <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center h-full transform hover:-translate-y-1">
        <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
          <Lottie animationData={animation} loop={true} />
        </div>
        <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{title}</h4>
        <div className="flex-1 flex items-center">
          <p className="text-text-secondary text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

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
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              animation={service.animation}
              delay={100 + (index % 3) * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
