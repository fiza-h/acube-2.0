'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Mission = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const phrases = [
        "Democratizing access",
        "to global talent.",
        "Breaking borders,",
        "building futures."
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-zinc-950">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950" />
                    <motion.div
                        style={{
                            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1])
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 dashed-border"
                    />
                    <motion.div
                        style={{
                            rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
                            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2])
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-400/10 rounded-full opacity-30"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {phrases.map((phrase, index) => {
                            // Calculate start and end points for each phrase based on scroll progress
                            const start = index * 0.25;
                            const end = start + 0.25;

                            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                            const blur = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [10, 0, 0, 10]);
                            const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);
                            const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, filter: useTransform(blur, (v) => `blur(${v}px)`), y, scale }}
                                    className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center"
                                >
                                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                                        {phrase.split(" ").map((word, i) => (
                                            <span key={i} className={word === "talent." || word === "futures." ? "text-cyan-400" : "text-white"}>
                                                {word}{" "}
                                            </span>
                                        ))}
                                    </h2>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 text-sm font-medium"
                >
                    Scroll to explore our mission
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
