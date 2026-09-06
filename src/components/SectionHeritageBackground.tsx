import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface SectionHeritageBackgroundProps {
  imageUrl: string;
  alt?: string;
  opacity?: string; // e.g. "opacity-[0.08] dark:opacity-[0.05]"
  blur?: string;    // e.g. "blur-[1px]"
  speed?: number;   // Parallax movement factor (e.g. 40 to 80px)
  position?: 'center' | 'top' | 'bottom';
  overlayGradient?: 'light' | 'subtle' | 'vignette';
  className?: string;
}

export const SectionHeritageBackground: React.FC<SectionHeritageBackgroundProps> = ({
  imageUrl,
  alt = "Indian heritage background motif",
  opacity = "opacity-[0.08] dark:opacity-[0.05]",
  blur = "blur-[1px]",
  speed = 50,
  position = 'center',
  overlayGradient = 'subtle',
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Subtle vertical parallax offset
  const yOffset = useTransform(
    scrollY,
    [0, 3000],
    prefersReducedMotion || isMobile ? [0, 0] : [0, -speed]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const objectPositionClass = 
    position === 'top' ? 'object-top' :
    position === 'bottom' ? 'object-bottom' : 'object-center';

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Parallax Image Container */}
      <motion.div 
        style={{ y: yOffset }}
        className="relative w-full h-[120%] -top-[10%] left-0"
      >
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover ${objectPositionClass} ${opacity} ${blur} mix-blend-multiply dark:mix-blend-luminosity filter contrast-[1.08] saturate-[1.15] transition-opacity duration-700`}
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Top and Bottom Gradient Blends to ensure zero seams with adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] via-transparent to-[#faf7f2] dark:from-[#0c0805] dark:via-transparent dark:to-[#0c0805] opacity-90"></div>

      {/* Horizontal vignette for reading comfort */}
      {overlayGradient === 'vignette' && (
        <div className="absolute inset-0 bg-radial from-transparent via-[#faf7f2]/40 to-[#faf7f2]/90 dark:from-transparent dark:via-[#0c0805]/40 dark:to-[#0c0805]/90"></div>
      )}

      {/* Subtle traditional Indian geometric jaali watermark pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#b8501c 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
