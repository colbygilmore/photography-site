import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
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
      <body className="bg-black text-slate-100">
        <div className="min-h-screen bg-black">
          <Header />
          <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-RWTBPBNBF1" />
    </html>
  );
}
