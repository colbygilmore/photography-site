import GalleryCard from '../../components/gallery-card';

const galleryItems = [
  {
    title: 'Coastal Light',
    description: 'A quiet sunrise moment with warm coastal tones.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'City Motion',
    description: 'Nighttime cityscape with motion blur and ambient glow.',
    image: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Portrait Depth',
    description: 'Intimate portrait lighting with strong contrast.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Landscape Story',
    description: 'Wide-angle landscape with dramatic skies and layered textures.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function WorkPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Landscape Photography Galleries</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Featured photography galleries</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          Explore a selection of curated projects that show how light, composition, and atmosphere come together across different genres.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {galleryItems.map((item) => (
          <GalleryCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
