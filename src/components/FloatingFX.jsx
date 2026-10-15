import { useEffect, useMemo, useState } from "react";

const EMOJIS = ["❤", "💖", "💗", "💕", "♥"];

export default function FloatingFX() {
  const [hearts, setHearts] = useState([]);
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        dur: 2 + Math.random() * 3,
      })),
    []
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    const spawn = () => {
      const id = n++;
      const dur = 7 + Math.random() * 7;
      const h = {
        id,
        char: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        size: 12 + Math.random() * 26,
        color: `hsl(${335 + Math.random() * 25}, 90%, ${60 + Math.random() * 15}%)`,
        dur,
        dx: Math.random() * 120 - 60,
        rot: Math.random() * 80 - 40,
      };
      setHearts((p) => [...p, h]);
      setTimeout(() => setHearts((p) => p.filter((x) => x.id !== id)), dur * 1000);
    };
    for (let i = 0; i < 8; i++) setTimeout(spawn, i * 300);
    const iv = setInterval(spawn, 700);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map((s) => (
        <i
          key={s.id}
          className="absolute h-[3px] w-[3px] animate-twinkle rounded-full bg-white"
          style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s`, animationDuration: `${s.dur}s` }}
        />
      ))}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute -bottom-10 animate-rise opacity-0 drop-shadow-[0_0_6px_var(--glow)]"
          style={{
            left: `${h.left}%`, fontSize: h.size, color: h.color,
            animationDuration: `${h.dur}s`, "--dx": `${h.dx}px`, "--rot": `${h.rot}deg`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
}
