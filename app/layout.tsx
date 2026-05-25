import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Colby Gilmore Photography',
  description: 'A responsive portfolio website showcasing photography work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <Header />
          <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
