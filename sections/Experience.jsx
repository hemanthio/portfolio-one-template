import React, { useState, useEffect } from 'react';

const ExpertiseCard = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animateNumber = (setter, target) => {
      let current = 0;
      const increment = target / 50; // Smooth animation over 50 frames
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 20);
    };

    animateNumber(setYears, 3);
    animateNumber(setClients, 20);
  }, []);

  return (
    <div className="w-full aspect-square font-inter dark:bg-black  bg-white rounded-2xl   p-4 flex flex-col justify-center items-center space-y-4 transition-transform duration-300">
      <div className="w-full text-center border  dark:border-gray-400/60  border-gray-400/50 rounded-xl p-4">
        <div className="text-4xl font-medium dark:text-white text-gray-800">
          {years}+
        </div>
        <div className="text-base tracking-tighter dark:text-white/60 text-gray-600 ">
          years experience
        </div>
      </div>
      
      <div className="w-full text-center border dark:border-gray-400/60  border-gray-400/50 rounded-xl p-4">
        <div className="text-4xl font-medium dark:text-white text-gray-800">
          {clients}+
        </div>
        <div className="text-base tracking-tighter dark:text-white/60  text-gray-600">
          Happy clients
        </div>
      </div>
      
      <div className="w-full text-center rounded-xl p-4">
        <div className="flex justify-center items-center gap-2 mx-7 px-4 py-2 border border-green-500 text-black dark:text-white rounded-full">
        <div className='w-3 h-3 rounded-full bg-green-500'></div>
          available to work
        </div>
        <div className="text-base font-inter tracking-tighter dark:text-white/70 text-gray-900 mt-2">
          Based in hyderabad, India
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;