'use client';

import { m, useScroll, useTransform, useMotionTemplate } from 'motion/react';
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

    // Compute transforms for each phrase (4 phrases)
    const start0 = 0 * 0.25;
    const end0 = start0 + 0.25;
    const opacity0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [0, 1, 1, 0]);
    const y0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [50, 0, 0, -50]);
    const blur0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [3, 0, 0, 3]);

    const start1 = 1 * 0.25;
    const end1 = start1 + 0.25;
    const opacity1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [50, 0, 0, -50]);
    const blur1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [3, 0, 0, 3]);

    const start2 = 2 * 0.25;
    const end2 = start2 + 0.25;
    const opacity2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [50, 0, 0, -50]);
    const blur2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [3, 0, 0, 3]);

    const start3 = 3 * 0.25;
    const end3 = start3 + 0.25;
    const opacity3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [50, 0, 0, -50]);
    const blur3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [3, 0, 0, 3]);

    const phraseTransforms = [
        { opacity: opacity0, y: y0, blur: blur0 },
        { opacity: opacity1, y: y1, blur: blur1 },
        { opacity: opacity2, y: y2, blur: blur2 },
        { opacity: opacity3, y: y3, blur: blur3 },
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-zinc-950">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Minimal Background */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {phrases.map((phrase, index) => {
                            const transforms = phraseTransforms[index];
                            const blurFilter = useMotionTemplate`blur(${transforms.blur}px)`;

                            return (
                                <m.div
                                    key={index}
                                    style={{
                                        opacity: transforms.opacity,
                                        y: transforms.y,
                                        filter: blurFilter
                                    }}
                                    className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center"
                                >
                                    <h2 className="text-5xl md:text-8xl font-serif font-medium tracking-tight text-white">
                                        {phrase.split(" ").map((word, i) => (
                                            <span key={i} className={word === "talent." || word === "futures." ? "text-cyan-400 italic" : "text-white"}>
                                                {word}{" "}
                                            </span>
                                        ))}
                                    </h2>
                                </m.div>
                            );
                        })}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <m.div
                    style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 text-sm font-sans tracking-widest uppercase"
                >
                    Scroll to explore
                </m.div>
            </div>
        </section>
    );
};

export default Mission;
