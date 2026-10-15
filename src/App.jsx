import { config } from "./config.js";
import FloatingFX from "./components/FloatingFX.jsx";
import Names from "./components/Names.jsx";
import Gallery from "./components/Gallery.jsx";
import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    <>
      <FloatingFX />
      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-12 pt-7 text-center">
        <Names name1={config.name1} name2={config.name2} />
        <Gallery photos={config.photos} />
        <Counter start={config.start} />
      </main>
    </>
  );
}
