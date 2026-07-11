import { products } from "@/data/products";
import { instagramOrderLink } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return { title: product ? `${product.name} — The Soul Layer` : "Product — The Soul Layer" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Link href="/catalog" className="font-mono text-[12px] uppercase tracking-[0.12em] text-bone-dim hover:text-brass-bright">
        ← Back to catalog
      </Link>

      <div className="mt-6 grid gap-10 sm:grid-cols-2 sm:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brass">
            {product.category}
          </p>
          <h1 className="mt-3 font-display text-3xl text-bone sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3 font-mono text-lg">
            <span className="text-brass-bright">Rs. {product.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-bone-dim line-through">
                Rs. {product.compareAtPrice!.toFixed(2)}
              </span>
            )}
          </div>

          <p className="mt-6 text-bone-dim">{product.description}</p>

          <dl className="mt-6 divide-y divide-line border-y border-line">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between py-3 font-mono text-[13px]">
                <dt className="text-bone-dim">{s.label}</dt>
                <dd className="text-bone">{s.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={instagramOrderLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 block w-full bg-brass px-6 py-4 text-center font-mono text-[13px] uppercase tracking-[0.14em] text-obsidian transition-colors hover:bg-brass-bright btn-glow"
          >
            Order on Instagram
          </a>
          <p className="mt-3 text-center text-xs text-bone-dim">
            Opens a DM with this item pre-filled. We&apos;ll confirm price, color, and shipping there.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-2xl text-bone">You might also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
