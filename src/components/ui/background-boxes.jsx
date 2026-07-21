import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const BoxesCore = React.memo(({ className, ...rest }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    // FIX: Prevenir que React Strict Mode acumule la escala en el contexto al reiniciar el ciclo de vida
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // La misma geometría desbordante exacta del código original Aceternity UI:
    // 150 columnas horizontales, 100 filas verticales
    const cols = 150;
    const rows = 100;
    const cellWidth = 64;
    const cellHeight = 32;
    const logicalWidth = cols * cellWidth;   // 9600px
    const logicalHeight = rows * cellHeight; // 3200px

    // Escalado 0.4x para que el tamaño interno (3840x1280) sea seguro para móviles (límite 4096px).
    const scaleFactor = 0.4;
    ctx.scale(scaleFactor, scaleFactor);

    let colors = [
      "#7dd3fc", "#f9a8d4", "#86efac", "#fde047", 
      "#fca5a5", "#d8b4fe", "#93c5fd", "#a5b4fc", "#c4b5fd",
    ];

    // Offscreen canvas a la misma resolución interna escalada
    const offscreen = document.createElement("canvas");
    offscreen.width = logicalWidth * scaleFactor;
    offscreen.height = logicalHeight * scaleFactor;
    const octx = offscreen.getContext("2d", { alpha: true });
    octx.scale(scaleFactor, scaleFactor);

    // Compensar el anti-aliasing del escalado subiendo la opacidad y el grosor
    octx.strokeStyle = "rgba(100, 116, 139, 0.6)";
    octx.lineWidth = 1.25;
    octx.beginPath();
    for (let i = 0; i <= rows; i++) {
      octx.moveTo(0, i * cellHeight);
      octx.lineTo(logicalWidth, i * cellHeight);
    }
    for (let j = 0; j <= cols; j++) {
      octx.moveTo(j * cellWidth, 0);
      octx.lineTo(j * cellWidth, logicalHeight);
    }
    octx.stroke();

    octx.strokeStyle = "rgba(51, 65, 85, 1.0)";
    octx.lineWidth = 2;
    octx.beginPath();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (j % 2 === 0 && i % 2 === 0) {
          const cx = j * cellWidth;
          const cy = i * cellHeight;
          const size = 6;
          octx.moveTo(cx - size, cy);
          octx.lineTo(cx + size, cy);
          octx.moveTo(cx, cy - size);
          octx.lineTo(cx, cy + size);
        }
      }
    }
    octx.stroke();

    const activeCells = new Map();
    let animationFrameId;

    const draw = () => {
      // Limpiamos con las coordenadas lógicas completas
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      for (const [key, cell] of activeCells.entries()) {
        const [col, row] = key.split(',').map(Number);
        
        ctx.fillStyle = cell.color;
        ctx.globalAlpha = cell.alpha;
        ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
        
        cell.alpha -= 0.04; 
        if (cell.alpha <= 0) {
          activeCells.delete(key);
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0); 
      ctx.drawImage(offscreen, 0, 0);
      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e) => {
      // e.offsetX y e.offsetY corresponden al tamaño físico que dictamina CSS (9600x3200)
      const x = e.offsetX;
      const y = e.offsetY;
      
      const col = Math.floor(x / cellWidth);
      const row = Math.floor(y / cellHeight);

      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        const key = `${col},${row}`;
        if (!activeCells.has(key)) {
          activeCells.set(key, {
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1.0
          });
        } else {
            activeCells.get(key).alpha = 1.0;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      <canvas
        ref={canvasRef}
        // Resolución Interna muy segura para móviles (3840x1280)
        width={3840}
        height={1280}
        style={{
          // Desbordamiento Geométrico Original (9600x3200)
          width: '9600px',
          height: '3200px',
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'default'
        }}
        className="pointer-events-auto"
      />
    </div>
  );
});

export const BackgroundBoxes = BoxesCore;
