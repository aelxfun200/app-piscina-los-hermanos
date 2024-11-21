import React from 'react';

export const AnimatedWaveform: React.FC = () => (
  <div className="flex items-center justify-center space-x-1">
    {[1,2,3,4,5].map((i) => (
      <div
        key={i}
        className="w-1 bg-blue-500 rounded-full animate-pulse"
        style={{
          animationDelay: `${i * 0.1}s`,
          height: `${Math.random() * 24 + 8}px`
        }}
      />
    ))}
  </div>
);