'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { m } from 'motion/react';
import { Sparkles, Globe, Heart, ShieldCheck, ArrowRight, Quote } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 mb-8"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-serif font-medium tracking-wide uppercase">Our Story</span>
            </m.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 tracking-tight text-white">
              About <span className="italic text-cyan-400">Us</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 font-sans font-light max-w-3xl mx-auto leading-relaxed">
              ACube Tech was born from a simple, personal truth: <span className="text-cyan-400 font-medium">talent is universal, but opportunity is not.</span>
            </p>
          </m.div>
        </div>
      </section>

      {/* Content Sections container */}
      <div className="container mx-auto px-6 pb-24 max-w-5xl">
        <div className="space-y-24">

          {/* Origin Story - Modern Card */}
          <m.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-zinc-800"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="relative md:w-1/3 flex-shrink-0">
                <div className="absolute inset-0 bg-cyan-900/20 rounded-3xl transform rotate-3 scale-95" />
                <div className="relative bg-zinc-950/50 rounded-3xl p-8 border border-zinc-800">
                  <Quote className="w-10 h-10 text-cyan-400 mb-4 opacity-50" />
                  <div className="space-y-4 font-serif italic text-lg text-zinc-300">
                    <p>Not because they were not capable.</p>
                    <p>Not because they did not dream big.</p>
                    <p>But because resources, information, and sometimes just luck stood in the way.</p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-white">The Origin</h2>
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                  We started as a group of college students from developing countries, who were fortunate enough to study abroad at some of the world&apos;s leading institutions, including Ivy League universities.
                </p>
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                  As we navigated our new environments, one realization hit us deeply: many of our friends back home were just as talented, often more talented, but lacked access to the opportunities we were now surrounded by.
                </p>
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                  The result was a massive pay and opportunity gap between those who could move abroad and those who could not. We knew something had to change.
                </p>
              </div>
            </div>
          </m.section>

          {/* Mission - Dark Contrast Section (Even darker/accented) */}
          <m.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="group relative bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl border border-zinc-800"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl backdrop-blur-sm mb-4 border border-white/10">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
                Our Mission: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Bridging Worlds, Expanding Possibilities</span>
              </h2>

              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                ACube began as a small experiment, a bridge between exceptional talent in emerging markets and the startups who needed them. What started as a side project quickly became a movement.
              </p>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xl md:text-2xl font-serif italic text-white/90">
                  &quot;Creating life-changing opportunities for talent and game-changing advantages for founders.&quot;
                </p>
              </div>
            </div>
          </m.section>

          {/* Quality Section - Split Layout */}
          <m.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-500/20">
                <ShieldCheck className="w-4 h-4" />
                Our Commitment
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
                Quality at the <span className="italic text-cyan-400">Core</span>
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 font-light">
                <p>
                  Our mission is rooted in impact, but quality is our non-negotiable.
                </p>
                <p>
                  We believe in empowering people from developing countries, but never at the expense of our clients. Every engineer, designer, or operator we place goes through a rigorous, multi-step screening process.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-[2rem] p-8 border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">This commitment ensures:</h3>
              <ul className="space-y-4">
                {[
                  "Clients receive exceptional talent who perform at global standards",
                  "Talent gains access to jobs where their skill is genuinely valued",
                  "Mutually beneficial partnerships that create real value"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-zinc-400 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.section>

          {/* Why We Exist - Emotional Hook */}
          <m.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-[2.5rem] p-8 md:p-16 text-center border border-zinc-800"
          >
            <Heart className="w-12 h-12 text-cyan-400 mx-auto mb-8" />

            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-12">
              Why We <span className="italic text-cyan-400">Exist</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                "Because someone's future should not be defined by where they were born.",
                "Because global times demand global solutions.",
                "Because talent deserves a chance, regardless of passport."
              ].map((text, i) => (
                <div key={i} className="bg-zinc-950/60 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 shadow-sm">
                  <p className="text-zinc-200 font-medium">{text}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-2xl font-serif text-white">At ACube, we are here to be that bridge.</p>
              <div className="flex gap-3 justify-center text-cyan-400 font-bold tracking-wide text-sm uppercase">
                <span>For Founders</span>
                <span>•</span>
                <span>For Dreamers</span>
                <span>•</span>
                <span>For Builders</span>
              </div>
            </div>
          </m.section>

          {/* CTA Section */}
          <m.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-8">
              Ready to be part of the story?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                className="px-8 py-4 bg-cyan-400 text-zinc-950 font-bold rounded-full hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-lg shadow-cyan-400/20 flex items-center gap-2 group"
              >
                Hire Top Talent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-full hover:bg-zinc-800 transition-all hover:border-zinc-700"
              >
                Back to Home
              </Link>
            </div>
          </m.section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
