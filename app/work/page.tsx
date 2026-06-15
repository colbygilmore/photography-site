import Image from 'next/image';

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

      <div className="rounded-3xl bg-[#000000] p-8 shadow-xl shadow-slate-900/30 ring-1 ring-[#000000]">
        <div className="mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="relative overflow-hidden">
            <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
            <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Water Photography</span>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/photos/zion_02.jpg" alt="Zion" width={400} height={250} className="w-full object-cover" />
            <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
            <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/photos/glenCanyonDam.jpg" alt="Glen Canyon Dam" width={400} height={250} className="w-full object-cover" />
            <span className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-md">Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
