'use client';

import { useEffect, useRef } from 'react';
import { Timeline, random } from 'animejs';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "ACube changed how we hire. The quality of talent is unmatched.",
        author: "Sarah Johnson",
        role: "CTO, TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
        quote: "We scaled our team by 50% in just two months. Incredible speed.",
        author: "Michael Chen",
        role: "Founder, StartUp X",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
        quote: "The vetting process is rigorous. Every candidate was a hit.",
        author: "Emily Davis",
        role: "VP of Engineering, CloudScale",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
        quote: "Finally, a platform that understands remote culture.",
        author: "David Wilson",
        role: "CEO, RemoteFirst",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
        quote: "Saved us thousands in recruitment fees. Highly recommended.",
        author: "Lisa Wang",
        role: "COO, FinTech Global",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    {
        quote: "The dashboard is intuitive and the support is world-class.",
        author: "James Carter",
        role: "Product Lead, Innovate",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
];

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = new Timeline({
            loop: true,
        });

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            // Random floating animation for each card
            tl.add(card, {
                translateX: () => random(-20, 20),
                translateY: () => random(-20, 20),
                rotate: () => random(-2, 2),
                duration: () => random(3000, 6000),
                direction: 'alternate',
                easing: 'easeInOutSine',
            }, 0); // Start all at 0 to run in parallel (staggered by random duration)
        });

        return () => {
            tl.pause();
        };
    }, []);

    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Loved by <span className="text-blue-500">Innovators</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    See what industry leaders are saying about building teams with ACube.
                </p>
            </div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/80 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 cursor-default"
                        >
                            <Quote className="w-8 h-8 text-blue-500/30 mb-6 group-hover:text-blue-500 transition-colors" />

                            <p className="text-zinc-300 font-medium mb-8 leading-relaxed text-lg">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500 transition-colors">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">{item.author}</h4>
                                    <p className="text-zinc-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
