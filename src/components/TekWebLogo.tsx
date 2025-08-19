import React from 'react';

interface TekWebLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TekWebLogo: React.FC<TekWebLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 400 100" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Number "1" */}
        <path 
          d="M15 85V25L35 20V85H15Z" 
          fill="hsl(var(--primary))"
        />
        
        {/* Globe circle */}
        <circle 
          cx="65" 
          cy="50" 
          r="18" 
          stroke="hsl(var(--primary))" 
          strokeWidth="3" 
          fill="none"
        />
        
        {/* Globe grid lines */}
        <path 
          d="M47 50C47 50 54 42 65 42C76 42 83 50 83 50M47 50C47 50 54 58 65 58C76 58 83 50 83 50M65 32V68M52 38C52 38 58 44 65 44C72 44 78 38 78 38M52 62C52 62 58 56 65 56C72 56 78 62 78 62" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        {/* Rectangle frame around globe */}
        <rect 
          x="90" 
          y="35" 
          width="10" 
          height="30" 
          stroke="hsl(var(--primary))" 
          strokeWidth="3" 
          fill="none"
        />
        <rect 
          x="95" 
          y="30" 
          width="10" 
          height="5" 
          stroke="hsl(var(--primary))" 
          strokeWidth="3" 
          fill="none"
        />
        <rect 
          x="95" 
          y="65" 
          width="10" 
          height="5" 
          stroke="hsl(var(--primary))" 
          strokeWidth="3" 
          fill="none"
        />
        
        {/* TEKWEB text */}
        <text 
          x="120" 
          y="60" 
          fontSize="32" 
          fontWeight="700" 
          fill="hsl(var(--primary))" 
          fontFamily="Inter, sans-serif"
        >
          TEKWEB
        </text>
      </svg>
    </div>
  );
};

export default TekWebLogo;