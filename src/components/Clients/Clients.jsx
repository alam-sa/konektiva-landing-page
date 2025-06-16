import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import client1 from '../../assets/images/client-1.png';
import client2 from '../../assets/images/client-2.png';
import client3 from '../../assets/images/client-3.png';
import client4 from '../../assets/images/client-4.png';
import client5 from '../../assets/images/client-5.png';
import client6 from '../../assets/images/client-6.png';
import client7 from '../../assets/images/client-7.png';
import client8 from '../../assets/images/client-8.png';
import client9 from '../../assets/images/client-9.png';

const Clients = () => {
  // Client logos data with imported images
  const clients = [
    { id: 1, src: client1, alt: 'Client 1' },
    { id: 2, src: client2, alt: 'Client 2' },
    { id: 3, src: client3, alt: 'Client 3' },
    { id: 4, src: client4, alt: 'Client 4' },
    { id: 5, src: client5, alt: 'Client 5' },
    { id: 6, src: client6, alt: 'Client 6' },
    { id: 7, src: client7, alt: 'Client 7' },
    { id: 8, src: client8, alt: 'Client 8' },
    { id: 9, src: client9, alt: 'Client 9' },
  ];

  // Split clients into two rows (5 in first row, 4 in second row)
  const firstRow = clients.slice(0, 5);
  const secondRow = clients.slice(5);

  return (
    <section className="py-16 bg-white" id="klien">
      <div className="container px-4">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit mx-auto">
              <span className="w-4 h-4 bg-primary rounded-full"></span>
              Klien Kami
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h3 className="text-2xl font-medium text-text-primary mb-4">
              Dipercaya oleh berbagai klien dari berbagai industri untuk solusi internet dan IT terbaik
            </h3>
          </AnimateOnScroll>
        </div>
  
        {/* Client Logos Grid */}
        <div className="w-full">
          {/* First Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-12">
            {firstRow.map((logo, index) => (
              <AnimateOnScroll key={index} delay={100 + (index * 50)}>
                <div className="flex-shrink-0">
                  <div className="px-5 py-3">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="h-22 w-auto max-w-[200px] object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {secondRow.map((logo, index) => (
              <AnimateOnScroll key={index} delay={150 + (index * 50)}>
                <div className="flex-shrink-0">
                  <div className="px-5 py-3">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="h-22 w-auto max-w-[200px] object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
