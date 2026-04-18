'use client';

import { m, AnimatePresence } from 'motion/react';
import { X, Sparkles, Users, Zap } from 'lucide-react';
import { useMemo } from 'react';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Generate particles outside component to avoid impure function calls
const generateParticles = () =>
    Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
    }));

const particlesData = generateParticles();

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
    const particles = useMemo(() => particlesData, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-lenis-prevent
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Blurred Marketplace Background */}
                    <div className="absolute inset-0 bg-zinc-950">
                        {/* Simulated marketplace grid in background */}
                        <div className="absolute inset-0 opacity-30 blur-sm">
                            <div className="grid grid-cols-4 gap-4 p-8">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/15"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Animated particles */}
                        <div className="absolute inset-0">
                            {particles.map((particle) => (
                                <m.div
                                    key={particle.id}
                                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                    style={{
                                        left: `${particle.left}%`,
                                        top: `${particle.top}%`,
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: particle.duration,
                                        repeat: Infinity,
                                        delay: particle.delay,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Backdrop blur overlay */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
                    </div>

                    {/* Modal Content */}
                    <m.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    >

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                            <X className="w-5 h-5 text-zinc-400" />
                        </button>

                        {/* Content */}
                        <div className="relative p-12 text-center">
                            {/* Icon */}
                            <m.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8"
                            >
                                <Sparkles className="w-10 h-10 text-white" />
                            </m.div>

                            {/* Title */}
                            <m.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                            >
                                Coming <span className="text-zinc-500">Soon</span>
                            </m.h2>

                            {/* Description */}
                            <m.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed"
                            >
                                We&apos;re building something incredible. Our talent marketplace will launch soon with revolutionary features.
                            </m.p>

                            {/* Features grid */}
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                            >
                                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                                    <Users className="w-6 h-6 text-white mb-2 mx-auto" />
                                    <h3 className="text-sm font-bold text-white mb-1">1000+ Talent</h3>
                                    <p className="text-xs text-zinc-500">Vetted professionals</p>
                                </div>
                                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                                    <Zap className="w-6 h-6 text-white mb-2 mx-auto" />
                                    <h3 className="text-sm font-bold text-white mb-1">Smart Matching</h3>
                                    <p className="text-xs text-zinc-500">AI-powered recommendations</p>
                                </div>
                            </m.div>

                            {/* Email notification (optional) */}
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                            >
                                <input
                                    type="email"
                                    placeholder="e.g. hello@example.com"
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-colors text-sm"
                                />
                                <button className="px-6 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold transition-colors whitespace-nowrap text-sm">
                                    Notify Me
                                </button>
                            </m.div>
                        </div>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default ComingSoonModal;
