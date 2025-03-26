// ProcessList.jsx
import React from "react";
import ProcessStep from "../components/Process";

const ProcessList = () => {
  const steps = [
    { number: 1, title: "Discovery & Strategy" },
    { number: 2, title: "Planning " },
    { number: 3, title: "Design & Prototyping " },
    { number: 4, title: "Development" },
    { number: 4, title: "Testing & Launch" },

    
  ];

  return (
    <div className="w-full bg-[#ffffff]  dark:bg-black p-8 rounded-3xl">
      <h2 className="text-gray-400 text-sm font-medium mb-5 pl-2">PROCESS</h2>
      
      <div className="max-w-3xl flex flex-col justify-center mx-auto">
        {steps.map((step) => (
          <ProcessStep 
            key={step.number}
            number={step.number}
            title={step.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessList;