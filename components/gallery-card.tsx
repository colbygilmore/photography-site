import Image from 'next/image';

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="overflow-hidden rounded-4xl bg-slate-900 shadow-xl shadow-slate-950/30 ring-1 ring-slate-700/80">
      <div className="relative h-80 w-full sm:h-96">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="space-y-3 p-6">
        <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
        <p className="text-sm leading-7 text-slate-300">{item.description}</p>
      </div>
    </article>
  );
}
