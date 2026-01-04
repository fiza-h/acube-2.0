'use client';

import { m } from 'motion/react';
import { Brain, Code, Palette, Briefcase, ArrowUpRight, Sparkles, Cloud } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import ComingSoonModal from './ComingSoonModal';

const categories = [
    {
        name: 'AI/ML Engineers',
        icon: Brain,
        count: '120+',
        description: 'Experts in LLMs, Computer Vision, and NLP.',
        skills: ['PyTorch', 'TensorFlow', 'OpenAI'],
        gradient: 'from-blue-500/10 to-purple-500/10'
    },
    {
        name: 'Software Developers',
        icon: Code,
        count: '300+',
        description: 'Full-stack wizards building scalable apps.',
        skills: ['React', 'Node.js', 'Rust'],
        gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
        name: 'UI/UX Designers',
        icon: Palette,
        count: '80+',
        description: 'Crafting intuitive and beautiful experiences.',
        skills: ['Figma', 'Prototyping', 'User Research'],
        gradient: 'from-pink-500/10 to-rose-500/10'
    },
    {
        name: 'Product Managers',
        icon: Briefcase,
        count: '50+',
        description: 'Visionaries who drive product success.',
        skills: ['Strategy', 'Agile', 'Roadmapping'],
        gradient: 'from-amber-500/10 to-orange-500/10'
    },
    {
        name: 'Cloud Architects',
        icon: Cloud,
        count: '45+',
        description: 'Designing robust cloud infrastructure.',
        skills: ['AWS', 'Azure', 'GCP'],
        gradient: 'from-emerald-500/10 to-teal-500/10'
    },
];

function Card({ category, index, onClick }: { category: typeof categories[0], index: number, onClick: () => void }) {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col justify-between p-8 bg-white rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl hover:border-french-blue/30 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2"
            onClick={onClick}
        >
            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <category.icon className="w-8 h-8 text-french-blue" />
                    </div>
                    <span className="flex items-center gap-1 px-3 py-1 bg-french-blue/5 text-french-blue text-xs font-bold uppercase tracking-wider rounded-full border border-french-blue/10">
                        <Sparkles className="w-3 h-3" />
                        {category.count}
                    </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-deep-twilight mb-3 group-hover:text-french-blue transition-colors">
                    {category.name}
                </h3>

                <p className="text-gray-600 mb-8 font-sans font-light leading-relaxed">
                    {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {category.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-500 shadow-sm group-hover:border-french-blue/20 transition-colors">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-gray-100 group-hover:border-french-blue/10 transition-colors mt-auto">
                <div className="flex items-center justify-between text-deep-twilight font-semibold group-hover:text-french-blue transition-colors">
                    <span>Explore Talent</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-french-blue group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
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
            <section className="py-24 bg-gray-50/50 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-french-blue/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-bright-teal-blue/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-6xl font-serif font-medium text-deep-twilight mb-6">
                            Curated <span className="italic text-french-blue">Categories</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light font-sans">
                            We&apos;ve organized our talent pool into specialized categories to help you find exactly who you need.
                        </p>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <Card key={index} category={category} index={index} onClick={() => setShowComingSoon(true)} />
                        ))}

                        {/* CTA Card */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="bg-deep-twilight rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-french-blue/20 to-transparent opacity-50" />
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-french-blue/30 rounded-full blur-3xl group-hover:bg-french-blue/50 transition-colors duration-500" />

                            <div className="relative z-10 flex flex-col items-center h-full justify-center">
                                <div className="p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                                    <Sparkles className="w-8 h-8 text-light-cyan" />
                                </div>
                                <h3 className="text-3xl font-serif font-medium mb-4">
                                    Don&apos;t see what you need?
                                </h3>
                                <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-xs">
                                    We have a vast network of professionals. Let us find them for you.
                                </p>
                                <button
                                    onClick={() => setShowContactModal(true)}
                                    className="px-8 py-3 bg-white text-deep-twilight rounded-full font-bold hover:bg-light-cyan transition-colors shadow-lg w-full sm:w-auto"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </m.div>
                    </div>
                </div>
            </section>

            <ContactFormModal
                isOpen={showContactModal}
                onClose={() => setShowContactModal(false)}
            />

            <ComingSoonModal
                isOpen={showComingSoon}
                onClose={() => setShowComingSoon(false)}
            />
        </>
    );
};

export default TalentCategories;
