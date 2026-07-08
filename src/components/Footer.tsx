import Link from "next/link";
import { site } from "@/data/site";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg text-bone">The Soul Layer</p>
            <p className="mt-2 max-w-xs text-sm text-bone-dim">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brass">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm text-bone-dim">
              <li><Link href="/catalog" className="hover:text-bone">Full catalog</Link></li>
              <li><Link href="/catalog?category=Keychains" className="hover:text-bone">Keychains</Link></li>
              <li><Link href="/catalog?category=Custom+Prints" className="hover:text-bone">Custom prints</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brass">
              Elsewhere
            </p>
            <div className="mt-3 flex gap-4">
              <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-bone-dim hover:text-brass-bright">
                <InstagramIcon size={20} />
              </a>
              <a href={site.youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-bone-dim hover:text-brass-bright">
                <YoutubeIcon size={20} />
              </a>
              <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-bone-dim hover:text-brass-bright">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-bone-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Soul Layer. All orders via Instagram DM.</p>
          <Link href="/contact" className="hover:text-bone">Get in touch</Link>
        </div>
      </div>
    </footer>
  );
}
