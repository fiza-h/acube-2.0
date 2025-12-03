'use client';

import Image from 'next/image';
import { m, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "ACube Tech delivered a fast, clean, and scalable product that exceeded our expectations. Communication was smooth, timelines were met, and every feature was crafted with care. ACube felt less like an outsourced team and more like a true tech partner.",
    author: "Adila Sayyed",
    role: "Founder, 3D Heroes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote: "Great work & very high quality. Absolute pleasure thank you for your professionalism and such a fast turn around. Appreciate your work and will definitely be in contact in the future.",
    author: "Pippi",
    role: "Client, Company Name",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote: "Their offshore augmentation model delivered significant cost savings while maintaining the highest quality standards.",
    author: "David Smith",
    role: "Founder, NexGen Apps",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center justify-center py-16">
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Floating orb */}
        <m.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]) }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl"
        />
      </div>

      <m.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Trusted by <span className="text-cyan-400">Innovators</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Join hundreds of companies that have transformed their hiring with ACube
          </p>
        </m.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Large Quote Mark - Decorative */}
          <m.div
            key={`quote-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-20 -left-10 text-[300px] font-serif text-cyan-400 leading-none pointer-events-none select-none"
          >
            &ldquo;
          </m.div>

          {/* Quote Text */}
          <m.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-16"
          >
            <p className="text-3xl md:text-5xl font-light text-white leading-relaxed tracking-tight max-w-4xl">
              {active.quote}
            </p>
          </m.div>

          {/* Author Section */}
          <div className="flex items-center justify-between">
            <m.div
              key={`author-${activeIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              {/* Large Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/10">
                <Image
                  src={active.image}
                  alt={active.author}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              {/* Author Details */}
              <div>
                <h4 className="text-xl font-medium text-white mb-1">{active.author}</h4>
                <p className="text-sm text-cyan-400 font-light tracking-wide">{active.role}</p>
              </div>
            </m.div>

            {/* Navigation Controls */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              {/* Counter */}
              <div className="text-sm text-zinc-500 font-light tabular-nums">
                <span className="text-white text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="mx-2">/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </m.div>
          </div>

          {/* Progress Indicators */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-2 mt-12"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative h-1 flex-1 bg-white/5 rounded-full overflow-hidden"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <m.div
                  className="absolute inset-0 bg-cyan-400 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            ))}
          </m.div>
        </div>

        {/* Small Thumbnail Gallery */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center gap-3"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                index === activeIndex
                  ? 'border-cyan-400 scale-110 opacity-100'
                  : 'border-white/10 opacity-40 hover:opacity-70'
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                sizes="48px"
                loading="lazy"
                className="object-cover"
              />
            </button>
          ))}
        </m.div>
      </m.div>
    </section>
  );
};

export default Testimonials;
