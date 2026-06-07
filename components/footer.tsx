export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#000000] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center text-sm text-slate-400">
        <p className="text-slate-200">© {new Date().getFullYear()} Colby Gilmore Photography. All rights reserved.</p>
      </div>
    </footer>
  );
}
