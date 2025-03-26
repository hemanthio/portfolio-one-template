import React from 'react';

// Social media links configuration
const socialLinks = {
  twitter: 'https://twitter.com/your_username',
  instagram: 'https://instagram.com/your_username',
  linkedin: 'https://linkedin.com/in/your_username',
  youtube: 'https://youtube.com/your_channel'
};

const SocialLinks = () => {
  // Social media icons configuration
  const socialIcons = {
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.557L24 22.847h-7.406l-5.8-7.6-6.638 7.6H1.474l8.627-9.82L0 1.153h7.594l5.243 6.925L18.901 1.153zm-1.174 19.456h2.034L6.008 3.245H3.85l13.877 17.364z"/>
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.694-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.246 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    )
  };

  return (
    <div className="w-full aspect-square dark:bg-black bg-white rounded-[18px] p-6 flex flex-col">
      <h2 className="text-gray-400 text-sm font-medium  mb-8">SOCIALS</h2>
      
      <div className="relative flex-1 w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {Object.entries(socialLinks).map(([platform, link], index) => {
              const angle = (index / Object.keys(socialLinks).length) * (2 * Math.PI);
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute top-1/2 left-1/2 
                    w-20 h-20 
                    bg-gray-900 
                    rounded-full 
                    flex items-center justify-center 
                    text-white 
                    hover:bg-gray-800
                    transition-all duration-300
                    group
                    border border-gray-700
                  "
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)`,
                    boxShadow: `
                      0px 18.57px 43.32px 0px rgba(255, 255, 255, 0.15) inset,
                      0px 3.71px 30.94px 0px rgba(0, 0, 0, 0.3) inset,
                      0 4px 6px rgba(0,0,0,0.1)
                    `
                  }}
                >
                  <div className="w-8 h-8 group-hover:scale-110 transition-transform">
                    {socialIcons[platform]}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;