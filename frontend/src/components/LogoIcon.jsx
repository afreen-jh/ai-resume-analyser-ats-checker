import React from 'react';

const LogoIcon = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="42" 
      height="42" 
      className="inline"
    >
      <defs>
        <linearGradient id="scan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="laser-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#a3e635" />
        </linearGradient>
      </defs>

      {/* Background Shield/Badge */}
      <rect x="5" y="5" width="90" height="90" rx="28" fill="url(#scan-grad)" />

      {/* Resume Page Frame */}
      <rect x="32" y="25" width="36" height="50" rx="4" fill="none" stroke="#ffffff" strokeWidth="5" />

      {/* Internal Text Lines */}
      <line x1="40" y1="38" x2="60" y2="38" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <line x1="40" y1="50" x2="54" y2="50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />

      {/* The AI Scan Line (Laser) */}
      <rect x="22" y="56" width="56" height="6" rx="3" fill="url(#laser-glow)" />
    </svg>
  );
};

export default LogoIcon;