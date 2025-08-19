import React from 'react';

interface TekWebLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TekWebLogo: React.FC<TekWebLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-20 h-8',
    md: 'w-28 h-10',
    lg: 'w-36 h-12'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <div className="flex items-center space-x-2">
        {/* "1" part */}
        <div className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl">
          1
        </div>
        
        {/* "0" with integrated globe */}
        <div className="relative">
          <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-4 border-primary rounded-full flex items-center justify-center">
            {/* Globe icon inside the "0" */}
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          {/* Rectangle frame around the globe */}
          <div className="absolute -inset-1 border-2 border-primary rounded-sm opacity-60"></div>
        </div>
        
        {/* TEKWEB text */}
        <div className="text-primary font-bold text-lg md:text-xl lg:text-2xl ml-2">
          TEKWEB
        </div>
      </div>
    </div>
  );
};

export default TekWebLogo;