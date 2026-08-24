'use client';
import { useState } from 'react';
import Image from 'next/image';
import PhotoLightbox from '../../../components/photo-lightbox';

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: '/photos/organic_shaggy_mane_mushroom_01.jpg', alt: 'Organic landscape forms' },
  { src: '/photos/mushroom_summer_01.jpg', alt: 'Organic landscape forms' },
  { src: '/photos/organic_musk_thistle_01.jpg', alt: 'Organic landscape forms' },
  { src: '/photos/organic_pinecone_01.jpg', alt: 'Organic landscape forms' },
];

export default function OrganicGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Gallery</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Organic</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          Natural textures and forms shaped by wind, water, and time across the American West.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-[8/5] cursor-pointer overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition duration-300 hover:scale-[1.02] hover:opacity-90"
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
