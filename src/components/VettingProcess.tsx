'use client';

import { m } from 'motion/react';
import { ArrowRight, Code2, MessageSquare, Trophy, UserCheck } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Initial Screen',
        description: 'Resume review, GitHub/portfolio analysis, and AI tooling proficiency check.',
        icon: UserCheck,
        metric: '~15% pass'
    },
    {
        num: '02',
        title: 'Technical Assessment',
        description: '2-3 rounds of technical interviews with leading software engineers from top startups and big tech. We test fundamentals, system design, and AI-augmented workflow.',
        icon: Code2,
        metric: '~40% pass'
    },
    {
        num: '03',
        title: 'Culture & Communication',
        description: 'Async communication test, timezone compatibility, and startup mindset evaluation.',
        icon: MessageSquare,
        metric: '~60% pass'
    },
    {
        num: '04',
        title: 'Final Review',
        description: 'Founder interview, reference checks, and network admission decision.',
        icon: Trophy,
        metric: '<1% final acceptance'
    }
];

const VettingProcess = () => {
    return (
        <section className="py-16 px-6 lg:px-16 xl:px-24 border-t border-white/10">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500 mb-6">
                        06  How We Vet
                    </div>
                    <h2 className="font-sans text-4xl md:text-5xl tracking-tight text-white max-w-2xl">
                        Less than 1% make it through.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Here's why.
                        </span>
                    </h2>
                </m.div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-400/40 to-cyan-400/20 hidden md:block" />

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <m.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative group"
                            >
                                <div className="flex gap-6 md:gap-8 items-start py-8 border-b border-white/5 last:border-b-0">
                                    {/* Step indicator */}
                                    <div className="relative flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 transition-all group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20">
                                            <step.icon className="h-5 w-5 text-cyan-400" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <div className="flex items-start justify-between gap-4 flex-wrap">
                                            <div className="flex-1 min-w-[200px]">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="font-mono text-xs text-zinc-500">
                                                        {step.num}
                                                    </span>
                                                    <h3 className="font-sans text-2xl md:text-3xl tracking-tight text-white">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-xl">
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Metric badge */}
                                            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2">
                                                <div className="font-mono text-xs text-zinc-500 mb-1">
                                                    Pass rate
                                                </div>
                                                <div className="font-mono text-lg text-cyan-400">
                                                    {step.metric}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 p-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(2,6,23,0.72))]"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="font-sans text-2xl md:text-3xl tracking-tight text-white mb-2">
                                Think you have what it takes?
                            </h3>
                            <p className="text-sm text-zinc-400">
                                Join a network that actually vets for quality.
                            </p>
                        </div>
                        <a
                            href="#talent-showcase"
                            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.06em] uppercase bg-cyan-400 text-black px-6 py-3 rounded-[2px] font-medium hover:bg-cyan-500 transition-colors"
                        >
                            Apply to network
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default VettingProcess;
