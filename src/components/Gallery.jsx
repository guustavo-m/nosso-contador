import { useRef } from "react";

export default function Gallery({ photos }) {
  const track = useRef(null);
  const base = import.meta.env.BASE_URL;
  const items = photos.length ? photos : Array.from({ length: 8 }, (_, i) => null);
  const scroll = (dir) =>
    track.current?.scrollBy({ left: dir * Math.max(track.current.clientWidth * 0.6, 240), behavior: "smooth" });

  return (
    <section className="relative" aria-label="Galeria de fotos">
      <button onClick={() => scroll(-1)} aria-label="Anterior"
        className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-line bg-card text-xl backdrop-blur hover:bg-rose hover:text-white sm:block">
        ‹
      </button>
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-5">
        {items.map((name, i) => (
          <figure key={name ?? i}
            className="aspect-[3/4] w-[72%] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl border-2 border-line bg-card shadow-glow transition-transform duration-300 hover:-translate-y-1.5 hover:-rotate-1 even:rotate-1">
            {name ? (
              <img src={`${base}img/${name}`} alt={`Foto do casal ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-rose/25 to-purple-700/25 text-muted">
                <b className="text-5xl text-rose">♥</b>
                <span>Foto {i + 1}</span>
              </div>
            )}
          </figure>
        ))}
      </div>
      <button onClick={() => scroll(1)} aria-label="Próxima"
        className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-line bg-card text-xl backdrop-blur hover:bg-rose hover:text-white sm:block">
        ›
      </button>
    </section>
  );
}
