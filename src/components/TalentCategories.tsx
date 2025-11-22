'use client';

import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { Brain, Code, Palette, Briefcase, ArrowUpRight, Sparkles, Cloud } from 'lucide-react';
import { MouseEvent } from 'react';

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

function Card({ category, index }: { category: typeof categories[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className={`group relative rounded-3xl bg-zinc-900 border border-white/5 hover:border-cyan-400/30 overflow-hidden ${category.colSpan} transition-all duration-300`}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-cyan-400/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-cyan-400/20 group-hover:border-cyan-400/40">
                            <category.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                        </div>
                        <span className="flex items-center text-xs font-bold text-white/60 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            <Sparkles className="w-3 h-3 mr-1 text-cyan-400" />
                            {category.count}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 group-hover:text-cyan-50 transition-all">
                        {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
                        {category.description}
                    </p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {category.skills.map((skill) => (
                            <span
                                key={skill}
                                className="text-xs font-medium text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded-md border border-cyan-400/20 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center text-cyan-400 text-sm font-bold group-hover:text-cyan-300 transition-colors">
                        Explore Talent <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const TalentCategories = () => {
    return (
        <section className="py-32 bg-zinc-950 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Curated <span className="text-cyan-400">Categories</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        We&apos;ve organized our talent pool into specialized categories to help you find exactly who you need.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <Card key={index} category={category} index={index} />
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                        className="group relative rounded-3xl bg-gradient-to-br from-cyan-400/10 to-cyan-400/10 p-8 flex flex-col justify-center items-center text-center md:col-span-1 overflow-hidden border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Don&apos;t see what you need?</h3>
                            <p className="text-zinc-400 mb-6 text-sm">
                                We have a vast network of professionals. Let us find them for you.
                            </p>
                            <button className="bg-cyan-400 hover:bg-cyan-500 text-zinc-950 px-6 py-2 rounded-full font-bold text-sm transition-colors shadow-lg shadow-cyan-400/20">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TalentCategories;
