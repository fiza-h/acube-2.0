import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Talspace',
  description: 'Learn about Talspace - Bridging talent across borders',
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />

      <div className="container mx-auto px-6 pt-40 pb-32 max-w-5xl">
        {/* Massive Minimal Hero */}
        <div className="mb-32">
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">
            The Premise
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans tracking-tight text-white leading-[1.05] mb-8">
            Talent is universal. <br />
            <span className="text-zinc-500">Opportunity is not.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            We started Talspace because we witnessed a broken system: brilliant minds geofenced from global opportunities by nothing more than borders.
          </p>
        </div>

        {/* The Gap & The Solution */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <div>
            <div className="h-px bg-white/20 w-8 mb-8" />
            <h2 className="text-2xl font-medium text-white mb-4">The Gap</h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Founders in established hubs struggle to hire due to exorbitant costs and hyper-competitive local markets. Meanwhile, elite engineers in emerging tech ecosystems lack direct access to these transformative projects. The result is a massive inefficiency that slows global innovation.
            </p>
          </div>
          <div>
            <div className="h-px bg-cyan-500/50 w-8 mb-8" />
            <h2 className="text-2xl font-medium text-white mb-4">The Solution</h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              We act as the ultimate bridge. We rigorously vet the top 1% of offshore talent—our &quot;Talnauts&quot;—and seamlessly embed them into ambitious global product teams. No agencies, no bloated layers. Just pure, verified engineering capability aligned with your mission.
            </p>
          </div>
        </div>

        {/* Quality Section */}
        <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 md:p-16 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-white mb-6">
              Quality is our true north.
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
              Empowering global talent is meaningless if it compromises product excellence. Every engineer we passport into our network undergoes a punishing clearance protocol.
            </p>

            <ul className="space-y-6">
              {[
                "Technical capability matching tier-1 hubs.",
                "Professional maturity & timezone alignment.",
                "Communication clarity for seamless remote collaboration."
              ].map((item, i) => (
                <li key={i} className="flex items-start text-zinc-300 font-light text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="text-center pt-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-white mb-8">
            Build without borders.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://calendly.com/absaarmalik15/30min"
              target="_blank"
              className="px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Hire Talnauts
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 bg-transparent border border-white/10 text-white font-medium text-sm rounded-full hover:bg-zinc-900 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
