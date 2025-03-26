// import React, { useState } from 'react';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showOverlay, setShowOverlay] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       name: "E-commerce Platform",
//       description: "A full-featured online store with product management, cart functionality, and secure checkout.",
//       tech: ["React", "Node.js", "MongoDB", "Stripe API"],
//       images: [
//         "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//         "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
//       ],
//       thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
//     },
//     {
//       id: 2,
//       name: "Health & Fitness App",
//       description: "Mobile application for workout tracking, nutrition planning, and progress analytics.",
//       tech: ["Flutter", "Firebase", "Google Fit API"],
//       images: [
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//         "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
//       ],
//       thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
//     },
//     {
//       id: 3,
//       name: "Corporate Dashboard",
//       description: "Analytics dashboard with real-time data visualization for business intelligence.",
//       tech: ["Next.js", "Tailwind CSS", "D3.js", "REST API"],
//       images: [
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
//       ],
//       thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
//     }
//   ];

//   return (
//     <div className="w-full aspect-square rounded-[18px] bg-white p-6 overflow-hidden border border-gray-200">
//       {/* Header */}
//       <h2 className="text-sm font-medium text-gray-400 mb-4">OUR PROJECTS</h2>
      
//       {/* Projects list */}
//       <div className="space-y-3 mb-4 h-[calc(100%-3rem)] overflow-y-auto">
//         {projects.map((project) => (
//           <div 
//             key={project.id}
//             onClick={() => {
//               setSelectedProject(project);
//               setShowOverlay(true);
//             }}
//             className="bg-white rounded-lg shadow-xs border border-gray-100 hover:shadow-sm transition cursor-pointer flex"
//           >
//             {/* Project thumbnail */}
//             <div className="w-1/3 min-w-[100px] max-w-[150px]">
//               <img 
//                 src={project.thumbnail} 
//                 alt={project.name}
//                 className="w-full h-full object-cover rounded-l-lg"
//               />
//             </div>
            
//             {/* Project details */}
//             <div className="p-4 flex-1">
//               <h3 className="text-base font-medium text-gray-800">{project.name}</h3>
//               <p className="text-sm text-gray-600 mt-1 line-clamp-2">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.tech.slice(0, 2).map((tech, i) => (
//                   <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                     {tech}
//                   </span>
//                 ))}
//                 {project.tech.length > 2 && (
//                   <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                     +{project.tech.length - 2}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Project overlay (unchanged from your excellent version) */}
//       {showOverlay && selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div 
//             className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button 
//               onClick={() => setShowOverlay(false)}
//               className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1 shadow"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             {/* Left side - Project details */}
//             <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProject.name}</h3>
//               <p className="text-base text-gray-600 mb-6">{selectedProject.description}</p>
              
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Technologies Used</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tech.map((tech, i) => (
//                     <span key={i} className="text-sm bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Project Highlights</h4>
//                 <ul className="space-y-2 text-base text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-blue-500 mr-2">•</span>
//                     <span>Responsive design that works across all devices</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-blue-500 mr-2">•</span>
//                     <span>Optimized for performance and fast loading</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-blue-500 mr-2">•</span>
//                     <span>Secure authentication and data protection</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//             {/* Right side - Project images */}
//             <div className="lg:w-1/2 bg-gray-100 overflow-y-auto">
//               <div className="grid gap-4 p-4">
//                 {selectedProject.images.map((image, index) => (
//                   <div key={index} className="rounded-lg overflow-hidden shadow-sm">
//                     <img 
//                       src={image} 
//                       alt={`Project screenshot ${index + 1}`}
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and secure checkout.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      images: [
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Health & Fitness App",
      description: "Mobile application for workout tracking, nutrition planning, and progress analytics.",
      tech: ["Flutter", "Firebase", "Google Fit API"],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Corporate Dashboard",
      description: "Analytics dashboard with real-time data visualization for business intelligence.",
      tech: ["Next.js", "Tailwind CSS", "D3.js", "REST API"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      ],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="w-full aspect-square rounded-[18px] bg-white dark:bg-black  p-6 overflow-hidden  ">
      {/* Header */}
      <h2 className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-4">OUR PROJECTS</h2>
      
      {/* Projects list */}
      <div className="space-y-3 mb-4 h-[calc(100%-3rem)] overflow-y-auto">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              setShowOverlay(true);
            }}
            className="bg-white dark:bg-black rounded-lg shadow-xs border border-gray-100 dark:border-gray-700 hover:shadow-sm transition cursor-pointer flex"
          >
            {/* Project thumbnail */}
            <div className="w-1/3 min-w-[100px] max-w-[150px]">
              <img 
                src={project.thumbnail} 
                alt={project.name}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            
            {/* Project details */}
            <div className="p-4 flex-1">
              <h3 className="text-base font-medium text-gray-800 dark:text-gray-200">{project.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.slice(0, 2).map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    +{project.tech.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project overlay */}
      {showOverlay && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white dark:bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-white dark:bg-gray-900 rounded-full p-1 shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Left side - Project details */}
            <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{selectedProject.name}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Project Highlights</h4>
                <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span>Responsive design that works across all devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span>Optimized for performance and fast loading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span>Secure authentication and data protection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right side - Project images */}
            <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
              <div className="grid gap-4 p-4">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={image} 
                      alt={`Project screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;