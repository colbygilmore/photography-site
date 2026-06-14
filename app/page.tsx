import HeroCarousel from '../components/image_carosel/hero-carousel';
import Image from 'next/image';
// import Link from 'next/link';


export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none">
        <HeroCarousel />
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-6 rounded-3xl bg-[#000000] p-8 shadow-2xl shadow-slate-900/40 ring-1 ring-[#000000]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Landscape Photography Galleries</p>
            <h1 className="hidden text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Colby Gilmore
            </h1>
            <div className="flex items-start gap-6">
              <div className="hidden relative w-[12%] shrink-0 overflow-hidden rounded-2xl">
                <Image src="/photos/homepageBioPhoto.jpg" alt="Colby Gilmore" width={98} height={62} className="w-full object-cover" />
              </div>
              <div className="space-y-4 text-lg leading-8 text-slate-300">
                <p>
                  Welcome to the online home of my landscape photography. Over the past 25 years I&apos;ve traveled the midwest plains, the mountain west, and the desert to build this collection. Some of the best memories of my life have been made behind the camera, and I can&apos;t wait to share them with you. All the best - Colby.
                </p>
              </div>
            </div>
          </div>


          {/* <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/work" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              View Work
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800/80">
              About Me
            </Link>
          </div> */}
        </div>

        <div className="rounded-3xl bg-[#000000] p-8 shadow-xl shadow-slate-900/30 ring-1 ring-[#000000]">
<div className="mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="relative overflow-hidden">
              <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
            </div>
            <div className="relative overflow-hidden">
              <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
            </div>
            <div className="relative overflow-hidden">
              <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
            </div>
            <div className="relative overflow-hidden">
              <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
            </div>
          </div>
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
