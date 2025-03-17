import React from 'react';

const LogoSlider = ({ logos = [] }) => {
  const logosToUse = logos.length > 0 ? logos : [];

  const duplicatedLogos = [...logosToUse, ...logosToUse];

  return (
    <div className="flex-1 overflow-hidden">
      <div className="relative">

        {/* The actual scrolling container */}
        <div className="flex gap-x-8 sm:gap-x-16 md:gap-x-24 logo-marquee max-h-16">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="h-12 sm:h-14 md:h-16"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
      @keyframes marquee {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(-50%);
        }
      }
      
      .logo-marquee {
        animation: marquee 5s linear infinite;
      }
      `}</style>
    </div>
  );
};

export default LogoSlider;