import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { site } from "@/data/site";

export default function Home() {
  const featured = products.filter((p) => p.tag).slice(0, 4);

  return (
    <main>
      <Hero />

      {/* Category strip */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-bone">Shop by category</h2>
          <Link href="/catalog" className="font-mono text-[12px] uppercase tracking-[0.14em] text-brass-bright hover:text-brass">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/catalog?category=${encodeURIComponent(c)}`}
              className="group border border-line px-5 py-8 text-center transition-colors hover:border-brass"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-bone-dim group-hover:text-brass-bright">
                {c}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl text-bone">New &amp; noteworthy</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Founders teaser */}
      <section className="border-y border-line bg-obsidian-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:grid-cols-2 sm:px-8 sm:py-28">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brass">
              Founder&apos;s Story
            </p>
            <h2 className="mt-4 font-display text-4xl text-bone">Meet the founders</h2>
            <p className="mt-5 text-bone-dim">
              {site.founders.story[0]}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-mono text-[13px] uppercase tracking-[0.14em] text-brass-bright hover:text-brass"
            >
              Read our full story →
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full self-center overflow-hidden">
            <Image
              src="/images/founders.jpg"
              alt="Ankur and Sumit, founders of The Soul Layer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-display text-3xl text-bone">
          Found something you like?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-bone-dim">
          Every order goes through Instagram DM — pick your piece, message us,
          and we&apos;ll confirm details and shipping.
        </p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block bg-brass px-7 py-3 font-mono text-[13px] uppercase tracking-[0.14em] text-obsidian transition-colors hover:bg-brass-bright"
        >
          Order on Instagram
        </a>
      </section>
    </main>
  );
}
