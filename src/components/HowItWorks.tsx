'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Users, Rocket } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        id: '01',
        icon: MessageSquare,
        title: 'Tell us what you need',
        description: 'Share your requirements and we will help you define the perfect role.',
    },
    {
        id: '02',
        icon: Users,
        title: 'Get matched',
        description: 'We connect you with vetted professionals who match your specific needs.',
    },
    {
        id: '03',
        icon: Rocket,
        title: 'Start building',
        description: 'Onboard your new team member and start scaling immediately. We handle the rest.',
    },
];

const HowItWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
    const lineWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

    return (
        <section ref={containerRef} className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Works</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Three simple steps to build your dream team.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2">
                        <motion.div
                            style={{ width: lineWidth }}
                            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                        />
                    </div>

                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute top-0 left-8 w-0.5 h-full bg-white/5">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative pl-20 md:pl-0 md:pt-16 group"
                            >
                                {/* Step Number/Icon Container */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-mt-24 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 flex items-center justify-center z-20 group-hover:border-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    <step.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />

                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full border border-blue-500/50 scale-100 animate-ping opacity-0 group-hover:opacity-20" />
                                </div>

                                {/* Card Content */}
                                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden">
                                    {/* Large Background Number */}
                                    <span className="absolute -right-4 -top-4 text-8xl font-bold text-blue-500/5 select-none group-hover:text-blue-500/10 transition-colors">
                                        {step.id}
                                    </span>

                                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-blue-50 transition-colors">{step.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed relative z-10">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
