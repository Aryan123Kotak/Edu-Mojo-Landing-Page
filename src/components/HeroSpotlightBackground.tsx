import React, { useEffect, useRef, useState } from 'react';

interface HeroSpotlightBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const HeroSpotlightBackground: React.FC<HeroSpotlightBackgroundProps> = ({
  className = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [smoothPos, setSmoothPos] = useState({ x: -1000, y: -1000 });

  // Smooth interpolation for silky 60fps cursor trailing
  useEffect(() => {
    let animationFrameId: number;

    const updateSmoothPosition = () => {
      setSmoothPos((prev) => {
        if (!isHovered && prev.x < 0) return prev;
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.14,
          y: prev.y + dy * 0.14,
        };
      });
      animationFrameId = requestAnimationFrame(updateSmoothPosition);
    };

    animationFrameId = requestAnimationFrame(updateSmoothPosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
    if (!isHovered) {
      setSmoothPos({ x, y });
      setIsHovered(true);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setSmoothPos({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Interactive Aurora & Radial Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {/* Core Spotlight Halo: luminous emerald/mint highlight glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
          style={{
            left: `${smoothPos.x}px`,
            top: `${smoothPos.y}px`,
            width: '620px',
            height: '620px',
            background: `radial-gradient(
              circle closest-side,
              rgba(255, 255, 255, 0.45) 0%,
              rgba(167, 243, 208, 0.4) 30%,
              rgba(52, 211, 153, 0.25) 60%,
              transparent 100%
            )`,
            filter: 'blur(40px)',
          }}
        />

        {/* Secondary soft ambient highlight accent */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
          style={{
            left: `${smoothPos.x}px`,
            top: `${smoothPos.y}px`,
            width: '360px',
            height: '360px',
            background: `radial-gradient(
              circle closest-side,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(209, 250, 229, 0.4) 50%,
              transparent 80%
            )`,
            filter: 'blur(24px)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Content wrapper sitting directly above spotlight */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
