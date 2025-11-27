import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - ACube 2.0',
  description: 'Learn about ACube Technologies - Bridging talent across borders',
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-32 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            About <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
            ACube Tech was born from a simple, personal truth: <span className="text-cyan-400">talent is universal, but opportunity is not.</span>
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16 text-zinc-300 leading-relaxed">
          {/* Origin Story */}
          <section className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent" />
            <div className="pl-8">
              <p className="text-lg mb-6">
                We started as a group of college students from developing countries, who were fortunate enough to study abroad at some of the world's leading institutions, including Ivy League institutions. As we navigated our new environments, one realization hit us deeply: many of our friends back home were just as talented, often more talented, but lacked access to the opportunities we were now surrounded by.
              </p>

              <div className="space-y-3 my-8 pl-6 border-l-2 border-cyan-400/30">
                <p className="text-zinc-400 italic">Not because they were not capable.</p>
                <p className="text-zinc-400 italic">Not because they did not dream big.</p>
                <p className="text-zinc-400 italic">But because resources, information, and sometimes just luck stood in the way.</p>
              </div>

              <p className="text-lg">
                The result was a massive pay and opportunity gap between those who could move abroad and those who could not. We knew something had to change.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-gradient-to-br from-cyan-400/5 to-transparent p-8 md:p-12 rounded-3xl border border-cyan-400/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission: <span className="text-cyan-400">Bridging Worlds, Expanding Possibilities</span>
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                ACube began as a small experiment, a bridge between exceptional talent in emerging markets and the startups who needed them. We saw early-stage founders in places like the United States and Singapore struggling to hire because salaries were simply too high. And we saw world-class talent in Pakistan struggling to find global opportunities despite being equally skilled.
              </p>

              <div className="my-8 space-y-4">
                <p className="text-xl font-semibold text-cyan-400">So we asked:</p>
                <p className="text-2xl font-bold text-white pl-6">What if we could bring these two worlds together?</p>
              </div>

              <p>
                What started as a side project quickly became a movement. Founder after founder kept returning, not just because of cost, but because the talent delivered consistently.
              </p>

              <p className="text-xl font-semibold text-white pt-4">
                Today, ACube connects top 5 percent offshore talent with global startups, creating life-changing opportunities for talent and game-changing advantages for founders.
              </p>
            </div>
          </section>

          {/* Quality at the Core */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Quality at the <span className="text-cyan-400">Core</span>
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                Our mission is rooted in impact, but quality is our non-negotiable.
              </p>

              <p>
                We believe in empowering people from developing countries, but never at the expense of our clients. Every engineer, designer, or operator we place goes through a rigorous, multi-step screening process designed to identify only the best.
              </p>

              <div className="my-8 bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-xl font-semibold text-cyan-400 mb-6">This commitment ensures:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0">•</span>
                    <span>Clients receive exceptional talent who perform at global standards</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0">•</span>
                    <span>Talent gains access to jobs where their skill is genuinely valued</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0">•</span>
                    <span>Both sides feel the satisfaction of creating a meaningful and mutually beneficial partnership</span>
                  </li>
                </ul>
              </div>

              <p>
                This is why nearly every client we have worked with continues to trust us and why many share how fulfilling it feels to give someone deserving a real chance.
              </p>
            </div>
          </section>

          {/* Why We Exist */}
          <section className="relative overflow-hidden rounded-3xl">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 blur-[100px] rounded-full" />

            <div className="relative p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why We <span className="text-cyan-400">Exist</span>
              </h2>

              <div className="space-y-4 text-lg md:text-xl">
                <p className="font-medium">Because someone's future should not be defined by where they were born.</p>
                <p className="font-medium">Because global times demand global solutions.</p>
                <p className="font-medium">Because talent deserves a chance, regardless of passport, income, or geography.</p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  At ACube, we are here to be that bridge.
                </p>
                <div className="space-y-2 text-xl text-cyan-400">
                  <p>For founders.</p>
                  <p>For dreamers.</p>
                  <p>For the next generation of global builders.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to be part of the story?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-zinc-950 font-bold rounded-xl hover:from-cyan-500 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-400/20"
              >
                Hire Top Talent
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
