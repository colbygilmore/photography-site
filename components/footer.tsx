import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#000000] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-200">© {new Date().getFullYear()} Colby Gilmore Photography. All rights reserved.</p>
        <Link href="/about" className="text-slate-200 transition hover:text-amber-300">
          About Me
        </Link>
      </div>
    </footer>
  );
}
