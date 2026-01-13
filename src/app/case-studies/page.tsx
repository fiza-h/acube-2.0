'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { m } from 'motion/react';
import { ArrowRight, TrendingUp, Zap, Clock, DollarSign, Star, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      company: 'MG Bhutan (Daksho Motors)',
      industry: 'Automotive',
      location: 'Bhutan',
      website: 'https://www.dakshomgmotors.com/',
      logo: '/daksho-motors-logo.svg',
      challenge: 'Needed a modern, professional website to showcase MG vehicles and provide booking options for their authorized dealership in Bhutan',
      solution: 'Built a complete official website with vehicle showcase, booking system, and dealership information',
      results: [
        { metric: '100%', label: 'On-Time Delivery', icon: Clock },
        { metric: 'Full', label: 'Website Built', icon: Zap },
        { metric: '5/5', label: 'Client Rating', icon: Star },
      ],
      testimonial: "We are really happy with the website that ACube Tech's created for Daksho MG Motors Pvt. Ltd. The website is well-designed, easy to use, and accurately captures the essence of our company. The team was responsive, effective, and enjoyable to work with from beginning to end. We are grateful for their outstanding work and have already heard nothing but positive things!",
      author: 'Saroj Rai',
      role: 'Manager, Daksho MG Motors Pvt. Ltd.',
      gradient: 'from-cyan-500/20 to-cyan-400/20',
      accentColor: 'cyan',
    },
    {
      id: 2,
      company: 'Jeneeus',
      industry: 'Social Networking',
      location: 'United States',
      website: null,
      logo: '/Jeeneus.png',
      challenge: 'Required expert UI/UX design and offshore development support for a meaningful social networking platform',
      solution: 'Provided comprehensive UI/UX design and offshore development support to build the social networking app',
      results: [
        { metric: 'Full', label: 'UI/UX Design', icon: Star },
        { metric: 'Complete', label: 'Development', icon: Zap },
        { metric: '70%', label: 'Cost Savings', icon: DollarSign },
      ],
      testimonial: "Great work & very high quality. Absolute pleasure thank you for your professionalism and such a fast turn around. Appreciate your work and will definitely be in contact in the future.",
      author: 'Glahens',
      role: 'Co-founder and CTO, Jeneeus',
      gradient: 'from-cyan-500/20 to-cyan-300/20',
      accentColor: 'cyan',
    },
    {
      id: 3,
      company: 'EduVille',
      industry: 'EdTech',
      location: 'Singapore',
      website: 'https://www.eduville.com/',
      logo: '/eduville.avif',
      challenge: 'Needed offshore UI/UX design and front-end development for a gamified Tamil learning platform for kids',
      solution: 'Supported the product with offshore UI/UX design and front-end development resources',
      results: [
        { metric: 'Gamified', label: 'Learning Platform', icon: Star },
        { metric: 'Complete', label: 'UI/UX + Frontend', icon: Zap },
        { metric: '70%', label: 'Cost Savings', icon: DollarSign },
      ],
      testimonial: "Working with ACube allowed us to bring our vision to life faster than we imagined. Their designer understood our cultural nuances, and the developer delivered top-notch code.",
      author: 'Sanjay',
      role: 'Co-Founder, EduVille',
      gradient: 'from-cyan-500/20 to-cyan-300/20',
      accentColor: 'cyan',
    },
    {
      id: 4,
      company: '3D Heroes',
      industry: 'Gaming/Design',
      location: 'United States',
      website: 'https://3dheroes.io/',
      logo: '/3dheroes-logo.png',
      challenge: 'Game designers needed a fast search platform to find high-quality 3D assets instantly',
      solution: 'Developed the entire platform from scratch with advanced search capabilities',
      results: [
        { metric: 'Full', label: 'Platform Built', icon: Zap },
        { metric: 'Fast', label: 'Search System', icon: TrendingUp },
        { metric: '100%', label: 'From Scratch', icon: Star },
      ],
      testimonial: "ACube Tech delivered a fast, clean, and scalable product that exceeded our expectations. Communication was smooth, timelines were met, and every feature was crafted with care. ACube felt less like an outsourced team and more like a true tech partner.",
      author: 'Adila Sayyed',
      role: 'Founder, 3D Heroes',
      gradient: 'from-cyan-600/20 to-cyan-400/20',
      accentColor: 'cyan',
    },
  ];

  const stats = [
    { value: '95%', label: 'Client Retention' },
    { value: '72 hours', label: 'Avg Time to Hire' },
    { value: '72%', label: 'Avg Cost Savings' },
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
              className="inline-block mb-6 px-4 py-2 bg-cyan-400/10 border border-cyan-400/10 rounded-full"
            >
              <span className="text-cyan-400 text-sm font-bold tracking-wide">SUCCESS STORIES</span>
            </m.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight px-4">
              Real Impact, <span className="text-cyan-400">Real Results</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
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

                  <div className={`relative bg-gradient-to-br ${study.gradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-cyan-400/10 overflow-hidden`}>
                    {/* Top Section - Company Info */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 border-b border-white/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                          <m.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block mb-3 px-3 py-1 bg-cyan-400/10 border border-cyan-400/15 rounded-full"
                          >
                            <span className="text-cyan-400 text-xs font-bold tracking-wider">{study.industry}</span>
                          </m.div>
                          <div className="flex items-center gap-4 mb-3">
                            {study.logo && (
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                                <Image
                                  src={study.logo}
                                  alt={`${study.company} logo`}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            )}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">{study.company}</h2>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="text-sm sm:text-base text-zinc-400 flex items-center gap-2">
                              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                              {study.location}
                            </p>
                            {study.website && (
                              <a
                                href={study.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                              >
                                Visit Website
                                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Results Preview */}
                        <div className="flex gap-2 sm:gap-4">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 flex-1 sm:flex-initial">
                              <div className="text-lg sm:text-xl md:text-2xl font-black text-cyan-400">{result.metric}</div>
                              <div className="text-[10px] sm:text-xs text-zinc-400 mt-1">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Section - Challenge & Solution */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 grid md:grid-cols-2 gap-6 sm:gap-8 border-b border-white/10">
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                          The Challenge
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                          Our Solution
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Section */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-black/20">
                      <h3 className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 sm:mb-6">Key Results</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <m.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-xl sm:rounded-2xl border border-cyan-400/10 hover:border-cyan-400/40 transition-colors"
                            >
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                              <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-xs sm:text-sm text-zinc-400 font-medium">{result.label}</div>
                            </m.div>
                          );
                        })}
                      </div>

                      {/* Testimonial */}
                      <div className="relative mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10">
                        <div className="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-3xl sm:text-5xl md:text-6xl text-cyan-400/30 font-serif">&ldquo;</div>
                        <p className="text-sm sm:text-base md:text-lg text-zinc-300 italic leading-relaxed mb-4 sm:mb-6 relative z-10">
                          {study.testimonial}
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                            {study.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm sm:text-base">{study.author}</div>
                            <div className="text-xs sm:text-sm text-zinc-400">{study.role}, {study.company}</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 px-4">
              Ready to Write Your <span className="text-cyan-400">Success Story?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
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
