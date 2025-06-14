import React from 'react';

const Clients = () => {
  // Client logos data
  const clientLogos = [
    'client-1.png',
    'client-2.png',
    'client-3.png',
    'client-4.png',
    'client-5.png',
    'client-6.png',
    'client-7.png',
    'client-8.png',
    'client-9.png'
  ];

  return (
    <section className="py-20 bg-white" id="klien">
      <div className="container">
        <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit mx-auto">
          <span className="w-4 h-4 bg-primary rounded-full"></span>
          Klien Kami
        </h2>
        <h3 className="text-2xl font-medium mb-20 text-center">
          Dipercaya oleh berbagai klien dari berbagai industri untuk solusi internet dan IT terbaik
        </h3>
  
        {/* Client Logos Grid */}
        <div className="w-full py-12 lg:py-16">
          {/* First Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-12 lg:mb-16">
            {clientLogos.slice(0, 5).map((logo, index) => (
              <div key={index} className="w-[40%] sm:w-[28%] md:w-[20%] lg:w-[18%] p-3 lg:p-4">
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex items-center">
                  <img 
                    src={`/src/assets/images/${logo}`} 
                    alt={`Client ${index + 1}`} 
                    className="w-full h-auto max-h-14 lg:max-h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mt-8 lg:mt-12">
            {clientLogos.slice(5).map((logo, index) => (
              <div key={index} className="w-[40%] sm:w-[28%] md:w-[20%] lg:w-[18%] p-3 lg:p-4">
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex items-center">
                  <img 
                    src={`/src/assets/images/${logo}`} 
                    alt={`Client ${index + 6}`} 
                    className="w-full h-auto max-h-14 lg:max-h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
