import React from 'react';

const ExpertiseCard = () => {
  return (
    <div className="w-full aspect-square rounded-2xl bg-black text-white flex flex-col justify-center items-center p-6 space-y-4">
      <div className="flex w-full justify-around">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">03</span>
          <span className="text-green-500 text-sm">years expertise</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">20</span>
          <span className="text-green-500 text-sm">Happy Clients</span>
        </div>
      </div>
      <div className="flex items-center bg-green-500 text-black px-4 py-2 rounded-full">
        <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
        <span>available to work</span>
      </div>
      <div className="text-green-500 text-sm">
        Based in hyderabad, India
      </div>
    </div>
  );
};

export default ExpertiseCard;