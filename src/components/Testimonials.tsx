'use client';

import { m, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "ACube Tech delivered a fast, clean, and scalable product that exceeded our expectations. Communication was smooth, timelines were met, and every feature was crafted with care. ACube felt less like an outsourced team and more like a true tech partner.",
    author: "Adila Sayyed",
    role: "Founder, 3D Heroes",
  },
  {
    id: 2,
    quote: "We are really happy with the website that ACube Tech's created for Daksho MG Motors Pvt. Ltd. The website is well-designed, easy to use, and accurately captures the essence of our company. The team was responsive, effective, and enjoyable to work with from beginning to end. We are grateful for their outstanding work and have already heard nothing but positive things!",
    author: "Saroj Rai",
    role: "Manager, Daksho MG Motors Pvt. Ltd.",
  },
  {
    id: 3,
    quote: "Working with ACube allowed us to bring our vision to life faster than we imagined. Their designer understood our cultural nuances, and the developer delivered top-notch code.",
    author: "Sanjay",
    role: "Co-Founder, EduVille",
  },
  {
    id: 4,
    quote: "We've been partnering with Acube since the start of the year, and it's been an exceptional experience. The founders provided some of the best customer service I've ever received. They don't just match you with talent - they keep open communication to ensure you get the highest quality work from the people they source. Connecting with them has made talent sourcing significantly easier for our early-stage startup.",
    author: "Glahens Paul",
    role: "Co-founder and CTO, JeneeUS",
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
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center justify-center py-24">
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Floating orb */}
        <m.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]) }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <m.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-white mb-4 sm:mb-6 tracking-tight">
            Trusted by <span className="text-cyan-400">Innovators</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg px-4 font-sans font-light">
            Join hundreds of companies that have transformed their hiring with ACube
          </p>
        </m.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Large Quote Mark - Decorative */}
          <m.div
            key={`quote-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-12 sm:-top-16 md:-top-24 -left-4 sm:-left-6 md:-left-12 text-[120px] sm:text-[200px] md:text-[300px] font-serif text-cyan-400 leading-none pointer-events-none select-none z-0"
          >
            &ldquo;
          </m.div>

          {/* Quote Text */}
          <m.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-12 sm:mb-16 md:mb-20 z-10"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed tracking-tight max-w-5xl mx-auto text-center">
              {active.quote}
            </p>
          </m.div>

          {/* Author Section */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-zinc-800 pt-8">
            <m.div
              key={`author-${activeIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              {/* Author Details */}
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{active.author}</h4>
                <p className="text-sm sm:text-base text-cyan-400 font-medium tracking-wide">{active.role}</p>
              </div>
            </m.div>

            {/* Navigation Controls */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 sm:gap-6"
            >
              {/* Counter */}
              <div className="text-sm text-zinc-500 font-medium tabular-nums">
                <span className="text-white text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="mx-2">/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group shadow-sm hover:shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group shadow-sm hover:shadow-md"
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
            className="flex justify-center gap-2 mt-12"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative w-12 h-1 bg-zinc-800 rounded-full overflow-hidden transition-colors hover:bg-zinc-700"
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
      </m.div>
    </section>
  );
};

export default Testimonials;
