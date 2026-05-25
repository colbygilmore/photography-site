import HeroCarousel from '../components/hero-carousel';
import Link from 'next/link';

const highlights = [
  'Professional portfolio layout',
  'Mobile-first responsive design',
  'Clean gallery pages for featured work',
  'Simple navigation with Work + About Me',
];

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none">
        <HeroCarousel />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div className="space-y-6 rounded-3xl bg-slate-900/90 p-8 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-700/80">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-amber-300">Photography Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Capture mood, light, and story in every frame.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Showcase your digital work with a modern, accessible portfolio built for galleries, editorial clients, and collaborators.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5">
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/work" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              View Work
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800/80">
              About Me
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900/90 p-8 shadow-xl shadow-slate-900/30 ring-1 ring-slate-700/80">
          <h2 className="text-2xl font-semibold text-white">Why this site?</h2>
          <p className="mt-4 text-slate-300 leading-7">
            A focused photography portfolio brings all your best work into one place for clients to explore. It creates a professional first impression, builds trust, and increases your chances of booking future projects.
          </p>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              Curated presentation for galleries and commissions
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              Fast responsive experience across desktop and mobile
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              Clean, branded navigation with minimal friction
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
