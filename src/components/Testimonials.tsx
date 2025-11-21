'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, stagger, utils } from 'animejs';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationsRef = useRef<any[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.floating-card');

    // Clear previous animations
    animationsRef.current.forEach(anim => anim.pause());
    animationsRef.current = [];

    // Create floating animation for each card
    cards.forEach((card, index) => {
      const element = card as HTMLElement;

      // Random initial position in a circular pattern
      const angle = (index / cards.length) * Math.PI * 2;
      const radius = 250;
      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius;

      // Set initial position
      element.style.transform = `translate(${startX}px, ${startY}px) rotate(${utils.random(-5, 5)}deg)`;

      // Create continuous floating animation
      const floatAnim = animate(
        element,
        {
          translateX: [
            startX,
            startX + utils.random(-100, 100),
            startX + utils.random(-100, 100),
            startX
          ],
          translateY: [
            startY,
            startY + utils.random(-80, 80),
            startY + utils.random(-80, 80),
            startY
          ],
          rotate: [
            utils.random(-5, 5),
            utils.random(-8, 8),
            utils.random(-5, 5)
          ],
          scale: [
            1,
            utils.random(0.95, 1.05),
            1
          ],
          easing: 'easeInOutQuad',
          duration: utils.random(8000, 12000),
          loop: true,
          delay: index * 200,
        }
      );

      animationsRef.current.push(floatAnim);
    });

    return () => {
      animationsRef.current.forEach(anim => anim.pause());
    };
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardClick = (id: number, event: React.MouseEvent) => {
    const card = event.currentTarget as HTMLElement;

    // Pause all animations
    animationsRef.current.forEach(anim => anim.pause());

    // Bring clicked card to center
    animate(
      card,
      {
        translateX: 0,
        translateY: 0,
        scale: 1.1,
        rotate: 0,
        easing: 'spring(1, 80, 10, 0)',
        duration: 800,
      }
    );

    // Push other cards away
    const allCards = containerRef.current?.querySelectorAll('.floating-card');
    allCards?.forEach((otherCard, index) => {
      if (otherCard !== card) {
        const angle = (index / (allCards.length - 1)) * Math.PI * 2;
        const pushRadius = 400;
        animate(
          otherCard as HTMLElement,
          {
            translateX: Math.cos(angle) * pushRadius,
            translateY: Math.sin(angle) * pushRadius,
            scale: 0.8,
            opacity: 0.3,
            easing: 'spring(1, 80, 10, 0)',
            duration: 800,
          }
        );
      }
    });

    setActiveId(id);
  };

  const handleClose = () => {
    // Resume all animations
    animationsRef.current.forEach(anim => anim.play());

    const allCards = containerRef.current?.querySelectorAll('.floating-card');
    allCards?.forEach((card) => {
      animate(
        card as HTMLElement,
        {
          scale: 1,
          opacity: 1,
          easing: 'spring(1, 80, 10, 0)',
          duration: 600,
        }
      );
    });

    setActiveId(null);
  };

  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Floating <span className="text-blue-500">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Click any card to read the full story
          </motion.p>
        </div>

        {/* Floating Cards Container */}
        <div
          ref={containerRef}
          className="relative h-[800px] flex items-center justify-center"
          style={{
            perspective: '1000px',
          }}
        >
          {/* Parallax Layer */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="floating-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={(e) => handleCardClick(testimonial.id, e)}
                style={{
                  width: '320px',
                  zIndex: activeId === testimonial.id ? 50 : 10,
                }}
              >
                <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Text */}
                    <p className="text-white/90 font-medium mb-6 leading-relaxed line-clamp-3">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{testimonial.author}</h4>
                        <p className="text-blue-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Close Button (when card is active) */}
        <AnimatePresence>
          {activeId && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClose}
              className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
