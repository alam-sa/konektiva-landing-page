import React from 'react';

const Clients = () => {
  // Client logos data
  const clients = [
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

  // Split clients into two rows (5 in first row, 4 in second row)
  const firstRow = clients.slice(0, 5);
  const secondRow = clients.slice(5);

  return (
    <section className="py-16 bg-white" id="klien">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-base font-bold uppercase mb-4 flex items-center gap-3 w-fit mx-auto">
            <span className="w-4 h-4 bg-primary rounded-full"></span>
            Klien Kami
          </h2>
          <h3 className="text-2xl font-medium text-text-primary mb-4">
          Dipercaya oleh berbagai klien dari berbagai industri untuk solusi internet dan IT terbaik
          </h3>
        </div>
  
        {/* Client Logos Grid */}
        <div className="w-full">
          {/* First Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-12">
            {firstRow.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="px-5 py-3">
                  <img 
                    src={`/src/assets/images/${logo}`} 
                    alt={`Client ${index + 1}`} 
                    className="h-22 w-auto max-w-[200px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {secondRow.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="px-5 py-3">
                  <img 
                    src={`/src/assets/images/${logo}`} 
                    alt={`Client ${index + 6}`} 
                    className="h-22 w-auto max-w-[200px] object-contain"
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
