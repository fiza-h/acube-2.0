'use client';

import { m } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HeroSignalGrid } from './lamp-demo';

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-28 lg:px-16 lg:pb-24 xl:px-24">
            {/* Background gradients - matching Vibe Coding page */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(12,74,110,0.15)_0%,transparent_40%)]" />

            {/* Grid background */}
            <HeroSignalGrid />

            {/* Horizontal gradient line */}
            <div className="pointer-events-none absolute inset-x-6 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent md:inset-x-16 xl:inset-x-24" />

            {/* Blur circles */}
            <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/7 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-96 w-96 rounded-full bg-sky-400/7 blur-3xl" />

            <div className="relative z-10 max-w-[860px]">
                {/* Eyebrow */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5 mb-8"
                >
                    <div className="w-5 h-[1px] bg-cyan-400" />
                    <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-cyan-400">
                        South Asia's Elite Engineering Network
                    </span>
                </m.div>

                {/* Main Heading */}
                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-[clamp(3rem,6vw,5.2rem)] font-normal leading-[1.05] tracking-tight mb-6"
                >
                    The best builders,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        AI-native
                    </span> by design.
                </m.h1>

                {/* Description */}
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg leading-[1.7] text-zinc-400 max-w-[520px] mb-10 font-light"
                >
                    Talspace is not a staffing agency. It's a curated network of exceptional engineers — hackathon champions, olympiad medalists, and ex-founders from South Asia — who use AI to build at a pace no traditional team can match.
                </m.p>

                {/* CTA Buttons */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <a
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-[0.06em] uppercase bg-cyan-400 text-black px-6 py-3 rounded-[2px] font-medium hover:bg-cyan-500 transition-colors flex items-center gap-2"
                    >
                        Hire an engineer
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                        href="#talent-showcase"
                        className="font-mono text-xs tracking-[0.06em] uppercase text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        Apply to the network
                        <span className="text-sm">↗</span>
                    </a>
                </m.div>
            </div>
        </section>
    );
};

export default Hero;
