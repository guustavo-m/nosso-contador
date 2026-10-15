export default function Names({ name1, name2 }) {
  return (
    <header>
      <h1 className="font-script text-[clamp(2.4rem,9vw,4.6rem)] leading-tight [text-shadow:0_0_18px_var(--glow),0_0_40px_var(--glow)]">
        {name1}
        <span className="mx-2 inline-block animate-beat text-rose">❤</span>
        {name2}
      </h1>
      <p className="mb-5 tracking-wide text-muted">Nossa história, segundo a segundo</p>
    </header>
  );
}
