// import React, { useState } from 'react';

// const FAQ = () => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What services does your agency offer?",
//       answer: "We offer web design, app development, and animation services to help bring your digital ideas to life."
//     },
//     {
//       question: "How long does a typical project take?",
//       answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks and apps take 8-12 weeks from start to finish."
//     },
//     {
//       question: "What's your pricing structure?",
//       answer: "We offer both fixed-price projects for well-defined scopes and hourly rates for ongoing work. Contact us for a custom quote."
//     },
//     {
//       question: "Do you provide ongoing maintenance?",
//       answer: "Yes, we offer monthly maintenance packages that include updates, security checks, and minor content changes."
//     },
//     {
//       question: "What technologies do you work with?",
//       answer: "We use modern frameworks like React, Next.js, Flutter, and Three.js depending on project requirements."
//     },
//     {
//       question: "How do we get started?",
//       answer: "Simply contact us for a free consultation where we'll discuss your needs and provide a project proposal."
//     }
//   ];

//   const toggleAnswer = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Show first 3 questions as preview
//   const previewQuestions = faqs.slice(0, 3);

//   return (
//     <div className="w-full aspect-square rounded-[18px] bg-white p-6 overflow-hidden border border-gray-200">
//       {/* Header */}
//       <h2 className="text-sm  font-medium text-gray-400 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      
//       {/* Preview questions */}
//       <div className="space-y-3 mb-4">
//         {previewQuestions.map((faq, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-xs border border-gray-100">
//             <h3 className="text-base font-medium text-gray-700">{faq.question}</h3>
//           </div>
//         ))}
//       </div>

//       {/* View all button */}
//       <button 
//         onClick={() => setShowOverlay(true)}
//         className="text-base text-blue-600 hover:text-blue-800 font-medium mt-auto"
//       >
//         View all questions →
//       </button>

//       {/* Full overlay */}
//       {showOverlay && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div 
//             className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
//               <h3 className="text-base font-semibold text-gray-800">All Questions</h3>
//               <button 
//                 onClick={() => {
//                   setShowOverlay(false);
//                   setExpandedIndex(null);
//                 }}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="overflow-y-auto p-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="mb-4 last:mb-0">
//                   <div 
//                     className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
//                     onClick={() => toggleAnswer(index)}
//                   >
//                     <h4 className="text-base font-medium text-gray-800">{faq.question}</h4>
//                     <span className="text-gray-500 ml-4">
//                       {expandedIndex === index ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
//                         </svg>
//                       ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
//                         </svg>
//                       )}
//                     </span>
//                   </div>
                  
//                   {expandedIndex === index && (
//                     <div className="pl-3 pr-3 pb-3 text-base text-gray-600">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from "react";

const FAQ = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What services does your agency offer?",
      answer: "We offer web design, app development, and animation services to help bring your digital ideas to life."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks and apps take 8-12 weeks from start to finish."
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer both fixed-price projects for well-defined scopes and hourly rates for ongoing work. Contact us for a custom quote."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer monthly maintenance packages that include updates, security checks, and minor content changes."
    },
    {
      question: "What technologies do you work with?",
      answer: "We use modern frameworks like React, Next.js, Flutter, and Three.js depending on project requirements."
    },
    {
      question: "How do we get started?",
      answer: "Simply contact us for a free consultation where we'll discuss your needs and provide a project proposal."
    }
  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const previewQuestions = faqs.slice(0, 3);

  return (
    <div className="w-full aspect-square rounded-[18px] bg-white p-6 overflow-hidden border border-gray-200 relative">
      <h2 className="text-sm font-medium text-gray-400 mb-4">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="space-y-3 mb-4 my-8 relative">
        {previewQuestions.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-xs border border-gray-100 backdrop-blur-sm opacity-70"
          >
            <h3 className="text-base font-medium text-gray-700">{faq.question}</h3>
          </div>
        ))}
        <div className="absolute inset-0 bg-white backdrop-blur-md opacity-50 pointer-events-none"></div>
      </div>

      <button
        onClick={() => setShowOverlay(true)}
        className="w-full py-3 cursor-pointer  text-white bg-black font-medium rounded-lg mt-auto"
      >
        View all questions →
      </button>

      {showOverlay && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 rounded-xl bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-base font-semibold text-gray-800">All Questions</h3>
              <button
                onClick={() => {
                  setShowOverlay(false);
                  setExpandedIndex(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-4">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div
                    className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
                    onClick={() => toggleAnswer(index)}
                  >
                    <h4 className="text-base font-medium text-gray-800">{faq.question}</h4>
                    <span className="text-gray-500 ml-4">
                      {expandedIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </div>

                  {expandedIndex === index && (
                    <div className="pl-3 pr-3 pb-3 text-base text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
