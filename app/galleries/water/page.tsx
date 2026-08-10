'use client';
import { useState } from 'react';
import Image from 'next/image';
import PhotoLightbox from '../../../components/photo-lightbox';

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: '/photos/glenCanyonDam.jpg', alt: 'Glen Canyon Dam, Arizona' },
  { src: '/photos/glenCanyonDam.jpg', alt: 'Glen Canyon Dam, Arizona' },
  { src: '/photos/glenCanyonDam.jpg', alt: 'Glen Canyon Dam, Arizona' },
  { src: '/photos/glenCanyonDam.jpg', alt: 'Glen Canyon Dam, Arizona' },
];

export default function WaterGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Gallery</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Water</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          Lakes, rivers, dams, and reflections — water photography from across the American West.
        </p>
      </div>

      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="mb-8 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={800}
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
