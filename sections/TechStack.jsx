import React from 'react';

const TechStack = () => {
  const techStackItems = [
    { name: 'Figma', isHighlighted: true },
    { name: 'Next.JS', isHighlighted: false },
    { name: 'Framer', isHighlighted: false },
    { name: 'Next.JS', isHighlighted: true },
    { name: 'Creative ', isHighlighted: false },
    { name: 'Cursor', isHighlighted: true},
    { name: 'Claude ', isHighlighted: false },
    { name: 'Supabase', isHighlighted: true },
    { name: 'Creative Developer', isHighlighted: false }
  ];

  return (
    <div className="p-4 w-full aspect-square rounded-[18px] flex justify-center items-center bg-white dark:bg-black">
      <div className='h-full w-full flex flex-col'>
        <h2 className=" text-gray-400 dark:text-white text-sm font-medium  mb-auto pt-4 pl-4">TECH STACK</h2>
        <div className="flex flex-wrap gap-2 justify-center items-center px-4 pb-22">
          {techStackItems.map((item, index) => (
            <span
              key={index}
              className={`
                text-sm px-3 py-1 rounded-full
                ${item.isHighlighted
                  ? 'dark:bg-white bg-black border-black text-white dark:text-gray-500'
                  : 'bg-transparent dark:text-white text-gray-800 border dark:border-white border-black/40'}
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