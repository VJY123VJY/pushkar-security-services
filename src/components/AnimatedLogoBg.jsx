import React from 'react';
import { siteConfig } from '../config/siteConfig';

// Professional animated logo watermark instances with varied animations
const LOGO_INSTANCES = [
  // Large background logos - very subtle
  { top: '2%',   left: '5%',    size: 120, opacity: 0.025, duration: 28, delay: 0,   rotate: -12, animType: 'drift' },
  { top: '15%',  left: '70%',   size: 110, opacity: 0.02,  duration: 32, delay: 4,   rotate: 8,   animType: 'drift' },
  { top: '45%',  left: '40%',   size: 140, opacity: 0.018, duration: 36, delay: 8,   rotate: -5,  animType: 'drift' },
  { top: '75%',  left: '15%',   size: 130, opacity: 0.022, duration: 30, delay: 12,  rotate: 15,  animType: 'drift' },
  { top: '85%',  left: '75%',   size: 100, opacity: 0.02,  duration: 34, delay: 6,   rotate: -10, animType: 'drift' },
  
  // Medium logos - slightly more visible
  { top: '8%',   left: '85%',   size: 72,  opacity: 0.035, duration: 22, delay: 2,   rotate: 12,  animType: 'glow' },
  { top: '25%',  left: '20%',   size: 80,  opacity: 0.03,  duration: 26, delay: 5,   rotate: -8,  animType: 'drift' },
  { top: '32%',  left: '60%',   size: 68,  opacity: 0.035, duration: 20, delay: 9,   rotate: 18,  animType: 'glow' },
  { top: '50%',  left: '88%',   size: 76,  opacity: 0.03,  duration: 24, delay: 3,   rotate: -15, animType: 'drift' },
  { top: '58%',  left: '8%',    size: 84,  opacity: 0.028, duration: 28, delay: 7,   rotate: 6,   animType: 'drift' },
  { top: '68%',  left: '50%',   size: 72,  opacity: 0.032, duration: 21, delay: 11,  rotate: -20, animType: 'glow' },
  { top: '92%',  left: '35%',   size: 80,  opacity: 0.025, duration: 25, delay: 14,  rotate: 10,  animType: 'drift' },
  
  // Small accent logos - scattered
  { top: '5%',   left: '45%',   size: 48,  opacity: 0.04,  duration: 18, delay: 1,   rotate: -25, animType: 'glow' },
  { top: '18%',  left: '92%',   size: 44,  opacity: 0.035, duration: 16, delay: 10,  rotate: 30,  animType: 'drift' },
  { top: '38%',  left: '2%',    size: 52,  opacity: 0.038, duration: 19, delay: 6,   rotate: -12, animType: 'glow' },
  { top: '62%',  left: '30%',   size: 40,  opacity: 0.04,  duration: 17, delay: 13,  rotate: 22,  animType: 'drift' },
  { top: '78%',  left: '92%',   size: 56,  opacity: 0.03,  duration: 23, delay: 8,   rotate: -18, animType: 'glow' },
  { top: '95%',  left: '60%',   size: 44,  opacity: 0.035, duration: 15, delay: 5,   rotate: 15,  animType: 'drift' },
];

export default function AnimatedLogoBg() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ isolation: 'isolate', zIndex: 0 }}
    >
      {/* Subtle dark vignette overlay for content readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(3, 7, 18, 0.4) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {LOGO_INSTANCES.map((item, i) => {
        const animName = item.animType === 'glow' ? 'logoDriftGlow' : 'logoDrift';
        return (
          <img
            key={i}
            src={siteConfig.logoAsset}
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              opacity: item.opacity,
              objectFit: 'contain',
              '--logo-rot': `${item.rotate}deg`,
              '--logo-op': `${item.opacity}`,
              animation: `${animName} ${item.duration}s ease-in-out ${item.delay}s infinite`,
              filter: item.animType === 'glow' 
                ? 'grayscale(30%) brightness(1.6)' 
                : 'grayscale(50%) brightness(1.3)',
              userSelect: 'none',
              willChange: 'transform, opacity',
            }}
          />
        );
      })}

      <style>{`
        @keyframes logoDrift {
          0%   { transform: translateY(0px) translateX(0px) rotate(var(--logo-rot, 0deg)) scale(1); }
          25%  { transform: translateY(-18px) translateX(8px) rotate(var(--logo-rot, 0deg)) scale(1.05); }
          50%  { transform: translateY(-6px) translateX(-6px) rotate(var(--logo-rot, 0deg)) scale(0.97); }
          75%  { transform: translateY(14px) translateX(10px) rotate(var(--logo-rot, 0deg)) scale(1.02); }
          100% { transform: translateY(0px) translateX(0px) rotate(var(--logo-rot, 0deg)) scale(1); }
        }

        @keyframes logoDriftGlow {
          0%   { 
            transform: translateY(0px) translateX(0px) rotate(var(--logo-rot, 0deg)) scale(1); 
            filter: grayscale(30%) brightness(1.6) drop-shadow(0 0 0px transparent);
          }
          25%  { 
            transform: translateY(-14px) translateX(6px) rotate(var(--logo-rot, 0deg)) scale(1.06); 
            filter: grayscale(20%) brightness(1.9) drop-shadow(0 0 10px rgba(245, 158, 11, 0.12));
          }
          50%  { 
            transform: translateY(-4px) translateX(-8px) rotate(var(--logo-rot, 0deg)) scale(0.98); 
            filter: grayscale(30%) brightness(1.6) drop-shadow(0 0 0px transparent);
          }
          75%  { 
            transform: translateY(10px) translateX(8px) rotate(var(--logo-rot, 0deg)) scale(1.03); 
            filter: grayscale(25%) brightness(1.7) drop-shadow(0 0 8px rgba(245, 158, 11, 0.08));
          }
          100% { 
            transform: translateY(0px) translateX(0px) rotate(var(--logo-rot, 0deg)) scale(1); 
            filter: grayscale(30%) brightness(1.6) drop-shadow(0 0 0px transparent);
          }
        }
      `}</style>
    </div>
  );
}
