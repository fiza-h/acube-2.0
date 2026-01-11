'use client';

import { m } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const DimensionLabsHomeSection = () => {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-12 rounded-[3rem] relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-500"
                >
                    {/* Glow Details */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-500" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="md:w-2/3">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 mb-6">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-cyan-400 text-sm font-bold tracking-wide uppercase">New Opportunity</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-white leading-tight">
                                Dimension Labs <br className="hidden md:block" />
                                <span className="italic text-cyan-400">Venture Growth Fellowship</span>
                            </h2>

                            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                                A spring fellowship leading to a summer internship. Work directly with founders, identify real pain points, and help build the next generation of startups.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-zinc-500 font-bold uppercase tracking-wider">
                                <span>Spring 2026</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                                <span>Rolling Applications</span>
                            </div>
                        </div>

                        <div className="md:w-1/3 flex justify-center md:justify-end w-full">
                            <Link
                                href="/dimension-labs"
                                className="group/btn relative inline-flex items-center justify-center w-full md:w-auto px-8 py-16 rounded-[2rem] bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex flex-col items-center gap-2 text-zinc-950 font-bold text-xl">
                                    Explore Program
                                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default DimensionLabsHomeSection;
