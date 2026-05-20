'use client';

import { m } from 'motion/react';

const talents = [
    {
        initials: 'MK',
        name: 'Maryam K.',
        role: 'Full-stack · Islamabad',
        skills: ['React', 'Node.js', 'MERN'],
        credential: 'Google HashCode Finalist',
    },
    {
        initials: 'SA',
        name: 'Saad A.',
        role: 'Full-stack · Lahore',
        skills: ['TypeScript', 'AWS', 'PostgreSQL'],
        credential: 'Startup Weekend Winner',
    },
    {
        initials: 'JU',
        name: 'Javeria U.',
        role: 'Frontend · Karachi',
        skills: ['React', 'Redux', 'JavaScript'],
        credential: 'AI-Native Engineer',
    },
    {
        initials: 'KA',
        name: 'Kashan A.',
        role: 'Product Designer · Islamabad',
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        credential: 'Ex-Founder',
    },
];

const TalentShowcase = () => {
    return (
        <section id="talent-showcase" className="py-16 px-10 border-t border-white/10">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                    03 — A glimpse into the network
                </div>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
                {talents.map((talent, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`p-6 border-white/10 ${
                            index < talents.length - 1 ? 'border-r' : ''
                        } hover:bg-white/[0.03] transition-colors cursor-pointer`}
                    >
                        {/* Avatar */}
                        <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-[11px] text-cyan-400 mb-4">
                            {talent.initials}
                        </div>

                        {/* Name */}
                        <div className="text-[13px] font-medium text-white mb-1">
                            {talent.name}
                        </div>

                        {/* Role */}
                        <div className="font-mono text-[11px] text-zinc-400 mb-3">
                            {talent.role}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            <span className="font-mono text-[9px] tracking-[0.06em] uppercase px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-[1px] text-cyan-400">
                                {talent.credential}
                            </span>
                            {talent.skills.slice(0, 2).map((skill, i) => (
                                <span
                                    key={i}
                                    className="font-mono text-[9px] tracking-[0.06em] uppercase px-2 py-1 bg-white/[0.06] border border-white/10 rounded-[1px] text-zinc-400"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </m.div>
                ))}
            </div>
        </section>
    );
};

export default TalentShowcase;
