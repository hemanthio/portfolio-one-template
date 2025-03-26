// import React from 'react';

// const Services = () => {
//   const serviceItems = [
//     { name: 'Web Design', color: 'bg-gray-400' },
//     { name: 'App Development', color: 'bg-lime-200' },
//     { name: 'Animations', color: 'bg-amber-100' }
//   ];

//   return (
//     <div className="w-full aspect-square bg-white p-6 rounded-2xl flex flex-col">
//       <h2 className="text-gray-400 text-sm font-medium mb-4 ">SERVICES</h2>
//       <div className="flex flex-col justify-center space-y-4 flex-grow">
//         {serviceItems.map((service, index) => (
//           <div 
//             key={index} 
//             className={`
//               ${service.color} 
//               text-base 
//               font-semibold
//               text-black/80 
//               py-8 
//               px-4 
//               rounded-lg 
//               text-center 
//               transition-all 
//               duration-300 
//               hover:scale-105
//             `}
//           >
//             {service.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';

const Services = () => {
  const serviceItems = [
    { name: 'Web Design', color: 'from-blue-100/30 to-white/20' },
    { name: 'App Development', color: 'from-green-100/30 to-white/20' },
    { name: 'Animations', color: 'from-amber-100/30 to-white/20' }
  ];

  return (
    <div className="w-full aspect-square bg-white dark:bg-neutral-900 p-6 rounded-2xl flex flex-col">
      <h2 className="text-gray-400 text-sm font-medium mb-4">SERVICES</h2>
      <div className="flex flex-col justify-center space-y-4 flex-grow">
        {serviceItems.map((service, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br ${service.color}
              backdrop-blur-md
              border border-white/20
              text-base
              font-semibold
              text-gray-800 dark:text-white
              py-8
              px-4
              rounded-xl
              text-center
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              shadow-md
              relative
              overflow-hidden
            `}
          >
            {/* Glassy overlay effect */}
            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
            
            {/* Service name */}
            <span className="relative z-10">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;