import { useCallback, useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  spin: number;
  life: number;
  maxLife: number;
  shape: "rect" | "circle";
};

const COLORS = ["#ffc857", "#8ccbf4", "#f3a6a0", "#fffbf2", "#17384c"];

export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const viewportRef = useRef({ width: 0, height: 0, dpr: 1 });

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    viewportRef.current = { width, height, dpr };

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext("2d");
    context?.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const startLoop = useCallback(() => {
    if (frameRef.current !== null) {
      return;
    }

    let lastTime = performance.now();

    const step = (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        frameRef.current = null;
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        frameRef.current = null;
        return;
      }

      const { width, height } = viewportRef.current;
      const delta = Math.min((time - lastTime) / 16.67, 2.5);
      lastTime = time;

      context.clearRect(0, 0, width, height);

      const alive: Particle[] = [];

      for (const particle of particlesRef.current) {
        particle.life -= delta;
        if (particle.life <= 0) {
          continue;
        }

        particle.vy += 0.14 * delta;
        particle.vx *= 0.994;
        particle.vy *= 0.994;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.rotation += particle.spin * delta;

        const fade = Math.min(1, particle.life / (particle.maxLife * 0.35));
        context.save();
        context.globalAlpha = fade;
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        context.fillStyle = particle.color;

        if (particle.shape === "circle") {
          context.beginPath();
          context.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
          context.fill();
        } else {
          context.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
        }

        context.restore();
        alive.push(particle);
      }

      particlesRef.current = alive;

      if (alive.length > 0) {
        frameRef.current = window.requestAnimationFrame(step);
      } else {
        context.clearRect(0, 0, width, height);
        frameRef.current = null;
      }
    };

    frameRef.current = window.requestAnimationFrame(step);
  }, []);

  const fire = useCallback(
    (originX = 0.5, originY = 0.5, count = 110) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      if (viewportRef.current.width === 0) {
        resizeCanvas();
      }

      const { width, height } = viewportRef.current;
      if (width === 0 || height === 0) {
        return;
      }

      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3.5 + Math.random() * 9;
        const maxLife = 90 + Math.random() * 100;

        particlesRef.current.push({
          x: originX * width,
          y: originY * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2.5,
          size: 5 + Math.random() * 7,
          color: COLORS[Math.floor(Math.random() * COLORS.length)] ?? COLORS[0],
          rotation: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.24,
          life: maxLife,
          maxLife,
          shape: Math.random() > 0.72 ? "circle" : "rect",
        });
      }

      startLoop();
    },
    [resizeCanvas, startLoop],
  );

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      particlesRef.current = [];
    };
  }, [resizeCanvas]);

  return { canvasRef, fire };
}
