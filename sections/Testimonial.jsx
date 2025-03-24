import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "We needed a website redesign on a tight deadline, and [Your Agency Name] delivered beyond expectations.",
      author: "Michael"
    },
    {
      id: 2,
      quote: "Our website went from slow and confusing to fast and intuitive, thanks to [Your Agency Name].",
      author: "Rachael"
    },
    {
      id: 3,
      quote: "The team at [Your Agency Name] understood our vision perfectly and executed it flawlessly.",
      author: "Sarah"
    },
    {
      id: 4,
      quote: "Our online sales increased by 200% after [Your Agency Name] revamped our e-commerce site.",
      author: "David"
    },
    {
      id: 5,
      quote: "Professional, creative, and deadline-oriented. Couldn't ask for a better web development partner.",
      author: "Jessica"
    }
  ];

  // Duplicate the testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full aspect-square rounded-[18px] bg-gray-50 p-4 overflow-hidden relative">
      <h2 className="text-xl font-bold text-center mb-3">TESTIMONIALS</h2>
      
      {/* Top blur gradient */}
      <div className="absolute top-10 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Bottom blur gradient */}
      <div className="absolute bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="h-[calc(100%-4rem)] overflow-hidden relative">
        <div className="animate-marquee-vertical">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="mb-4 p-6 bg-white rounded-lg shadow-md mx-4">
              <p className="text-gray-700 mb-2">{testimonial.quote}</p>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add custom animation to Tailwind */}
      <style jsx global>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 20s linear infinite;
        }
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;