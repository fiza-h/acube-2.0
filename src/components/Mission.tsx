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
        "Exceptional engineers exist everywhere.",
        "But markets are noisy.",
        "Talspace is the universe",
        "where elite talent resides."
    ];

    // Compute transforms for each phrase (4 phrases)
    const start0 = 0 * 0.25;
    const end0 = start0 + 0.25;
    const opacity0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [0, 1, 1, 0]);
    const y0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [50, 0, 0, -50]);
    const scale0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [0.8, 1, 1, 0.8]);
    const blur0 = useTransform(scrollYProgress, [start0, start0 + 0.08, end0 - 0.08, end0], [3, 0, 0, 3]);

    const start1 = 1 * 0.25;
    const end1 = start1 + 0.25;
    const opacity1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [50, 0, 0, -50]);
    const scale1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [0.8, 1, 1, 0.8]);
    const blur1 = useTransform(scrollYProgress, [start1, start1 + 0.08, end1 - 0.08, end1], [3, 0, 0, 3]);

    const start2 = 2 * 0.25;
    const end2 = start2 + 0.25;
    const opacity2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [50, 0, 0, -50]);
    const scale2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [0.8, 1, 1, 0.8]);
    const blur2 = useTransform(scrollYProgress, [start2, start2 + 0.08, end2 - 0.08, end2], [3, 0, 0, 3]);

    const start3 = 3 * 0.25;
    const end3 = start3 + 0.25;
    const opacity3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [50, 0, 0, -50]);
    const scale3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [0.8, 1, 1, 0.8]);
    const blur3 = useTransform(scrollYProgress, [start3, start3 + 0.08, end3 - 0.08, end3], [3, 0, 0, 3]);

    const phraseTransforms = [
        { opacity: opacity0, y: y0, scale: scale0, blur: blur0 },
        { opacity: opacity1, y: y1, scale: scale1, blur: blur1 },
        { opacity: opacity2, y: y2, scale: scale2, blur: blur2 },
        { opacity: opacity3, y: y3, scale: scale3, blur: blur3 },
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950" />
                    <m.div
                        style={{
                            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1])
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 dashed-border"
                    />
                    <m.div
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
                            const transforms = phraseTransforms[index];
                            const blurFilter = useMotionTemplate`blur(${transforms.blur}px)`;

                            return (
                                <m.div
                                    key={index}
                                    style={{
                                        opacity: transforms.opacity,
                                        y: transforms.y,
                                        scale: transforms.scale,
                                        filter: blurFilter
                                    }}
                                    className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center"
                                >
                                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                                        {phrase.split(" ").map((word, i) => (
                                            <span key={i} className={word.includes("noisy.") || word.includes("Talspace") || word.includes("resides.") ? "text-cyan-400 font-serif italic" : "text-white"}>
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
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 text-sm font-medium"
                >
                    Scroll to explore our mission
                </m.div>
            </div>
        </section>
    );
};

export default Mission;
