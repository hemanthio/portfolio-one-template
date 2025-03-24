import React from 'react';

const Services = () => {
  const serviceItems = [
    { name: 'Web Design', color: 'bg-lime-300' },
    { name: 'App Development', color: 'bg-lime-200' },
    { name: 'Animations', color: 'bg-amber-100' }
  ];

  return (
    <div className="w-full aspect-square bg-black p-6 rounded-2xl flex flex-col">
      <h2 className="text-white text-base font-bold mb-4 text-center">SERVICES</h2>
      <div className="flex flex-col justify-center space-y-4 flex-grow">
        {serviceItems.map((service, index) => (
          <div 
            key={index} 
            className={`
              ${service.color} 
              text-base 
              text-black 
              py-3 
              px-4 
              rounded-lg 
              text-center 
              transition-all 
              duration-300 
              hover:scale-105
            `}
          >
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;