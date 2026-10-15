import { useEffect, useState } from "react";

// Diferença de calendário: anos, meses, dias, horas, minutos e segundos.
function diff(start, now) {
  if (now < start) return { y: 0, mo: 0, d: 0, h: 0, mi: 0, s: 0 };
  let y = now.getFullYear() - start.getFullYear();
  let mo = now.getMonth() - start.getMonth();
  let d = now.getDate() - start.getDate();
  let h = now.getHours() - start.getHours();
  let mi = now.getMinutes() - start.getMinutes();
  let s = now.getSeconds() - start.getSeconds();
  if (s < 0) { s += 60; mi--; }
  if (mi < 0) { mi += 60; h--; }
  if (h < 0) { h += 24; d--; }
  if (d < 0) { d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); mo--; }
  if (mo < 0) { mo += 12; y--; }
  return { y, mo, d, h, mi, s };
}

export default function useElapsed(startISO) {
  const start = new Date(startISO);
  const [t, setT] = useState(() => diff(start, new Date()));
  useEffect(() => {
    const id = setInterval(() => setT(diff(new Date(startISO), new Date())), 1000);
    return () => clearInterval(id);
  }, [startISO]);
  return t;
}
