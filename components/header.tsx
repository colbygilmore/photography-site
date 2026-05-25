import Link from 'next/link';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About Me' }
];

export default function Header() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Colby Gilmore
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-200">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-amber-300">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
