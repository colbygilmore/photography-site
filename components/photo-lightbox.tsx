'use client';
import { useEffect } from 'react';
import Image from 'next/image';

type Photo = { src: string; alt: string };

type Props = {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function PhotoLightbox({ photos, currentIndex, onClose, onNavigate }: Props) {
  const photo = photos[currentIndex];
  const total = photos.length;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + total) % total);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % total);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, total, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-lg transition hover:bg-white/20"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-slate-400">
        {currentIndex + 1} / {total}
      </div>

      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate((currentIndex - 1 + total) % total); }}
          className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-3xl transition hover:bg-white/20"
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}

      <div
        className="flex items-center justify-center p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1400}
          height={900}
          className="max-h-[75vh] w-auto max-w-[90vw] object-contain"
          priority
        />
      </div>

      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate((currentIndex + 1) % total); }}
          className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-3xl transition hover:bg-white/20"
          aria-label="Next photo"
        >
          ›
        </button>
      )}
    </div>
  );
}
