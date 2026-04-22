'use client';

import { m } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
        >
            {/* Minimalist Deep Space Glows */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_75%_25%,rgba(59,130,246,0.12),transparent_28%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] z-0 opacity-30">
                <div className="absolute inset-x-0 top-[-200px] h-[400px] bg-indigo-900/40 blur-[140px] rounded-[100%]" />
            </div>
            <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] z-0 opacity-30">
                <div className="absolute inset-0 bg-purple-900/30 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Logo */}
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-48 h-12 md:w-56 md:h-14 mx-auto mb-8"
                >
                    <Image
                        src="/talspace-brand-logo.png"
                        alt="Talspace"
                        fill
                        priority
                        sizes="(min-width: 768px) 224px, 192px"
                        className="object-contain"
                    />
                </m.div>

                {/* Main Heading */}
                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-sans tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.05]"
                >
                    Above the Noise,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
                        Without Borders.
                    </span>
                </m.h1>

                {/* Description */}
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Talspace is where the rarest engineering talent operates globally. A curated universe built in response to a broken talent market.
                </m.p>

                {/* CTA Buttons */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#talent-showcase"
                        className="group bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center"
                    >
                        Explore Missions
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent text-white border border-zinc-800 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-zinc-900 transition-all backdrop-blur-sm"
                    >
                        Apply as Talnaut
                    </a>
                </m.div>

                {/* Trust Indicators */}
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-zinc-500 text-sm font-mono tracking-wide uppercase"
                >
                    <div className="flex items-center">
                        <Check className="w-4 h-4 text-purple-500 mr-2 opacity-70" />
                        Signal over noise
                    </div>
                    <div className="flex items-center">
                        <Check className="w-4 h-4 text-purple-500 mr-2 opacity-70" />
                        Trust over speed
                    </div>
                    <div className="flex items-center">
                        <Check className="w-4 h-4 text-purple-500 mr-2 opacity-70" />
                        Scarcity over volume
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default Hero;
