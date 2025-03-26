
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "We needed a website redesign on a tight deadline, and [Your Agency Name] delivered beyond expectations.",
      author: "Michael",
      img : "https://images.unsplash.com/photo-1742201835826-3b607fa4e8b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      quote: "Our website went from slow and confusing to fast and intuitive, thanks to [Your Agency Name].",
      author: "Rachael",
      img:"https://images.unsplash.com/photo-1742558701206-55aa0c21cc8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    },
    {
      id: 3,
      quote: "The team at [Your Agency Name] understood our vision perfectly and executed it flawlessly.",
      author: "Sarah",
      img:"https://plus.unsplash.com/premium_photo-1739526444269-8e67dcd3e4d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      quote: "Our online sales increased by 200% after [Your Agency Name] revamped our e-commerce site.",
      author: "David",
      img:"https://images.unsplash.com/photo-1742505709397-7d0cdeaaaf4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    },
    {
      id: 5,
      quote: "Professional, creative, and deadline-oriented. Couldn't ask for a better web development partner.",
      author: "Jessica",
      img:"https://images.unsplash.com/photo-1742306492021-817ebf6a344a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    }
  ];

  // Duplicate the testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full aspect-square rounded-[18px] font-inter bg-white p-4 overflow-hidden relative">
      <h2 className="text-sm text-gray-400  font-medium p-3  mb-2">TESTIMONIALS</h2>
      
     
      
      <div className="h-[calc(100%-4rem)] overflow-hidden relative">
        <div className="animate-marquee-vertical">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="mb-4 tracking-[-0.5px] p-6 bg-white rounded-lg flex flex-col items-end shadow-md mx-4">
              <p className="text-gray-700 mb-2">{testimonial.quote}</p>
              <div className="flex items-center gap-2">
              <img src={testimonial.img} alt="" width={20} height={20} 
                className="rounded-full w-[24px] h-[24px] object-cover"
              />
              <p className="font-medium  text-gray-900">{testimonial.author}</p>
              </div>
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