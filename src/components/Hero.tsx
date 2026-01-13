'use client';

import { m } from 'motion/react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-zinc-950">
            {/* Abstract Background Shapes - Dark Mode */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 mb-8"
                    >
                        <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                        <span className="text-cyan-400 text-sm font-serif font-medium tracking-wide">Vetted Top 1% Talent</span>
                    </m.div>

                    {/* Main Heading */}
                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-8 tracking-tight"
                    >
                        Hiring, made <span className="italic text-cyan-400">perfectly.</span>
                    </m.h1>

                    {/* Subheading */}
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 font-serif font-light leading-relaxed mb-12 max-w-2xl mx-auto"
                    >
                        Access a curated network of world-class developers and designers. We handle the vetting, so you can focus on building the extraordinary.
                    </m.p>

                    {/* CTA Buttons */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#talent-showcase"
                            className="w-full sm:w-auto px-10 py-4 rounded-full bg-cyan-400 text-zinc-950 font-medium text-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-xl hover:shadow-cyan-400/30 flex items-center justify-center gap-2 group"
                        >
                            Start Hiring
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://calendly.com/absaarmalik15/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-10 py-4 rounded-full bg-zinc-900 text-white border border-zinc-800 font-medium text-lg hover:bg-zinc-800 transition-colors hover:border-zinc-700"
                        >
                            Book a Call
                        </a>
                    </m.div>

                    {/* Trust Indicators */}
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-500 font-sans"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                            <span>Pre-vetted experts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                            <span>Risk-free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                            <span>Avg. 48hr hire</span>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
