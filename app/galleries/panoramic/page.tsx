'use client';
import { useState } from 'react';
import Image from 'next/image';
import PhotoLightbox from '../../../components/photo-lightbox';

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: '/photos/emmigration_spring_01.jpg', alt: 'Panoramic landscape' },
  { src: '/photos/guardsman_fall_01.jpg', alt: 'Panoramic landscape' },
  { src: '/photos/livingroom_fall_01.jpg', alt: 'Panoramic landscape' },
  { src: '/photos/gunnison_summer_01.jpg', alt: 'Panoramic landscape' },
  { src: '/photos/wireMountain_01.jpg', alt: 'Panoramic landscape' },
  { src: '/photos/uintas_fall_01.jpg', alt: 'Panoramic landscape' },
];

export default function PanoramicGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Panoramic</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Panoramic</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          Wide-format panoramic photography capturing sweeping landscapes across the American West.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={800}
              className="h-full w-full object-cover transition duration-300 hover:scale-[1.02] hover:opacity-90"
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
