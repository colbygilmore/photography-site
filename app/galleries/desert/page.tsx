'use client';
import { useState } from 'react';
import Image from 'next/image';
import PhotoLightbox from '../../../components/photo-lightbox';

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: '/photos/zion_03.jpg', alt: 'Zion National Park, Utah' },
  { src: '/photos/zion_02.jpg', alt: 'Zion National Park, Utah' },
  { src: '/photos/NMnavajoRock.01_bw.jpg', alt: 'Navajo Rock, New Mexico' },
  { src: '/photos/shipRockRoad.png', alt: 'Shiprock Road, New Mexico' },
];

export default function DesertGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Gallery</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Desert</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          Canyons, mesas, and sun-scorched rock — desert photography from across the American Southwest.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={250}
              className="w-full object-cover transition duration-300 hover:scale-[1.02] hover:opacity-90"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
