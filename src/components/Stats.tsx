'use client';

import { m } from 'motion/react';

const stats = [
    {
        num: '<1%',
        label: 'Acceptance rate into the Talspace network',
    },
    {
        num: '48h',
        label: 'Average time to match you with a vetted engineer',
    },
    {
        num: '10×',
        label: 'Output multiplier vs. traditional offshore engineers',
    },
    {
        num: '$0',
        label: 'Placement fee. Pay only when your engineer ships.',
    },
];

const Stats = () => {
    return (
        <section className="py-16 px-10 border-t border-white/10">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
            >
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                    01 — By the numbers
                </div>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
                {stats.map((stat, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`p-7 border-white/10 ${
                            index < stats.length - 1 ? 'border-r' : ''
                        } border-b lg:border-b-0`}
                    >
                        <div className="font-serif text-5xl font-normal text-cyan-400 leading-none mb-2">
                            {stat.num}
                        </div>
                        <div className="text-xs text-zinc-400 leading-relaxed">
                            {stat.label}
                        </div>
                    </m.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
