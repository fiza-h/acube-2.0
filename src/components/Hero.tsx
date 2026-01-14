'use client';

import { m } from 'motion/react';
import { ArrowRight, Check, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-zinc-950">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] z-0">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] z-0">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-cyan-900/20 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8"
                >
                    <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                    <span className="text-sm font-medium text-cyan-200">Vetted Top 1% Talent</span>
                </m.div>

                {/* Main Heading */}
                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1]"
                >
                    Hire world-class remote talent —{' '}
                    <span className="italic text-cyan-400">build faster</span>, spend smarter.
                </m.h1>

                {/* Description */}
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    We connect startups with vetted global professionals in tech and beyond, helping you scale at up to 70% lower cost.
                </m.p>

                {/* CTA Buttons */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#talent-showcase"
                        className="group bg-cyan-400 text-zinc-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-300 transition-all shadow-lg hover:shadow-cyan-400/25 flex items-center"
                    >
                        Start Hiring
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 text-white border border-zinc-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all"
                    >
                        Book a Call
                    </a>
                </m.div>

                {/* Trust Indicators */}
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-400 text-sm font-medium"
                >
                    <div className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-2" />
                        Pre-vetted experts
                    </div>
                    <div className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-2" />
                        Risk-free trial
                    </div>
                    <div className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-2" />
                        Avg. 48hr hire
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default Hero;
