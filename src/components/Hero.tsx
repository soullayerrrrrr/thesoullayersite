import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden border-b border-line">
      {/* Replace /videos/hero.mp4 with your print-timelapse footage.
          Falls back to a static gradient if the video is missing. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brass-bright">
          Layer 0001 / Genesis
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-5xl leading-[1.05] text-bone sm:text-7xl">
          From data to something you can hold.
        </h1>
        <p className="mt-5 max-w-md text-bone-dim">
          Articulated collectibles, personalized keychains, and made-to-order
          prints — designed, printed, and shipped by two people who turned a
          college hobby into a studio.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/catalog"
            className="bg-brass px-6 py-3 font-mono text-[13px] uppercase tracking-[0.14em] text-obsidian transition-colors hover:bg-brass-bright"
          >
            Shop the catalog
          </Link>
          <Link
            href="/about"
            className="border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:border-brass hover:text-bone"
          >
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
}
