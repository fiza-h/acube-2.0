'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { m } from 'motion/react';
import { ArrowRight, TrendingUp, Zap, Clock, DollarSign, Star, ExternalLink, Sparkles } from 'lucide-react';
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
      challenge: 'Needed a modern, professional website to showcase MG vehicles and provide booking options for their authorized dealership in Bhutan.',
      solution: 'Built a complete official website with vehicle showcase, booking system, and dealership information.',
      results: [
        { metric: '100%', label: 'On-Time Delivery', icon: Clock },
        { metric: 'Full', label: 'Website Built', icon: Zap },
        { metric: '5/5', label: 'Client Rating', icon: Star },
      ],
      testimonial: "We are really happy with the website that ACube Tech's created for Daksho MG Motors Pvt. Ltd. The website is well-designed, easy to use, and accurately captures the essence of our company.",
      author: 'Saroj Rai',
      role: 'Manager, Daksho MG Motors Pvt. Ltd.',
    },
    {
      id: 2,
      company: 'Jeneeus',
      industry: 'Social Networking',
      location: 'United States',
      website: null,
      logo: '/Jeeneus.png',
      challenge: 'Required expert UI/UX design and offshore development support for a meaningful social networking platform.',
      solution: 'Provided comprehensive UI/UX design and offshore development support to build the social networking app.',
      results: [
        { metric: 'Full', label: 'UI/UX Design', icon: Star },
        { metric: 'Complete', label: 'Development', icon: Zap },
        { metric: '70%', label: 'Cost Savings', icon: DollarSign },
      ],
      testimonial: "Great work & very high quality. Absolute pleasure thank you for your professionalism and such a fast turn around. Appreciate your work and will definitely be in contact in the future.",
      author: 'Glahens',
      role: 'Co-founder and CTO, Jeneeus',
    },
    {
      id: 3,
      company: 'EduVille',
      industry: 'EdTech',
      location: 'Singapore',
      website: 'https://www.eduville.com/',
      logo: '/eduville.avif',
      challenge: 'Needed offshore UI/UX design and front-end development for a gamified Tamil learning platform for kids.',
      solution: 'Supported the product with offshore UI/UX design and front-end development resources.',
      results: [
        { metric: 'Gamified', label: 'Learning Platform', icon: Star },
        { metric: 'Complete', label: 'UI/UX + Frontend', icon: Zap },
        { metric: '70%', label: 'Cost Savings', icon: DollarSign },
      ],
      testimonial: "Working with ACube allowed us to bring our vision to life faster than we imagined. Their designer understood our cultural nuances, and the developer delivered top-notch code.",
      author: 'Sanjay',
      role: 'Co-Founder, EduVille',
    },
    {
      id: 4,
      company: '3D Heroes',
      industry: 'Gaming/Design',
      location: 'United States',
      website: 'https://3dheroes.io/',
      logo: '/3dheroes-logo.png',
      challenge: 'Game designers needed a fast search platform to find high-quality 3D assets instantly.',
      solution: 'Developed the entire platform from scratch with advanced search capabilities.',
      results: [
        { metric: 'Full', label: 'Platform Built', icon: Zap },
        { metric: 'Fast', label: 'Search System', icon: TrendingUp },
        { metric: '100%', label: 'From Scratch', icon: Star },
      ],
      testimonial: "ACube Tech delivered a fast, clean, and scalable product that exceeded our expectations. Communication was smooth, timelines were met, and every feature was crafted with care.",
      author: 'Adila Sayyed',
      role: 'Founder, 3D Heroes',
    },
  ];

  const stats = [
    { value: '95%', label: 'Client Retention' },
    { value: '72 hours', label: 'Avg Time to Hire' },
    { value: '72%', label: 'Avg Cost Savings' },
    { value: '4.9/5', label: 'Avg Client Rating' },
  ];

  return (
    <main className="min-h-screen bg-white text-deep-twilight">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-frosted-blue/10 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
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
              className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-light-cyan/30 border border-french-blue/10 mb-8"
            >
              <Star className="w-3.5 h-3.5 text-french-blue fill-french-blue" />
              <span className="text-french-blue text-sm font-serif font-medium tracking-wide uppercase">Success Stories</span>
            </m.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 tracking-tight text-deep-twilight">
              Real Impact, <span className="italic text-french-blue">Real Results</span>
            </h1>

            <p className="text-xl text-gray-600 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              See how startups across the globe are building world-class products with ACube&apos;s top 5% offshore talent.
            </p>
          </m.div>

          {/* Stats Bar */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl md:text-4xl font-serif font-medium text-french-blue mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-sans font-medium uppercase tracking-wide">{stat.label}</div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <m.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Decorative Gradient Blob */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-light-cyan/20 to-frosted-blue/20 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />

                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Left Column: Company & Challenge */}
                  <div className="lg:col-span-5 flex flex-col h-full">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        {study.logo && (
                          <div className="relative w-16 h-16 flex-shrink-0 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                            <Image
                              src={study.logo}
                              alt={`${study.company} logo`}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        )}
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-french-blue/5 border border-french-blue/10 text-french-blue text-xs font-bold uppercase tracking-wider mb-2">
                            {study.industry}
                          </div>
                          <h2 className="text-3xl font-serif font-bold text-deep-twilight leading-none">{study.company}</h2>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="flex items-center gap-2 text-sm font-bold text-french-blue uppercase tracking-wide mb-2">
                            <TrendingUp className="w-4 h-4" />
                            The Challenge
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-sans font-light">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center gap-2 text-sm font-bold text-french-blue uppercase tracking-wide mb-2">
                            <Zap className="w-4 h-4" />
                            The Solution
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-sans font-light">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold text-deep-twilight">Location:</span> {study.location}
                      </div>
                      {study.website && (
                        <a
                          href={study.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-french-blue hover:text-deep-twilight transition-colors flex items-center gap-1 group/link"
                        >
                          Visit Website
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Results & Testimonial */}
                  <div className="lg:col-span-7 flex flex-col">
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100 group-hover:bg-french-blue/5 group-hover:border-french-blue/10 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-french-blue mx-auto mb-2" />
                            <div className="text-2xl font-serif font-bold text-deep-twilight mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{result.label}</div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="bg-deep-twilight rounded-2xl p-8 relative overflow-hidden text-white flex-1 flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-french-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      <div className="relative z-10">
                        <Sparkles className="w-6 h-6 text-light-cyan mb-4 opacity-50" />
                        <blockquote className="text-lg font-light italic leading-relaxed text-gray-100 mb-6 font-serif">
                          &ldquo;{study.testimonial}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-french-blue to-bright-teal-blue flex items-center justify-center text-white font-serif font-bold text-lg">
                            {study.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm">{study.author}</div>
                            <div className="text-xs text-gray-300">{study.role}</div>
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
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-deep-twilight mb-6">
              Ready to Write Your <span className="italic text-french-blue">Success Story?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light font-sans">
              Join the growing number of startups building exceptional products with ACube&apos;s top-tier talent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                className="px-8 py-4 bg-deep-twilight text-white font-bold rounded-full hover:bg-french-blue transition-all transform hover:scale-105 shadow-lg shadow-deep-twilight/20 flex items-center gap-2 group"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-white border border-gray-200 text-deep-twilight font-bold rounded-full hover:bg-gray-50 transition-all hover:border-gray-300"
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
