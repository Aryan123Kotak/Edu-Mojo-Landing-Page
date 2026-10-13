import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  type: 'book' | 'sparkle' | 'circle' | 'mortarboard' | 'pencil';
  opacity: number;
  rotation: number;
  vRot: number;
}

interface HeroFloatingParticlesBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const HeroFloatingParticlesBackground: React.FC<HeroFloatingParticlesBackgroundProps> = ({
  className = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; radius: number }>({
    x: -1000,
    y: -1000,
    active: false,
    radius: 140,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle pool setup
    const particles: Particle[] = [];
    const particleTypes: Particle['type'][] = [
      'circle',
      'sparkle',
      'book',
      'sparkle',
      'mortarboard',
      'pencil',
      'circle',
    ];

    const initParticles = () => {
      particles.length = 0;
      // Adjust count based on screen width (around 32-48 particles)
      const count = Math.min(Math.floor((width * height) / 18000), 45);

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          id: i,
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45 - 0.15, // slight upward float
          size: Math.random() * 10 + 10, // 10px to 20px
          type: particleTypes[i % particleTypes.length],
          opacity: Math.random() * 0.45 + 0.25,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    initParticles();

    // Draw custom glyphs cleanly on HTML5 canvas
    const drawGlyph = (
      c: CanvasRenderingContext2D,
      p: Particle
    ) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.globalAlpha = p.opacity;
      c.fillStyle = 'rgba(255, 255, 255, 0.85)';
      c.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      c.lineWidth = 1.6;

      const s = p.size;

      switch (p.type) {
        case 'circle': {
          c.beginPath();
          c.arc(0, 0, s * 0.28, 0, Math.PI * 2);
          c.fillStyle = 'rgba(255, 255, 255, 0.45)';
          c.fill();
          break;
        }

        case 'sparkle': {
          // 4-point sparkle star
          c.beginPath();
          for (let i = 0; i < 4; i++) {
            c.lineTo(
              Math.cos((i * Math.PI) / 2) * s * 0.5,
              Math.sin((i * Math.PI) / 2) * s * 0.5
            );
            c.lineTo(
              Math.cos((i * Math.PI) / 2 + Math.PI / 4) * s * 0.16,
              Math.sin((i * Math.PI) / 2 + Math.PI / 4) * s * 0.16
            );
          }
          c.closePath();
          c.fill();
          break;
        }

        case 'book': {
          // Mini open book glyph
          const w = s * 0.55;
          const h = s * 0.38;
          c.beginPath();
          // left page
          c.moveTo(0, h * 0.4);
          c.quadraticCurveTo(-w * 0.5, -h * 0.2, -w, 0);
          c.lineTo(-w, h);
          c.quadraticCurveTo(-w * 0.5, h * 0.7, 0, h);
          // right page
          c.quadraticCurveTo(w * 0.5, h * 0.7, w, h);
          c.lineTo(w, 0);
          c.quadraticCurveTo(w * 0.5, -h * 0.2, 0, h * 0.4);
          c.stroke();
          break;
        }

        case 'mortarboard': {
          // Graduation cap diamond & tassel
          const w = s * 0.55;
          const h = s * 0.3;
          c.beginPath();
          c.moveTo(0, -h);
          c.lineTo(w, 0);
          c.lineTo(0, h);
          c.lineTo(-w, 0);
          c.closePath();
          c.stroke();
          // cap base
          c.beginPath();
          c.arc(0, h * 0.4, w * 0.45, 0, Math.PI, false);
          c.stroke();
          break;
        }

        case 'pencil': {
          // Mini stylus / pencil line
          const len = s * 0.5;
          c.beginPath();
          c.moveTo(-len * 0.4, -len * 0.4);
          c.lineTo(len * 0.4, len * 0.4);
          c.stroke();
          // tip
          c.beginPath();
          c.arc(len * 0.4, len * 0.4, 1.5, 0, Math.PI * 2);
          c.fill();
          break;
        }
      }

      c.restore();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Natural drift
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // 2. Mouse interaction physics: repulsion and energetic deflection
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 4.5;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
            // add gentle spin on interaction
            p.rotation += force * 0.05;
          }
        }

        // 3. Screen edge wrap-around
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;
        if (p.y < -30) p.y = height + 20;
        if (p.y > height + 30) p.y = -20;

        // 4. Subtle connecting light filaments between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = (1 - dist / 90) * 1.2;
            ctx.stroke();
          }
        }

        // 5. Draw the glyph
        drawGlyph(ctx, p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
    mouseRef.current.active = true;
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
    mouseRef.current.active = true;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
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
      {/* Interactive Floating Glyphs & Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: 0.95,
        }}
        aria-hidden="true"
      />

      {/* Subtle soft cursor highlight glow beneath particles */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(280px circle at ${mouseRef.current.x}px ${mouseRef.current.y}px, rgba(255,255,255,0.4), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper sitting directly above particle field */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
