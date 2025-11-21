'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, utils } from 'animejs';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "ACube changed how we hire. The quality of talent is unmatched.",
    author: "Sarah Johnson",
    role: "CTO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote: "We scaled our team by 50% in just two months. Incredible speed.",
    author: "Michael Chen",
    role: "Founder, StartUp X",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote: "The vetting process is rigorous. Every candidate was a hit.",
    author: "Emily Davis",
    role: "VP of Engineering, CloudScale",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    quote: "Finally, a platform that understands remote culture.",
    author: "David Wilson",
    role: "CEO, RemoteFirst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    quote: "Saved us thousands in recruitment fees. Highly recommended.",
    author: "Lisa Wang",
    role: "COO, FinTech Global",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    quote: "Best investment we made this year. The ROI is incredible.",
    author: "James Martinez",
    role: "Head of HR, DataCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full"
    >
      <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:border-blue-600/30 hover:shadow-[0_0_50px_rgba(37,99,235,0.2)] h-full">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Quote Icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
              <Quote className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
          </div>

          {/* Quote Text */}
          <p className="text-white/90 font-medium mb-6 leading-relaxed">
            "{testimonial.quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">{testimonial.author}</h4>
              <p className="text-blue-600 text-xs">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
          >
            Trusted by <span className="text-blue-600">Innovators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Join hundreds of companies that have transformed their hiring with ACube
          </motion.p>
        </div>

        {/* Testimonials Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { label: 'Companies', value: '500+' },
            { label: 'Placements', value: '10K+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Avg. Time to Hire', value: '7 Days' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zinc-500 text-xs md:text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
