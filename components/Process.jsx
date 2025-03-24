// ProcessStep.jsx
import React from "react";

const ProcessStep = ({ number, title }) => {
  return (
    <div className="flex items-center mb-3">
      <div className="w-full bg-neutral-800 rounded-lg flex items-center p-1">
        <div className="bg-neutral-700 rounded-md w-12 h-10 flex items-center justify-center mr-4">
          <span className="text-white text-base font-medium">{number}</span>
        </div>
        <h3 className="text-white text-base font-normal">{title}</h3>
      </div>
    </div>
  );
};

export default ProcessStep;