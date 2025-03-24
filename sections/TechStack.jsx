import React from 'react';

const TechStack = () => {
  const techStackItems = [
    { name: 'Figma', isHighlighted: true },
    { name: 'Next.JS', isHighlighted: false },
    { name: 'Creative Developer', isHighlighted: false },
    { name: 'Next.JS', isHighlighted: true },
    { name: 'Creative ', isHighlighted: false },
    { name: 'Next.JS', isHighlighted: true },
    { name: 'Creative ', isHighlighted: false },
    { name: 'Creative Developer', isHighlighted: false },
    { name: 'Creative Developer', isHighlighted: false }
  ];

  return (
    <div className="p-4 w-full aspect-square rounded-[18px] flex justify-center items-center bg-black">
      <div className='h-full w-full flex flex-col'>
        <h2 className="text-white text-base font-base mb-auto pt-4 pl-4">TECH STACK</h2>
        <div className="flex flex-wrap gap-2 justify-center items-center px-4 pb-12">
          {techStackItems.map((item, index) => (
            <span
              key={index}
              className={`
                text-base px-3 py-1 rounded-full
                ${item.isHighlighted
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-white'}
              `}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;