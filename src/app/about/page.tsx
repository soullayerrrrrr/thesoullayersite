import Image from "next/image";
import { site } from "@/data/site";

export const metadata = { title: "About — The Soul Layer" };

export default function AboutPage() {
  return (
    <main>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden border-b border-line">
        <Image
          src="/images/founders.jpg"
          alt="The Soul Layer founders"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 sm:px-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brass-bright">
            Founder&apos;s Story
          </p>
          <h1 className="mt-3 font-display text-5xl text-bone">Meet the founders</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-display text-2xl leading-relaxed text-bone">
          Founded by <span className="text-brass-bright">{site.founders.names[0]}</span> and{" "}
          <span className="text-brass-bright">{site.founders.names[1]}</span>, The Soul Layer
          exists at the intersection of imagination and reality.
        </p>

        <div className="mt-8 space-y-6 text-bone-dim">
          {site.founders.story.slice(1).map((p, i) => (
            <p key={i} className="text-lg leading-relaxed">{p}</p>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="border border-line px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-bone-dim hover:border-brass hover:text-bone">
            Instagram
          </a>
          <a href={site.youtubeUrl} target="_blank" rel="noreferrer" className="border border-line px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-bone-dim hover:border-brass hover:text-bone">
            YouTube
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer" className="border border-line px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-bone-dim hover:border-brass hover:text-bone">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
