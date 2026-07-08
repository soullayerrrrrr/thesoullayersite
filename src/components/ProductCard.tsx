import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
      <div className="print-reveal aspect-[4/5] w-full bg-obsidian-2">
        <div className="print-image relative h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <span className="layer-line" />

        {product.tag && (
          <span className="absolute left-3 top-3 bg-bone px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-obsidian">
            {product.tag}
          </span>
        )}
      </div>

      <div className="mt-3">
        <p className="text-[15px] leading-snug text-bone">{product.name}</p>
        <div className="mt-1 flex items-baseline gap-2 font-mono text-[13px]">
          <span className="text-brass-bright">Rs. {product.price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-bone-dim line-through">
              Rs. {product.compareAtPrice!.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
