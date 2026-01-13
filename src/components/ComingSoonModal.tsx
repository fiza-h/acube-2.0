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
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Blurred Marketplace Background */}
                    <div className="absolute inset-0 bg-white">
                        {/* Simulated marketplace grid in background */}
                        <div className="absolute inset-0 opacity-10 blur-sm">
                            <div className="grid grid-cols-4 gap-4 p-8">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square rounded-2xl bg-gradient-to-br from-french-blue/10 to-bright-teal-blue/10 border border-french-blue/5"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Animated particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {particles.map((particle) => (
                                <m.div
                                    key={particle.id}
                                    className="absolute w-1 h-1 bg-french-blue/30 rounded-full"
                                    style={{
                                        left: `${particle.left}%`,
                                        top: `${particle.top}%`,
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.6, 0.2],
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
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
                    </div>

                    {/* Modal Content */}
                    <m.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-white rounded-3xl border border-french-blue/10 shadow-2xl shadow-french-blue/5 overflow-hidden"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                            <m.div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(2,62,138,0.3), transparent)',
                                }}
                                animate={{
                                    x: ['-200%', '200%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-deep-twilight transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="relative p-12 text-center">
                            {/* Icon */}
                            <m.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-french-blue/10 to-bright-teal-blue/10 border border-french-blue/15 mb-8"
                            >
                                <Sparkles className="w-10 h-10 text-french-blue" />
                            </m.div>

                            {/* Title */}
                            <m.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl font-serif font-black text-deep-twilight mb-4 tracking-tight"
                            >
                                Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-french-blue to-bright-teal-blue">Soon</span>
                            </m.h2>

                            {/* Description */}
                            <m.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed font-sans font-light"
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
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <Users className="w-6 h-6 text-french-blue mb-2 mx-auto" />
                                    <h3 className="text-sm font-bold text-deep-twilight mb-1">1000+ Talent</h3>
                                    <p className="text-xs text-gray-500 font-light">Vetted professionals</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <Zap className="w-6 h-6 text-french-blue mb-2 mx-auto" />
                                    <h3 className="text-sm font-bold text-deep-twilight mb-1">Smart Matching</h3>
                                    <p className="text-xs text-gray-500 font-light">AI-powered recommendations</p>
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
                                    placeholder="Enter your email for updates"
                                    className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-deep-twilight placeholder:text-gray-400 focus:outline-none focus:border-french-blue/50 transition-colors font-light"
                                />
                                <button className="px-6 py-3 rounded-xl bg-french-blue hover:bg-bright-teal-blue text-white font-bold transition-colors whitespace-nowrap shadow-md">
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
