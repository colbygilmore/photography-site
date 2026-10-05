import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        
        <h1 className="text-sm uppercase tracking-[0.32em] text-[#666666]">Colby Gilmore - Photography Bio</h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Image src="/photos/homepageBioPhoto.jpg" alt="Colby Gilmore" width={220} height={280} className="rounded-2xl object-cover" />
          </div>
          <div className="space-y-4 text-base leading-7 text-slate-300">
            <p>I grew up in the Midwest, in a childhood full of sports, rodeo, art, and science. My photography journey began in the mid-1990s at my high school, long before the digital age, and that was fine by me. For a few years, I spent more time in the darkroom than anywhere else on campus.
            </p>
            <p>
              In the early 2000s, I went to college as a double major in Web Design and Photography. I still spent countless hours in the darkroom, but I also started experimenting with digital photography and Photoshop, and I've been blending the two worlds ever since.
            </p>
            <p>
              Every summer, my folks took my brother and me to the mountain west states for vacation. Something about those places stuck with me, though I couldn't explain it back then. Today, I know it as humbling and raw, and it shapes how I see the world through my lens.  There's a good chance you'll never catch me in a big city, but definitely out on some peak capturing work you'll see on my site..
            </p>
            <p>
              Thanks for visiting my site and taking the time to learn more about my work.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-[#000000] p-8 shadow-xl shadow-slate-900/30 ring-1 ring-[#000000]">
          <h2 className="hidden text-2xl font-semibold text-white">Philosophy</h2>
          <p className="hidden mt-4 text-slate-300 leading-7">
            Great photography begins with intention. I focus on clean, cinematic compositions that let the subject breathe, using natural light and authentic color to bring each scene to life.
          </p>
          <p className="hidden mt-4 text-slate-300 leading-7">
            Whether it’s a commissioned portrait, editorial project, or personal series, my goal is to make every frame feel thoughtful and memorable.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl bg-[#000000] p-8 shadow-xl shadow-slate-900/30 ring-1 ring-[#000000]">
          <div>
            <h2 className="hidden text-2xl font-semibold text-white">Capabilities</h2>
            <ul className="hidden mt-4 space-y-3 text-slate-300">
              <li>Editorial and commercial photography</li>
              <li>Portraiture and lifestyle shoots</li>
              <li>Brand imagery and visual storytelling</li>
              <li>On-location shooting and studio setups</li>
            </ul>
          </div>
          <div>
            <h2 className="hidden text-2xl font-semibold text-white">Contact</h2>
            <p className="hidden mt-4 text-slate-300 leading-7">
              Ready to collaborate? Reach out through the contact form on future site builds or connect on social media for the latest project updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
