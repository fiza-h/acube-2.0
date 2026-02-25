import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Quote, Globe, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'About Us - Talspace',
  description: 'Learn about Talspace - Bridging talent across borders',
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
      <Navbar />

      <div className="container mx-auto px-6 py-32 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-zinc-300">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight leading-tight">
            About <span className="italic text-cyan-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light max-w-3xl">
            Talspace was born from a simple, personal truth: <span className="text-white font-normal">talent is universal, but opportunity is not.</span>
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-zinc-300 leading-relaxed">
          {/* Origin Story */}
          <section className="relative pl-8 md:pl-0">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent md:hidden" />

            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-1 hidden md:flex flex-col items-center h-full">
                <div className="w-px h-full bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                </div>
              </div>

              <div className="md:col-span-11">
                <p className="text-lg mb-8 text-zinc-300">
                  We started as a group of college students from developing countries, who were fortunate enough to study abroad at some of the world&apos;s leading institutions, including Ivy League institutions. As we navigated our new environments, one realization hit us deeply: many of our friends back home were just as talented, often more talented, but lacked access to the opportunities we were now surrounded by.
                </p>

                <div className="space-y-4 my-10 pl-6 border-l-2 border-cyan-500/30 py-2">
                  <p className="text-zinc-400 italic font-serif text-lg">"Not because they were not capable.</p>
                  <p className="text-zinc-400 italic font-serif text-lg">Not because they did not dream big.</p>
                  <p className="text-zinc-400 italic font-serif text-lg">But because resources, information, and sometimes just luck stood in the way."</p>
                </div>

                <p className="text-lg text-zinc-300">
                  The result was a massive pay and opportunity gap between those who could move abroad and those who could not. We knew something had to change.
                </p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-zinc-900 border border-zinc-800 p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 relative z-10">
              Our Mission: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Bridging Worlds, Expanding Possibilities</span>
            </h2>

            <div className="space-y-8 text-lg relative z-10">
              <p>
                Talspace began as a small experiment, a bridge between exceptional talent in emerging markets and the startups who needed them. We saw early-stage founders in places like the United States and Singapore struggling to hire because salaries were simply too high. And we saw world-class talent in Pakistan struggling to find global opportunities despite being equally skilled.
              </p>

              <div className="p-8 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                <p className="text-lg font-medium text-cyan-400 mb-2">So we asked:</p>
                <p className="text-2xl font-serif text-white">What if we could bring these two worlds together?</p>
              </div>

              <p>
                What started as a side project quickly became a movement. Founder after founder kept returning, not just because of cost, but because the talent delivered consistently.
              </p>

              <p className="text-xl font-medium text-white pt-4">
                Today, Talspace connects top 5 percent offshore talent with global startups, creating life-changing opportunities for talent and game-changing advantages for founders.
              </p>
            </div>
          </section>

          {/* Quality at the Core */}
          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10">
              Quality at the <span className="text-cyan-400">Core</span>
            </h2>

            <div className="space-y-8 text-lg text-zinc-300">
              <p>
                Our mission is rooted in impact, but quality is our non-negotiable.
              </p>

              <p>
                We believe in empowering people from developing countries, but never at the expense of our clients. Every engineer, designer, or operator we place goes through a rigorous, multi-step screening process designed to identify only the best.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
                    text: "Clients receive exceptional talent who perform at global standards"
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-cyan-400" />,
                    text: "Talent gains access to jobs where their skill is genuinely valued"
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-cyan-400" />,
                    text: "Both sides feel the satisfaction of a meaningful partnership"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] hover:bg-zinc-800/50 transition-colors">
                    <div className="bg-zinc-950 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-zinc-800">
                      {item.icon}
                    </div>
                    <p className="text-zinc-200 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-zinc-400">
                This is why nearly every client we have worked with continues to trust us and why many share how fulfilling it feels to give someone deserving a real chance.
              </p>
            </div>
          </section>

          {/* Why We Exist */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
                Why We <span className="text-cyan-400">Exist</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="h-1 w-12 bg-cyan-500 rounded-full mb-4" />
                  <p className="text-lg font-medium text-white">Equal Opportunity</p>
                  <p className="text-zinc-400">Because someone&apos;s future should not be defined by where they were born.</p>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-12 bg-cyan-500 rounded-full mb-4" />
                  <p className="text-lg font-medium text-white">Global Solutions</p>
                  <p className="text-zinc-400">Because global times demand global solutions.</p>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-12 bg-cyan-500 rounded-full mb-4" />
                  <p className="text-lg font-medium text-white">Talent First</p>
                  <p className="text-zinc-400">Because talent deserves a chance, regardless of passport, income, or geography.</p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-zinc-800/50 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                  At Talspace, we are here to be that bridge.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg">
                  <span className="text-cyan-400 font-medium px-4 py-2 bg-cyan-950/30 rounded-full border border-cyan-900/50">For founders</span>
                  <span className="text-cyan-400 font-medium px-4 py-2 bg-cyan-950/30 rounded-full border border-cyan-900/50">For dreamers</span>
                  <span className="text-cyan-400 font-medium px-4 py-2 bg-cyan-950/30 rounded-full border border-cyan-900/50">For global builders</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-20">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-10">
              Ready to be part of the story?
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                className="px-8 py-4 bg-cyan-400 text-zinc-950 font-bold text-lg rounded-full hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Hire Top Talent
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold text-lg rounded-full hover:bg-zinc-800 transition-all"
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
