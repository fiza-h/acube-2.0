'use client';

import { m } from 'motion/react';

const traits = [
    {
        num: '01',
        title: 'AI as a force multiplier, not a crutch',
        description:
            'Every engineer in our network demonstrates measurable productivity gains using AI tooling — Cursor, Claude, Copilot, and beyond. They architect systems, not just prompt them.',
    },
    {
        num: '02',
        title: 'Builder mindset, ownership by default',
        description:
            "Many are ex-founders, open-source maintainers, or have shipped side projects to real users. They treat your product like it's theirs.",
    },
    {
        num: '03',
        title: 'Exceptional fundamentals, proven in competition',
        description:
            'Hackathon winners, competitive programmers, and olympiad veterans. The kind of problem-solving depth that shows up when things break at 2am.',
    },
    {
        num: '04',
        title: 'Ships fast. Communicates clearly.',
        description:
            'Startup-paced. Async-native. No hand-holding. Engineers who can context-switch, prioritise ruthlessly, and ship something by end of week.',
    },
];

const Traits = () => {
    return (
        <section className="py-16 px-10 border-t border-white/10">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                    02 — What makes a Talspace engineer
                </div>
            </m.div>

            <div className="flex flex-col gap-0">
                {traits.map((trait, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className={`flex items-start gap-6 py-6 border-b border-white/10 ${
                            index === 0 ? 'border-t' : ''
                        }`}
                    >
                        <div className="font-mono text-[10px] text-zinc-500 tracking-[0.08em] pt-1 min-w-[24px]">
                            {trait.num}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-serif text-[1.4rem] font-normal text-white mb-1.5">
                                {trait.title}
                            </h3>
                            <p className="text-[13px] text-zinc-400 leading-relaxed max-w-[480px]">
                                {trait.description}
                            </p>
                        </div>
                    </m.div>
                ))}
            </div>
        </section>
    );
};

export default Traits;
