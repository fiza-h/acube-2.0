'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { m } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Zap, Clock, DollarSign, Star } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      company: 'TechFlow AI',
      industry: 'AI/ML SaaS',
      location: 'San Francisco, USA',
      challenge: 'Needed to scale engineering team rapidly while managing tight Series A budget',
      solution: 'Hired 3 senior full-stack engineers and 1 ML engineer from ACube talent pool',
      results: [
        { metric: '70%', label: 'Cost Savings', icon: DollarSign },
        { metric: '3 weeks', label: 'Time to Hire', icon: Clock },
        { metric: '100%', label: 'Retention Rate', icon: Users },
      ],
      testimonial: "ACube&apos;s talent didn&apos;t just meet our expectations—they exceeded them. Our remote team in Pakistan ships features faster than our SF team sometimes.",
      author: 'Sarah Chen',
      role: 'CTO & Co-founder',
      gradient: 'from-cyan-500/20 to-cyan-400/20',
      accentColor: 'cyan',
    },
    {
      id: 2,
      company: 'FinanceHub',
      industry: 'FinTech',
      location: 'Singapore',
      challenge: 'Required specialized blockchain developers with strong security background',
      solution: 'Placed 2 senior blockchain engineers with 5+ years experience in DeFi protocols',
      results: [
        { metric: '2 months', label: 'Product Launch', icon: Zap },
        { metric: '4.9/5', label: 'Client Rating', icon: Star },
        { metric: '60%', label: 'Budget Saved', icon: DollarSign },
      ],
      testimonial: "Finding blockchain talent locally was impossible within our budget. ACube connected us with world-class engineers who delivered our MVP ahead of schedule.",
      author: 'Marcus Tan',
      role: 'Founder & CEO',
      gradient: 'from-cyan-500/20 to-cyan-300/20',
      accentColor: 'cyan',
    },
    {
      id: 3,
      company: 'HealthTrack',
      industry: 'HealthTech',
      location: 'New York, USA',
      challenge: 'Needed HIPAA-compliant development team to build telehealth platform',
      solution: 'Assembled dedicated team of 4 developers with healthcare compliance expertise',
      results: [
        { metric: '100%', label: 'Compliance Met', icon: Star },
        { metric: '5 months', label: 'Platform Built', icon: Clock },
        { metric: '65%', label: 'Cost Reduction', icon: DollarSign },
      ],
      testimonial: "The level of professionalism and attention to security detail was outstanding&period; Our ACube team understood HIPAA requirements better than most US-based contractors we interviewed.",
      author: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      gradient: 'from-cyan-600/20 to-cyan-400/20',
      accentColor: 'cyan',
    },
  ];

  const stats = [
    { value: '95%', label: 'Client Retention' },
    { value: '3 weeks', label: 'Avg Time to Hire' },
    { value: '68%', label: 'Avg Cost Savings' },
    { value: '4.9/5', label: 'Avg Client Rating' },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/[0.08] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/[0.06] blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
            >
              <span className="text-cyan-400 text-sm font-bold tracking-wide">SUCCESS STORIES</span>
            </m.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Real Impact, <span className="text-cyan-400">Real Results</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              See how startups across the globe are building world-class products with ACube&apos;s top 5% offshore talent
            </p>
          </m.div>

          {/* Stats Bar */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <m.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Card Container */}
                <div className="relative group">
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-cyan-600/10 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />

                  <div className={`relative bg-gradient-to-br ${study.gradient} backdrop-blur-sm rounded-3xl border border-cyan-400/20 overflow-hidden`}>
                    {/* Top Section - Company Info */}
                    <div className="p-8 md:p-12 border-b border-white/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                          <m.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block mb-3 px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full"
                          >
                            <span className="text-cyan-400 text-xs font-bold tracking-wider">{study.industry}</span>
                          </m.div>
                          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">{study.company}</h2>
                          <p className="text-zinc-400 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                            {study.location}
                          </p>
                        </div>

                        {/* Results Preview */}
                        <div className="flex gap-4">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                              <div className="text-2xl font-black text-cyan-400">{result.metric}</div>
                              <div className="text-xs text-zinc-400 mt-1">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Section - Challenge & Solution */}
                    <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 border-b border-white/10">
                      <div>
                        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          The Challenge
                        </h3>
                        <p className="text-zinc-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Our Solution
                        </h3>
                        <p className="text-zinc-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Section */}
                    <div className="p-8 md:p-12 bg-black/20">
                      <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-6">Key Results</h3>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <m.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                            >
                              <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                              <div className="text-3xl font-black text-white mb-2">{result.metric}</div>
                              <div className="text-sm text-zinc-400 font-medium">{result.label}</div>
                            </m.div>
                          );
                        })}
                      </div>

                      {/* Testimonial */}
                      <div className="relative mt-8 p-8 bg-white/5 rounded-2xl border border-white/10">
                        <div className="absolute -top-4 -left-2 text-6xl text-cyan-400/30 font-serif">&ldquo;</div>
                        <p className="text-lg text-zinc-300 italic leading-relaxed mb-6 relative z-10">
                          {study.testimonial}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                            {study.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-white">{study.author}</div>
                            <div className="text-sm text-zinc-400">{study.role}, {study.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Write Your <span className="text-cyan-400">Success Story?</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Join the growing number of startups building exceptional products with ACube&apos;s top-tier talent
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-zinc-950 font-bold rounded-xl hover:from-cyan-500 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-400/20 flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
