import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import Link from "next/link";

export const metadata = {
  title: "Catalog — The Soul Layer",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category && categories.includes(category as never) ? category : null;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <main className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brass">
        Catalog
      </p>
      <h1 className="mt-3 font-display text-4xl text-bone">
        {active ?? "Everything we make"}
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/catalog"
          className={`border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] ${
            !active ? "border-brass text-brass-bright" : "border-line text-bone-dim hover:border-brass"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/catalog?category=${encodeURIComponent(c)}`}
            className={`border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] ${
              active === c ? "border-brass text-brass-bright" : "border-line text-bone-dim hover:border-brass"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-16 text-center text-bone-dim">
          Nothing here yet — check back soon.
        </p>
      )}
    </main>
  );
}
