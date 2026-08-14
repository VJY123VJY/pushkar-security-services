import React from 'react';
import { siteConfig } from '../config/siteConfig';

// Predefined positions/sizes/animations to avoid hydration issues
const LOGO_INSTANCES = [
  { top: '5%',  left: '3%',   size: 80,  opacity: 0.04, duration: 18, delay: 0,    rotate: -15 },
  { top: '10%', left: '75%',  size: 64,  opacity: 0.035, duration: 22, delay: 3,   rotate: 10  },
  { top: '22%', left: '45%',  size: 96,  opacity: 0.03, duration: 26, delay: 6,    rotate: 5   },
  { top: '35%', left: '12%',  size: 56,  opacity: 0.045, duration: 20, delay: 2,   rotate: -8  },
  { top: '40%', left: '85%',  size: 72,  opacity: 0.03, duration: 24, delay: 8,    rotate: 20  },
  { top: '55%', left: '30%',  size: 88,  opacity: 0.035, duration: 28, delay: 5,   rotate: -12 },
  { top: '60%', left: '65%',  size: 60,  opacity: 0.04, duration: 19, delay: 1,    rotate: 7   },
  { top: '72%', left: '5%',   size: 80,  opacity: 0.03, duration: 23, delay: 9,    rotate: 15  },
  { top: '78%', left: '50%',  size: 68,  opacity: 0.04, duration: 21, delay: 4,    rotate: -5  },
  { top: '88%', left: '82%',  size: 76,  opacity: 0.035, duration: 25, delay: 7,   rotate: 12  },
  { top: '90%', left: '20%',  size: 52,  opacity: 0.03, duration: 17, delay: 11,   rotate: -18 },
  { top: '15%', left: '90%',  size: 64,  opacity: 0.04, duration: 30, delay: 13,   rotate: 3   },
];

export default function AnimatedLogoBg() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ isolation: 'isolate' }}
    >
      {LOGO_INSTANCES.map((item, i) => (
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
            transform: `rotate(${item.rotate}deg)`,
            animation: `logoDrift ${item.duration}s ease-in-out ${item.delay}s infinite alternate`,
            filter: 'grayscale(40%) brightness(1.5)',
            userSelect: 'none',
          }}
        />
      ))}

      <style>{`
        @keyframes logoDrift {
          0%   { transform: translateY(0px)   rotate(var(--rot, 0deg)) scale(1);    }
          50%  { transform: translateY(-14px) rotate(var(--rot, 0deg)) scale(1.04); }
          100% { transform: translateY(8px)   rotate(var(--rot, 0deg)) scale(0.97); }
        }
      `}</style>
    </div>
  );
}
