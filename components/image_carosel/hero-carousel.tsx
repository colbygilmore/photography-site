'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    title: 'Ship Rock Road',
    subtitle: 'New work added for the hero carousel.',
    image: '/photos/shipRockRoad.png'
  },
  {
    title: 'Editorial Portraits',
    subtitle: 'Bold lighting and thoughtful composition.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80'
  },
  {
    title: 'Landscape Storytelling',
    subtitle: 'Wide scenes with dramatic skies and texture.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f34?auto=format&fit=crop&w=1500&q=80'
  },
  {
    title: 'City Atmosphere',
    subtitle: 'Nighttime captures with vivid urban glow.',
    image: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=1500&q=80'
  }
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-2xl shadow-slate-950/40">
      <div className="relative h-[474px] sm:h-[642px] md:h-[738px]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={index === activeIndex} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-10 px-6 text-white sm:px-10">
              <p className="text-sm uppercase tracking-[0.32em] text-amber-300">Portfolio hero</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-8 rounded-full transition ${index === activeIndex ? 'bg-amber-400' : 'bg-slate-600/70 hover:bg-slate-400/80'}`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
