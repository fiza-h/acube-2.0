'use client';

import { m, useScroll, useTransform } from 'motion/react';
import { ClipboardList, Map, ShieldCheck, FileBadge } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        id: '01',
        icon: ClipboardList,
        title: 'Mission Intake',
        description: 'Define requirements, culture, and outcomes.',
    },
    {
        id: '02',
        icon: Map,
        title: 'Trajectory Mapping',
        description: 'Match missions with Talnaut profiles.',
    },
    {
        id: '03',
        icon: ShieldCheck,
        title: 'Mission Clearance',
        description: 'Interviews, assessments, and alignment checks.',
    },
    {
        id: '04',
        icon: FileBadge,
        title: 'Visa Grant',
        description: 'Mission launch and deployment.',
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
        <section ref={containerRef} className="py-24 relative overflow-hidden border-t border-white/5">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-sans tracking-tight text-white mb-6">
                        Mission Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Mission Partners gain exclusive access to Talnauts — elite engineers operating remotely from Talspace while embedding seamlessly into product teams worldwide.
                    </p>
                </m.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2">
                        <m.div
                            style={{ width: lineWidth }}
                            className="h-full bg-cyan-400"
                        />
                    </div>

                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute top-0 left-8 w-0.5 h-full bg-white/5">
                        <m.div
                            style={{ height: lineHeight }}
                            className="w-full bg-cyan-400"
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 md:gap-6">
                        {steps.map((step, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative pl-20 md:pl-0 md:pt-16 group"
                            >
                                {/* Step Number/Icon Container */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-mt-24 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center z-20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                    <step.icon className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />

                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full border border-cyan-400/30 scale-100 animate-ping opacity-0 group-hover:opacity-20" />
                                </div>

                                {/* Card Content */}
                                <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-cyan-400/20 hover:bg-zinc-900/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] relative overflow-hidden h-full">
                                    {/* Large Background Number */}
                                    <span className="absolute -right-2 -top-4 text-7xl font-sans font-bold text-white/5 select-none transition-colors">
                                        {step.id}
                                    </span>

                                    <h3 className="text-lg font-medium text-white mb-3 relative z-10 group-hover:text-cyan-50 transition-colors tracking-wide">{step.title}</h3>
                                    <p className="text-zinc-500 font-light text-sm leading-relaxed relative z-10">
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
