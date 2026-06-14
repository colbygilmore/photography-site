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
          <div className="space-y-4 text-base leading-7 text-slate-300">
            <p>
              I started my photography journey in the late 1980s with a clunky Polaroid 600 that my family took on almost every vacation from Kansas to Colorado. Looking back, I think that&apos;s really where my love for the mountains began.
            </p>
            <p>
              In the 90s I graduated to a disposable point-and-shoot that rarely came back from the print lab looking the way I hoped. During my sophomore year of high school I took a black and white photography class and upgraded to the trusty Pentax K1000. I genuinely enjoyed photography, but truth be told, I was a far better graphite pencil and oil painter than I was a photographer.
            </p>
            <p>
              Life took over and I set the camera down for nearly eight years. I went to college and studied horticulture, focusing on landscape architecture and construction. Somewhere in my early twenties it hit me — this path would never lead me back to photography or the mountains. So I went back to school and earned a BFA with a focus in photography and graphic design, including web design and development back when that was barely considered a real career. That&apos;s where my photography grew tenfold.
            </p>
            <p>
              My first black and white course in 2001 changed everything. I fell in love with the full lifecycle of photography — from ideation and composition, to capturing a quality image, to my favorite part: the darkroom. Fueling that passion was a job at an iconic photography store in my hometown, where the pros — newspaper photographers, sports team shooters, hospital and aerospace industry clients — came in as much to hang out and talk shop as they did to buy anything.
            </p>
            <p>
              At the time I was shooting a Canon Rebel 35mm with a 4.5–5.6 lens, right at the dawn of the digital age. I got to experience the early days of Photoshop and the digital darkroom firsthand. Eventually I picked up a Canon 40D — one of the first available in Wichita — and took it absolutely everywhere until it finally gave out around 2010, worn down by the sheer number of frames it had captured.
            </p>
            <p>
              That&apos;s when I moved to full-frame with a Canon 6D, which I still shoot with today, alongside the latest iPhone for computational photography.
            </p>
            <p>
              Although I&apos;m featuring almost all digital photography today, there will be 35MM B&W, color and slide film images coming in the near future.
            </p>
          </div>
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
