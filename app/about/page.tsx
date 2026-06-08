import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-[#666666]">Photographer Bio</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Colby Gilmore</h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Image src="/photos/homepageBioPhoto.jpg" alt="Colby Gilmore" width={220} height={280} className="rounded-2xl object-cover" />
          </div>
          <p className="text-base leading-7 text-slate-300">
            The mountain west has been my backyard for over 20 years — from the red rock canyons of the south to the wildlife corridors of the north. I shoot landscapes and wildlife with an eye shaped by decades of film and digital work. I&apos;m always chasing the light that makes a scene impossible to ignore.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-[#000000] p-8 shadow-xl shadow-slate-900/30 ring-1 ring-[#000000]">
          <h2 className="text-2xl font-semibold text-white">Philosophy</h2>
          <p className="mt-4 text-slate-300 leading-7">
            Great photography begins with intention. I focus on clean, cinematic compositions that let the subject breathe, using natural light and authentic color to bring each scene to life.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            Whether it’s a commissioned portrait, editorial project, or personal series, my goal is to make every frame feel thoughtful and memorable.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl bg-[#000000] p-8 shadow-xl shadow-slate-900/30 ring-1 ring-[#000000]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Capabilities</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Editorial and commercial photography</li>
              <li>Portraiture and lifestyle shoots</li>
              <li>Brand imagery and visual storytelling</li>
              <li>On-location shooting and studio setups</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4 text-slate-300 leading-7">
              Ready to collaborate? Reach out through the contact form on future site builds or connect on social media for the latest project updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
