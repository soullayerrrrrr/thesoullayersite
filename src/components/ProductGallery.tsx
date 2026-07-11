"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="print-reveal aspect-[4/5] w-full bg-obsidian-2">
        <div className="print-image relative h-full w-full">
          <Image
            src={images[active]}
            alt={name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <span className="layer-line" />
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative aspect-square bg-obsidian-2 border ${
                active === i ? "border-brass" : "border-line"
              }`}
            >
              <Image
                src={img}
                alt={`${name} angle ${i + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
