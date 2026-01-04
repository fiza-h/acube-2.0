'use client';

import { m, useScroll, useTransform } from 'motion/react';
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
        description: 'Our AI-powered matching system connects you with vetted professionals who perfectly align with your specific needs.',
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
        <section ref={containerRef} className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
                        How It <span className="text-cyan-400">Works</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-sans font-light">
                        Three simple steps to build your dream team.
                    </p>
                </m.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-900 -translate-y-1/2">
                        <m.div
                            style={{ width: lineWidth }}
                            className="h-full bg-cyan-400/30"
                        />
                    </div>

                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute top-0 left-8 w-0.5 h-full bg-zinc-900">
                        <m.div
                            style={{ height: lineHeight }}
                            className="w-full bg-cyan-400/30"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative pl-20 md:pl-0 md:pt-16 group"
                            >
                                {/* Step Number/Icon Container */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-mt-24 w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-20 group-hover:border-cyan-400 transition-all duration-300 shadow-sm group-hover:shadow-cyan-400/20">
                                    <step.icon className="w-6 h-6 text-cyan-400 transition-colors" />
                                </div>

                                {/* Card Content */}
                                <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/20 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden h-full">
                                    {/* Large Background Number */}
                                    <span className="absolute -right-2 -top-4 text-8xl font-serif font-bold text-zinc-800/80 group-hover:text-cyan-400/5 transition-colors select-none">
                                        {step.id}
                                    </span>

                                    <h3 className="text-2xl font-serif font-medium text-white mb-4 relative z-10">{step.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed relative z-10 font-sans font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
