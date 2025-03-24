// ProcessList.jsx
import React from "react";
import ProcessStep from "../components/Process";

const ProcessList = () => {
  const steps = [
    { number: 1, title: "Goals & Objectives" },
    { number: 2, title: "Goals & Objectives" },
    { number: 3, title: "Goals & Objectives" },
    { number: 4, title: "Goals & Objectives" },
    { number: 5, title: "Goals & Objectives" },
  ];

  return (
    <div className="w-full  bg-black p-8 rounded-3xl">
      <h2 className="text-gray-400 text-base font-semibold mb-5 pl-2">PROCESS</h2>
      
      <div className="max-w-3xl mx-auto">
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