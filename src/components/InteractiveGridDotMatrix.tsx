import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Sliders, Play, Check, RefreshCw, Cpu, Activity } from 'lucide-react';

export type GridMode = 'mesh' | 'dots' | 'blueprint';
export type RepulsionLevel = 'subtle' | 'tactile' | 'strong';

interface GridPoint {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  illumination: number; // 0 to 1
  scale: number; // 1 to 3
  isNode: boolean;
  nodeLabel?: string;
  nodeStatus?: string;
  pulsePhase: number;
  colIndex: number;
  rowIndex: number;
}

interface RippleWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  amplitude: number;
  wavelength: number;
  decay: number;
  color: string;
}

interface InteractiveGridDotMatrixProps {
  className?: string;
  initialMode?: GridMode;
  showHud?: boolean;
  subtleBackground?: boolean;
}

const SCHOOL_OS_NODES = [
  { label: 'ATTN_STREAM', status: 'Live 99.8%' },
  { label: 'TIMETABLE_AI', status: '0 Conflicts' },
  { label: 'FEE_LEDGER', status: 'Auto-Reconciled' },
  { label: 'EXAM_ANALYTICS', status: 'Calculated' },
  { label: 'PARENT_GATEWAY', status: 'Sync Active' },
  { label: 'HOSTEL_REGISTRY', status: 'Verified' },
  { label: 'RFID_TRANSPORT', status: 'Routes Mapped' },
  { label: 'AI_COPILOT', status: 'Online' },
];

export const InteractiveGridDotMatrix: React.FC<InteractiveGridDotMatrixProps> = ({
  className = '',
  initialMode = 'mesh',
  showHud = true,
  subtleBackground = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // User interactive preferences
  const [mode, setMode] = useState<GridMode>(initialMode);
  const [repulsion, setRepulsion] = useState<RepulsionLevel>('tactile');
  const [hudOpen, setHudOpen] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [activeHoverNode, setActiveHoverNode] = useState<{ label: string; status: string; x: number; y: number } | null>(null);

  // Physics params refs for smooth 60fps loop
  const modeRef = useRef<GridMode>(mode);
  modeRef.current = mode;

  const repulsionRef = useRef<RepulsionLevel>(repulsion);
  repulsionRef.current = repulsion;

  const pointsRef = useRef<GridPoint[]>([]);
  const ripplesRef = useRef<RippleWave[]>([]);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    speed: 0,
    isHovering: false,
    radius: 175,
  });

  const lastAmbientPulseRef = useRef<number>(Date.now());
  const animFrameIdRef = useRef<number | null>(null);

  // Spawn a ripple wave
  const emitRipple = useCallback((x: number, y: number, strength = 1.0) => {
    const newRipple: RippleWave = {
      x,
      y,
      radius: 0,
      maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.75,
      speed: 7.5,
      amplitude: 14 * strength,
      wavelength: 55,
      decay: 0.982,
      color: 'rgba(34, 197, 94, 0.85)',
    };
    ripplesRef.current.push(newRipple);
    setPulseCount((c) => c + 1);
  }, []);

  // Initialize or resize the grid
  const initGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    // Grid spacing (adaptive: 32px on desktop, 38px on mobile)
    const isMobile = width < 768;
    const spacing = isMobile ? 36 : 30;

    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;
    const offsetX = (width - (cols - 1) * spacing) / 2;
    const offsetY = (height - (rows - 1) * spacing) / 2;

    const newPoints: GridPoint[] = [];
    let nodeIndex = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const originX = offsetX + c * spacing;
        const originY = offsetY + r * spacing;

        // Designate some points as School OS Data Nodes
        const isCadNode = (c % 7 === 3 && r % 7 === 3) || (c % 11 === 5 && r % 9 === 4);
        const nodeInfo = isCadNode ? SCHOOL_OS_NODES[nodeIndex % SCHOOL_OS_NODES.length] : undefined;
        if (isCadNode) nodeIndex++;

        newPoints.push({
          x: originX,
          y: originY,
          originX,
          originY,
          vx: 0,
          vy: 0,
          illumination: 0,
          scale: 1,
          isNode: !!isCadNode,
          nodeLabel: nodeInfo?.label,
          nodeStatus: nodeInfo?.status,
          pulsePhase: Math.random() * Math.PI * 2,
          colIndex: c,
          rowIndex: r,
        });
      }
    }

    pointsRef.current = newPoints;
  }, []);

  // Main animation physics & draw loop
  useEffect(() => {
    initGrid();

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const render = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const container = containerRef.current;
      const width = container ? container.clientWidth : window.innerWidth;
      const height = container ? container.clientHeight : window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      const currentMode = modeRef.current;
      const currentRepulsion = repulsionRef.current;

      // Repulsion multiplier
      const repulsionMult = currentRepulsion === 'subtle' ? 0.45 : currentRepulsion === 'strong' ? 1.8 : 1.0;
      const springK = 0.082;
      const friction = 0.84;

      const mouse = mouseRef.current;
      const mouseActive = mouse.isHovering;

      // Ambient School OS Data Sync Pulse every 8.5 seconds
      if (now - lastAmbientPulseRef.current > 8500) {
        lastAmbientPulseRef.current = now;
        // Find a random school OS node or center
        const nodes = pointsRef.current.filter((p) => p.isNode);
        const source = nodes.length > 0 ? nodes[Math.floor(Math.random() * nodes.length)] : null;
        const emitX = source ? source.originX : width * 0.5;
        const emitY = source ? source.originY : height * 0.4;
        emitRipple(emitX, emitY, 0.7);
      }

      // Update ripples
      const activeRipples = ripplesRef.current;
      for (let i = activeRipples.length - 1; i >= 0; i--) {
        const ripple = activeRipples[i];
        ripple.radius += ripple.speed;
        ripple.amplitude *= ripple.decay;

        if (ripple.radius > ripple.maxRadius || ripple.amplitude < 0.15) {
          activeRipples.splice(i, 1);
        }
      }

      // Track hovered special node
      let closestNode: { label: string; status: string; x: number; y: number } | null = null;
      let minNodeDist = 45;

      const points = pointsRef.current;

      // 1. UPDATE PHYSICS FOR ALL POINTS
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Idle node breathing
        p.pulsePhase += 0.035;

        // A. Cursor Interaction (Illumination + Magnetic Repulsion)
        let targetIllumination = 0;
        let targetScale = 1.0;

        if (mouseActive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const proximity = 1 - dist / mouse.radius;
            // Illumination curve (cubic ease)
            targetIllumination = Math.pow(proximity, 1.25);
            targetScale = 1 + proximity * 1.8;

            // Magnetic Repulsion force
            const repForce = Math.pow(proximity, 1.8) * 16 * repulsionMult;
            if (dist > 1) {
              p.vx += (dx / dist) * repForce;
              p.vy += (dy / dist) * repForce;
            }

            // Check if hovering near a School OS Data Node
            if (p.isNode && dist < minNodeDist) {
              minNodeDist = dist;
              closestNode = {
                label: p.nodeLabel || 'DATA_NODE',
                status: p.nodeStatus || 'Active',
                x: p.x,
                y: p.y,
              };
            }
          }
        }

        // B. Ripple Wave Displacement & Illumination
        for (let rIdx = 0; rIdx < activeRipples.length; rIdx++) {
          const rip = activeRipples[rIdx];
          const distToRipple = Math.hypot(p.originX - rip.x, p.originY - rip.y);
          const waveDist = distToRipple - rip.radius;

          if (Math.abs(waveDist) < rip.wavelength) {
            const wavePhase = Math.cos((waveDist / rip.wavelength) * Math.PI * 0.5);
            if (wavePhase > 0) {
              const wavePower = wavePhase * rip.amplitude;
              if (distToRipple > 1) {
                const nx = (p.originX - rip.x) / distToRipple;
                const ny = (p.originY - rip.y) / distToRipple;
                p.vx += nx * wavePower * 0.45;
                p.vy += ny * wavePower * 0.45;
              }
              // Ripple illuminates dots as the green wavefront sweeps by
              const rippleIllum = wavePhase * Math.min(1, rip.amplitude / 4);
              targetIllumination = Math.max(targetIllumination, rippleIllum);
              targetScale = Math.max(targetScale, 1 + wavePhase * 0.9);
            }
          }
        }

        // C. Smooth illumination and scale lerp
        p.illumination += (targetIllumination - p.illumination) * 0.16;
        p.scale += (targetScale - p.scale) * 0.18;

        // D. Elastic Spring Physics (Restoring force to origin + damping)
        const dRestX = p.originX - p.x;
        const dRestY = p.originY - p.y;
        p.vx += dRestX * springK;
        p.vy += dRestY * springK;
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;
      }

      // Update state for hover node HUD
      setActiveHoverNode(closestNode);

      // 2. RENDER BLUEPRINT / MESH LINES
      if (currentMode === 'mesh' || currentMode === 'blueprint') {
        const isBlueprintFull = currentMode === 'blueprint';

        // Base faint blueprint grid
        if (isBlueprintFull) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(22, 163, 74, 0.05)';
          ctx.lineWidth = 1;
          for (let i = 0; i < points.length; i++) {
            const p = points[i];
            // Connect to right neighbor
            const nextRight = points[i + 1];
            if (nextRight && nextRight.rowIndex === p.rowIndex) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(nextRight.x, nextRight.y);
            }
          }
          ctx.stroke();
        }

        // Dynamic Illuminated Mesh Links near cursor / ripples
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          if (p.illumination < 0.05) continue;

          // Connect to right neighbor
          const nextRight = points[i + 1];
          if (nextRight && nextRight.rowIndex === p.rowIndex && (nextRight.illumination > 0.04 || p.illumination > 0.2)) {
            const linkAlpha = Math.min(p.illumination, nextRight.illumination || 0.1) * 0.65;
            if (linkAlpha > 0.02) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 197, 94, ${linkAlpha.toFixed(3)})`;
              ctx.lineWidth = 1 + linkAlpha * 1.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(nextRight.x, nextRight.y);
              ctx.stroke();
            }
          }

          // Connect to bottom neighbor
          const nextDown = points.find((pt) => pt.colIndex === p.colIndex && pt.rowIndex === p.rowIndex + 1);
          if (nextDown && (nextDown.illumination > 0.04 || p.illumination > 0.2)) {
            const linkAlpha = Math.min(p.illumination, nextDown.illumination || 0.1) * 0.65;
            if (linkAlpha > 0.02) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 197, 94, ${linkAlpha.toFixed(3)})`;
              ctx.lineWidth = 1 + linkAlpha * 1.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(nextDown.x, nextDown.y);
              ctx.stroke();
            }
          }
        }
      }

      // 3. RENDER DOTS & TELEMETRY NODES
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const illum = p.illumination;

        // Base resting radius
        const baseRadius = p.isNode ? 2.4 : 1.6;
        const drawRadius = baseRadius * p.scale;

        // Dot Colors:
        // Idle: subtle muted green-slate
        // Illuminated: brilliant vibrant EduMojo green (#16a34a / #22c55e / #10b981)
        let fillStyle: string;
        if (illum > 0.05) {
          const gVal = Math.round(163 + illum * 40); // 163 -> 203
          const bVal = Math.round(74 + illum * 30);  // 74 -> 104
          const alpha = (0.2 + illum * 0.8).toFixed(2);
          fillStyle = `rgba(22, ${gVal}, ${bVal}, ${alpha})`;
        } else if (p.isNode) {
          fillStyle = 'rgba(22, 163, 74, 0.35)';
        } else {
          fillStyle = 'rgba(15, 23, 42, 0.10)';
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // High illumination glow halo
        if (illum > 0.45) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, drawRadius + illum * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${(illum * 0.25).toFixed(2)})`;
          ctx.fill();
        }

        // School OS Data Node Sonar Ring
        if (p.isNode) {
          const pulse = (Math.sin(p.pulsePhase) + 1) * 0.5; // 0 to 1
          const ringRadius = 5 + pulse * 6;
          const ringAlpha = (0.15 + pulse * 0.25 + illum * 0.4).toFixed(2);

          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(22, 163, 74, ${ringAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // CAD Crosshair registration ticks (+) on key technical nodes
          if (currentMode === 'blueprint' || illum > 0.3) {
            const crossArm = 3.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(22, 163, 74, ${(0.2 + illum * 0.6).toFixed(2)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x - crossArm, p.y);
            ctx.lineTo(p.x + crossArm, p.y);
            ctx.moveTo(p.x, p.y - crossArm);
            ctx.lineTo(p.x, p.y + crossArm);
            ctx.stroke();
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [initGrid, emitRipple]);

  // Pointer event listeners on container & window
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let prevPointerTime = performance.now();

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Check if inside or near container bounds
      const padding = 100;
      if (
        clientX >= rect.left - padding &&
        clientX <= rect.right + padding &&
        clientY >= rect.top - padding &&
        clientY <= rect.bottom + padding
      ) {
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const now = performance.now();
        const dt = Math.max(1, now - prevPointerTime);
        prevPointerTime = now;

        const currentMouse = mouseRef.current;
        const dx = x - (currentMouse.prevX === -9999 ? x : currentMouse.prevX);
        const dy = y - (currentMouse.prevY === -9999 ? y : currentMouse.prevY);
        const distMoved = Math.hypot(dx, dy);
        const speed = (distMoved / dt) * 16; // px per standard frame

        currentMouse.speed = speed;
        currentMouse.prevX = currentMouse.x;
        currentMouse.prevY = currentMouse.y;
        currentMouse.x = x;
        currentMouse.y = y;
        currentMouse.isHovering = true;

        // Fast swipe micro-ripple
        if (speed > 48 && distMoved > 60) {
          if (ripplesRef.current.length < 4) {
            emitRipple(x, y, 0.45);
          }
        }
      } else {
        mouseRef.current.isHovering = false;
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.isHovering = false;
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        // Do not intercept clicks on buttons or HUD
        const target = e.target as HTMLElement;
        if (target && (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('.hud-panel'))) {
          return;
        }
        emitRipple(x, y, 1.25);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [emitRipple]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden select-none pointer-events-auto ${className}`}
      aria-hidden="true"
    >
      {/* Radiant atmospheric background matching user reference image */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Left Mint / Seafoam radiant bloom (matches left side of uploaded screenshot) */}
        <div 
          className="absolute -left-[10%] top-[4%] w-[58vw] h-[58vw] rounded-full blur-[110px] opacity-75"
          style={{
            background: 'radial-gradient(circle, #34d399 0%, #6ee7b7 45%, rgba(167, 243, 208, 0.4) 70%, transparent 100%)',
          }}
        />

        {/* Right Lime / Spring-Green radiant bloom (matches right side of uploaded screenshot) */}
        <div 
          className="absolute -right-[8%] top-[8%] w-[54vw] h-[54vw] rounded-full blur-[110px] opacity-70"
          style={{
            background: 'radial-gradient(circle, #a3e635 0%, #bef264 45%, rgba(217, 249, 157, 0.35) 70%, transparent 100%)',
          }}
        />

        {/* Center luminous pearl/white highlight behind headline */}
        <div 
          className="absolute left-[18%] top-[0%] w-[64vw] h-[48vw] rounded-full blur-[85px] opacity-60"
          style={{
            background: 'radial-gradient(ellipse, #ffffff 0%, #f0fdf4 55%, transparent 100%)',
          }}
        />

        {/* Bottom smooth fade to clean page body white */}
        <div 
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.6) 45%, rgba(255, 255, 255, 0.95) 80%, #ffffff 100%)',
          }}
        />
      </div>

      {/* HTML5 Canvas for the high-performance 60fps Grid Dot-Matrix & Mesh Ripple */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block cursor-crosshair z-0"
      />

      {/* Subtle school operating system corner watermark telemetry */}
      <div className="absolute top-4 left-6 pointer-events-none hidden lg:flex items-center gap-2.5 text-[10px] font-mono tracking-wider text-emerald-800/40 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>EDU-MOJO OS // DATA GRID MATRIX v2.4</span>
        <span className="text-slate-300">•</span>
        <span>TACTILE MESH ACTIVE</span>
      </div>

      {/* Tooltip for hovered School OS Data Node */}
      {activeHoverNode && (
        <div
          className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-2.5 py-1 bg-slate-900/90 text-white rounded-md text-[11px] font-mono shadow-xl backdrop-blur-sm border border-emerald-500/30 flex items-center gap-1.5 whitespace-nowrap transition-all duration-75"
          style={{
            left: `${activeHoverNode.x}px`,
            top: `${activeHoverNode.y - 6}px`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-emerald-400">{activeHoverNode.label}</span>
          <span className="text-slate-400 font-normal">[{activeHoverNode.status}]</span>
        </div>
      )}

      {/* Floating Interactive Tactile Controls / HUD Pill (Optional & Minimizable) */}
      {showHud && (
        <div className="absolute bottom-4 right-4 z-20 font-sans pointer-events-auto">
          {!hudOpen ? (
            <button
              type="button"
              onClick={() => setHudOpen(true)}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-emerald-700 text-xs font-medium shadow-md shadow-emerald-950/5 border border-emerald-200/80 hover:border-emerald-400 backdrop-blur-md transition-all cursor-pointer"
              title="Interactive Grid Matrix Settings"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] font-semibold tracking-tight text-emerald-800">
                Data Grid
              </span>
              <span className="text-slate-400 group-hover:text-emerald-600 font-mono text-[10px]">
                [{mode.toUpperCase()}]
              </span>
              <Sliders className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
            </button>
          ) : (
            <div className="hud-panel bg-white/95 text-slate-900 rounded-2xl p-4 shadow-xl border border-emerald-200/80 backdrop-blur-lg w-72 space-y-3.5 animate-in fade-in zoom-in-95 duration-150">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">School OS Data Grid</h4>
                    <p className="text-[10px] text-slate-500 font-mono">Option 2: Dot-Matrix & Mesh</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setHudOpen(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs px-1.5 py-0.5 rounded cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Mode selector */}
              <div>
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Display Mode
                </label>
                <div className="grid grid-cols-3 gap-1 p-0.5 bg-slate-100 rounded-lg text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setMode('mesh')}
                    className={`py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                      mode === 'mesh'
                        ? 'bg-white text-emerald-700 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Mesh Ripple
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('dots')}
                    className={`py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                      mode === 'dots'
                        ? 'bg-white text-emerald-700 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Dot Matrix
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('blueprint')}
                    className={`py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                      mode === 'blueprint'
                        ? 'bg-white text-emerald-700 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Blueprint CAD
                  </button>
                </div>
              </div>

              {/* Repulsion / Tactile Sensitivity */}
              <div>
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Magnetic Repulsion
                </label>
                <div className="grid grid-cols-3 gap-1 p-0.5 bg-slate-100 rounded-lg text-xs font-medium">
                  {(['subtle', 'tactile', 'strong'] as RepulsionLevel[]).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setRepulsion(level)}
                      className={`py-1 capitalize rounded-md text-[11px] transition-all cursor-pointer ${
                        repulsion === level
                          ? 'bg-white text-emerald-700 font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="pt-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const container = containerRef.current;
                    const w = container ? container.clientWidth : window.innerWidth;
                    const h = container ? container.clientHeight : window.innerHeight;
                    emitRipple(w * 0.5, h * 0.45, 1.4);
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Emit Data Pulse</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    initGrid();
                  }}
                  className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all cursor-pointer"
                  title="Reset Grid Positions"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-slate-100">
                <span>Pulses emitted: {pulseCount}</span>
                <span className="text-emerald-600">● 60 FPS Canvas</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
