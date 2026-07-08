import { site } from "@/data/site";
import { InstagramIcon } from "@/components/SocialIcons";

export const metadata = { title: "Contact — The Soul Layer" };

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-start justify-center px-5 py-16 sm:px-8">
      <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brass">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl text-bone sm:text-5xl">
        Let&apos;s talk.
      </h1>
      <p className="mt-5 max-w-md text-bone-dim">
        Orders, custom requests, and questions all go through Instagram DM —
        it&apos;s the fastest way to reach {site.founders.names.join(" & ")}.
      </p>

      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 flex items-center gap-3 bg-brass px-7 py-4 font-mono text-[13px] uppercase tracking-[0.14em] text-obsidian transition-colors hover:bg-brass-bright btn-glow"
      >
        <InstagramIcon size={18} />
        Message @{site.instagramHandle}
      </a>

      <div className="mt-14 border-t border-line pt-6 text-sm text-bone-dim">
        <p>For custom prints, share a reference photo or file and your timeline — we&apos;ll quote it in DM.</p>
      </div>
    </main>
  );
}
