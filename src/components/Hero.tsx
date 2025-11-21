'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/30 via-zinc-950 to-zinc-950 z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-zinc-300">The future of hiring is here</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight"
                >
                    Hire world-class remote talent — <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">build faster</span>, spend smarter.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    We connect startups with vetted global professionals in tech and beyond, helping you scale at up to 70% lower cost.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <button className="group bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105 flex items-center">
                        Explore Talent
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all">
                        Hire Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
