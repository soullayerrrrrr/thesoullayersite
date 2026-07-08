"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-obsidian/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg tracking-wide text-bone">
          The <span className="text-brass">Soul</span> Layer
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:text-brass-bright"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-bone sm:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 pb-5 sm:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm uppercase tracking-[0.14em] text-bone-dim"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
