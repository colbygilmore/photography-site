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
            <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Photographer Bio</p>
            <h1 className="hidden text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Colby Gilmore
            </h1>
            <div className="flex items-start gap-6">
              <div className="relative w-[12%] shrink-0 overflow-hidden rounded-2xl">
                <Image src="/photos/homepageBioPhoto.jpg" alt="Colby Gilmore" width={98} height={62} className="w-full object-cover" />
              </div>
              <p className="text-lg leading-8 text-slate-300">
                The mountain west has been my backyard for over 20 years — from the red rock canyons of the south to the wildlife corridors of the north. I shoot landscapes, wildlife, and action sports with an eye shaped by decades of film and digital work. I&apos;m always chasing the light that makes a scene impossible to ignore.
              </p>
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
          <h2 className="text-2xl font-semibold text-white">Image Galleries</h2>
          <div className="mt-4 flex gap-2">
            <div className="w-1/2 overflow-hidden rounded-2xl">
              <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
            </div>
            <div className="w-1/2 overflow-hidden rounded-2xl">
              <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
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
