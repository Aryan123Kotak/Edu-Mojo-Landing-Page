import React, { useEffect, useRef, useState } from 'react';

interface InteractiveDotMatrixProps {
  className?: string;
  dotSpacing?: number;
  baseDotRadius?: number;
  highlightRadius?: number; // Distance within which cursor influences dots
  maxRippleDisplacement?: number;
  colorScheme?: 'light' | 'emerald';
}

export const InteractiveDotMatrix: React.FC<InteractiveDotMatrixProps> = ({
  className = '',
  dotSpacing = 32,
  baseDotRadius = 1.6,
  highlightRadius = 160,
  maxRippleDisplacement = 12,
  colorScheme = 'emerald',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Track cursor position and interaction state
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    isHovered: false,
    speed: 0,
    prevX: -9999,
    prevY: -9999,
    lastMoveTime: 0,
  });

  // Touch & click ripple pulse waves
  const ripplesRef = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    alpha: number;
    speed: number;
    strength: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Handles container resize
    const handleResize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = Math.ceil(rect.width);
      height = Math.ceil(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Track mouse coordinates relative to container
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = performance.now();
      const dt = Math.max(now - mouseRef.current.lastMoveTime, 16);
      const dx = x - mouseRef.current.prevX;
      const dy = y - mouseRef.current.prevY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      mouseRef.current.speed = Math.min(dist / (dt / 16), 25);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      mouseRef.current.prevX = x;
      mouseRef.current.prevY = y;
      mouseRef.current.lastMoveTime = now;
      mouseRef.current.isHovered = true;
    };

    const onMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.prevX = x;
      mouseRef.current.prevY = y;
      mouseRef.current.isHovered = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = -9999;
      mouseRef.current.targetY = -9999;
    };

    // Add tactile ripple wave on click / tap
    const onPointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.min(Math.max(width, height) * 0.45, 320),
        alpha: 0.85,
        speed: 4.8,
        strength: 16,
      });
    };

    // Touch support
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
        mouseRef.current.isHovered = true;
      }
    };

    const onTouchEnd = () => {
      setTimeout(() => {
        mouseRef.current.isHovered = false;
        mouseRef.current.targetX = -9999;
        mouseRef.current.targetY = -9999;
      }, 800);
    };

    // Attach listeners
    // We listen on window for smooth tracking across child overlays
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    // Subtle autonomous background ambient pulse for live feel
    let time = 0;

    // Render loop
    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation (spring-like ease)
      if (mouseRef.current.isHovered) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.18;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.18;
      } else {
        mouseRef.current.x += (-9999 - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (-9999 - mouseRef.current.y) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      // Advance and cleanup ripples
      const activeRipples = ripplesRef.current;
      for (let i = activeRipples.length - 1; i >= 0; i--) {
        const r = activeRipples[i];
        r.radius += r.speed;
        r.alpha *= 0.965;
        if (r.radius >= r.maxRadius || r.alpha < 0.02) {
          activeRipples.splice(i, 1);
        }
      }

      // Draw subtle connecting mesh grid lines in high proximity of cursor
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isMouseActive = mx > -100 && mx < width + 100 && my > -100 && my < height + 100;

      const cols = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;
      const startX = (width - (cols - 1) * dotSpacing) / 2;
      const startY = (height - (rows - 1) * dotSpacing) / 2;

      // Draw subtle blueprint micro-crosses or guidelines around cursor
      if (isMouseActive) {
        const glowRad = highlightRadius * 1.25;
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, glowRad);
        gradient.addColorStop(0, 'rgba(46, 202, 139, 0.10)');
        gradient.addColorStop(0.5, 'rgba(22, 163, 74, 0.04)');
        gradient.addColorStop(1, 'rgba(22, 163, 74, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw active ripple rings (tactile wave echo)
      for (const rip of activeRipples) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(22, 163, 74, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();
      }

      // Iterate grid points and render dots with magnetic repulsion & illumination
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = startX + c * dotSpacing;
          const originY = startY + r * dotSpacing;

          // Ambient idle breathing wave (very subtle 0.3px float)
          const ambientWave = Math.sin(time + (c * 0.18) + (r * 0.22)) * 0.4;
          
          let curX = originX;
          let curY = originY + ambientWave;
          let dotRadius = baseDotRadius;
          let dotAlpha = 0.16; // Rest state: refined architectural blueprint dot
          let dotColor = '#94a3b8'; // Slate 400 default

          // 1. Mouse magnetic interaction
          if (isMouseActive) {
            const dx = originX - mx;
            const dy = originY - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < highlightRadius) {
              const normDist = dist / highlightRadius; // 0 (at cursor) to 1 (at perimeter)
              // Smooth cosine falloff
              const factor = (Math.cos(normDist * Math.PI) + 1) * 0.5; // 1 at center, 0 at edge

              // Repulsion displacement vector
              const angle = Math.atan2(dy, dx);
              const repulsion = factor * maxRippleDisplacement;

              curX += Math.cos(angle) * repulsion;
              curY += Math.sin(angle) * repulsion;

              // Enlarge dot size dynamically
              dotRadius = baseDotRadius + factor * 2.4;

              // Illuminate dot in bright EduMojo green (#16a34a / #2eca8b)
              dotAlpha = 0.22 + factor * 0.72; // Up to 0.94 alpha near cursor
              dotColor = factor > 0.45 ? '#16a34a' : '#2eca8b';

              // If close to cursor, connect nearby orthogonal dots with subtle laser data line
              if (c < cols - 1 && factor > 0.42) {
                const nextOriginX = startX + (c + 1) * dotSpacing;
                const nextOriginY = startY + r * dotSpacing;
                const nextDist = Math.hypot(nextOriginX - mx, nextOriginY - my);
                if (nextDist < highlightRadius) {
                  const lineAlpha = factor * 0.22;
                  ctx.strokeStyle = `rgba(34, 197, 94, ${lineAlpha})`;
                  ctx.lineWidth = 0.8;
                  ctx.beginPath();
                  ctx.moveTo(curX, curY);
                  ctx.lineTo(nextOriginX, nextOriginY);
                  ctx.stroke();
                }
              }
              if (r < rows - 1 && factor > 0.42) {
                const nextOriginX = startX + c * dotSpacing;
                const nextOriginY = startY + (r + 1) * dotSpacing;
                const nextDist = Math.hypot(nextOriginX - mx, nextOriginY - my);
                if (nextDist < highlightRadius) {
                  const lineAlpha = factor * 0.22;
                  ctx.strokeStyle = `rgba(34, 197, 94, ${lineAlpha})`;
                  ctx.lineWidth = 0.8;
                  ctx.beginPath();
                  ctx.moveTo(curX, curY);
                  ctx.lineTo(nextOriginX, nextOriginY);
                  ctx.stroke();
                }
              }
            }
          }

          // 2. Click/Tap Ripple wave influence
          for (const rip of activeRipples) {
            const rdx = originX - rip.x;
            const rdy = originY - rip.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const distFromWavefront = Math.abs(rdist - rip.radius);

            if (distFromWavefront < 38) {
              const wavePower = (1 - distFromWavefront / 38) * rip.alpha;
              const angle = Math.atan2(rdy, rdx);
              const push = wavePower * (rip.strength * 0.6);

              curX += Math.cos(angle) * push;
              curY += Math.sin(angle) * push;

              dotRadius = Math.max(dotRadius, baseDotRadius + wavePower * 2.8);
              dotAlpha = Math.min(1, dotAlpha + wavePower * 0.7);
              dotColor = '#15803d';
            }
          }

          // Draw the dot
          ctx.beginPath();
          ctx.arc(curX, curY, dotRadius, 0, Math.PI * 2);

          if (dotColor.startsWith('#16a34a') || dotColor.startsWith('#2eca8b') || dotColor.startsWith('#15803d')) {
            // High-glow crisp emerald pulse dot near cursor
            ctx.fillStyle = `rgba(22, 163, 74, ${Math.min(1, dotAlpha + 0.25)})`;
            ctx.fill();
            if (dotRadius > 2.4) {
              ctx.shadowColor = 'rgba(22, 163, 74, 0.45)';
              ctx.shadowBlur = 5;
            } else {
              ctx.shadowBlur = 0;
            }
          } else {
            // Resting state: subtle neutral sage/slate blueprint dot
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(22, 101, 52, ${dotAlpha * 0.75})`;
            ctx.fill();
          }
        }
      }

      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [dotSpacing, baseDotRadius, highlightRadius, maxRippleDisplacement, colorScheme]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-auto overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ touchAction: 'pan-y' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};
