import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '/work', label: 'Galleries' },
  { href: '/about', label: 'About' }
];

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
