import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-[#1f1f1f] bg-[#000000] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="relative h-10 w-10 overflow-hidden bg-[#000000]">
            <Image src="/cameraLogo.png" alt="Camera logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Colby Gilmore</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-200">
          <div className="group relative">
            <span className="flex cursor-default items-center gap-1 transition group-hover:text-amber-300">
              Galleries
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="min-w-[140px] rounded-xl border border-slate-800 bg-black py-1 shadow-xl shadow-black/50">
                <Link
                  href="/galleries/water"
                  className="block px-4 py-2 text-slate-200 transition hover:text-amber-300"
                >
                  Water
                </Link>
              </div>
            </div>
          </div>
          <Link href="/about" className="transition hover:text-amber-300">About</Link>
        </nav>
      </div>
    </header>
  );
}
