// ProcessStep.jsx
import React from "react";

const ProcessStep = ({ number, title }) => {
  return (
    <div className="flex items-center mb-3">
      <div className="w-full bg-[#f1f1f1] dark:bg-[#686666]/40 rounded-lg flex items-center p-1">
        <div className="bg-[#e0e0e0] dark:bg-[#FFFFFF]/10  rounded-md w-12 h-10 flex items-center justify-center mr-4">
          <span className="text-black dark:text-white text-base font-medium">{number}</span>
        </div>
        <h3 className="text-black/70 dark:text-white text-base tracking-[-0.6px] font-inter font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default ProcessStep;

