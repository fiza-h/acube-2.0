'use client';

import { m, useMotionValue } from 'motion/react';
import { Brain, Code, Palette, Briefcase, ArrowUpRight, Cloud } from 'lucide-react';
import { MouseEvent, useState } from 'react';
import ContactFormModal from './ContactFormModal';
import ComingSoonModal from './ComingSoonModal';

const categories = [
    {
        name: 'AI/ML Engineers',
        icon: Brain,
        count: '120+',
        description: 'Experts in LLMs, Computer Vision, and NLP.',
        skills: ['PyTorch', 'TensorFlow', 'OpenAI'],
        colSpan: 'md:col-span-2',
        gradient: 'from-cyan-400/20 to-cyan-400/20'
    },
    {
        name: 'Software Developers',
        icon: Code,
        count: '300+',
        description: 'Full-stack wizards building scalable apps.',
        skills: ['React', 'Node.js', 'Rust'],
        colSpan: 'md:col-span-1',
        gradient: 'from-cyan-400/20 to-cyan-400/20'
    },
    {
        name: 'UI/UX Designers',
        icon: Palette,
        count: '80+',
        description: 'Crafting intuitive and beautiful experiences.',
        skills: ['Figma', 'Prototyping', 'User Research'],
        colSpan: 'md:col-span-1',
        gradient: 'from-cyan-400/20 to-cyan-400/20'
    },
    {
        name: 'Product Managers',
        icon: Briefcase,
        count: '50+',
        description: 'Visionaries who drive product success.',
        skills: ['Strategy', 'Agile', 'Roadmapping'],
        colSpan: 'md:col-span-1',
        gradient: 'from-cyan-400/20 to-cyan-400/20'
    },
    {
        name: 'Cloud Architects',
        icon: Cloud,
        count: '45+',
        description: 'Designing robust cloud infrastructure.',
        skills: ['AWS', 'Azure', 'GCP'],
        colSpan: 'md:col-span-1',
        gradient: 'from-cyan-400/20 to-cyan-400/20'
    },
];

function Card({ category, index, onClick }: { category: typeof categories[0], index: number, onClick: () => void }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className={`group relative rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden ${category.colSpan} transition-all duration-300 cursor-pointer p-8 flex flex-col justify-between`}
            onMouseMove={handleMouseMove}
            onClick={onClick}
        >
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8 relative">
                    <category.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                    <div className="relative h-8 w-16 text-right">
                        <span className="text-2xl font-sans tracking-tight text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {category.count}
                        </span>
                        <span className="text-2xl font-sans tracking-tight text-zinc-500 absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            {category.count}
                        </span>
                    </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-3">
                    {category.name}
                </h3>
                <p className="text-zinc-400 font-light text-sm mb-8 leading-relaxed max-w-[90%]">
                    {category.description}
                </p>
            </div>

            <div className="relative z-10 border-t border-white/5 pt-6 mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill) => (
                        <span
                            key={skill}
                            className="text-[11px] uppercase tracking-wider font-mono text-zinc-500 bg-black/50 px-2.5 py-1 rounded border border-white/5"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex items-center text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                    Explore Talent <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </div>
        </m.div>
    );
}

const TalentCategories = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);

    return (
        <>
            <section className="py-24 bg-black relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-sans tracking-tight text-white mb-6">
                            Talnauts: Our Talent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Philosophy</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            Talspace is talent-first by design. Elite engineers deserve global opportunities, meaningful work, and long-term growth. They are mission-ready professionals operating with autonomy.
                        </p>

                        {/* The Residency Timeline */}
                        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-px bg-white/10 -translate-y-1/2 z-0" />

                            {[
                                { title: "Open Signal", desc: "Express Interest" },
                                { title: "Clearance", desc: "Rigorous Eval" },
                                { title: "Residency", desc: "Talspace Entry" },
                                { title: "Calibration", desc: "Passport Readiness" },
                                { title: "Talnaut Status", desc: "Global Clearance" }
                            ].map((step, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center text-center p-4 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-mono mb-3 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                                        {i + 1}
                                    </div>
                                    <h4 className="text-white font-medium text-sm mb-1">{step.title}</h4>
                                    <p className="text-zinc-500 text-xs">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <Card key={index} category={category} index={index} onClick={() => setShowComingSoon(true)} />
                        ))}

                        {/* Call to Action Card - Centered */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                            className="group relative rounded-2xl bg-zinc-800/60 p-8 flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-3 border border-white/20 hover:bg-zinc-800 hover:border-white/40 transition-all shadow-xl"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-medium text-white mb-2">Signal Your Interest</h3>
                                <p className="text-zinc-400 mb-6 text-sm font-light">
                                    Only a fraction succeed. Enter the Talspace Residency.
                                </p>
                                <button
                                    onClick={() => setShowContactModal(true)}
                                    className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={showContactModal}
                onClose={() => setShowContactModal(false)}
            />

            {/* Coming Soon Modal */}
            <ComingSoonModal
                isOpen={showComingSoon}
                onClose={() => setShowComingSoon(false)}
            />
        </>
    );
};

export default TalentCategories;
