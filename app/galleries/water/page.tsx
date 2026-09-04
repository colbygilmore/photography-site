'use client';
import { useState } from 'react';
import Image from 'next/image';
import PhotoLightbox from '../../../components/photo-lightbox';

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: '/photos/glenCanyon_summer_01.jpg', alt: 'Glen Canyon Dam, Arizona' },
  { src: '/photos/water_horseShoeBend_01.jpg', alt: 'Glen Canyon Dam, Arizona' },
  { src: '/photos/water_emmigration_winter_01.jpg', alt: 'Glen Canyon Dam, Arizona' },
  { src: '/photos/water_butlerMiddleSchool_01.jpg', alt: 'Glen Canyon Dam, Arizona' },
];

export default function WaterGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        
        <h1 className="text-sm uppercase tracking-[0.32em] text-[#666666]">Water</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          Probably not what you were expecting under a water gallery, but that's the point. This work holds a special interest to me.
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
