'use client';

import { m } from 'motion/react';
import { Check, X as XIcon } from 'lucide-react';

const isList = [
    "A curated talent universe",
    "A long-term ecosystem",
    "A trust-driven platform"
];

const isNotList = [
    "A freelancer marketplace",
    "A body shop",
    "A volume-driven staffing firm"
];

const Stats = () => {
    return (
        <section className="py-24 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-white mb-4">
                        What Talspace <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-serif">Is</span>
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                        (And what it is not)
                    </p>
                </m.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                        {/* IS */}
                        <m.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-zinc-900/40 border border-cyan-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full" />
                            <h3 className="text-2xl text-white mb-8 border-b border-white/10 pb-4">Talspace Is</h3>
                            <ul className="space-y-6">
                                {isList.map((item, i) => (
                                    <li key={i} className="flex items-center text-zinc-300 font-light text-lg">
                                        <div className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center mr-4 border border-cyan-500/30 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-cyan-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </m.div>

                        {/* IS NOT */}
                        <m.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-black border border-white/5 rounded-2xl p-8 md:p-12"
                        >
                            <h3 className="text-2xl text-zinc-500 mb-8 border-b border-white/10 pb-4">Talspace Is Not</h3>
                            <ul className="space-y-6">
                                {isNotList.map((item, i) => (
                                    <li key={i} className="flex items-center text-zinc-500 font-light text-lg">
                                        <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center mr-4 border border-zinc-800 flex-shrink-0">
                                            <XIcon className="w-3.5 h-3.5 text-zinc-600" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </m.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
