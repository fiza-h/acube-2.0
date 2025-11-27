'use client';

import { m, useScroll, useTransform } from 'motion/react';
import { MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const talents = [
    {
        name: 'Sarah Chen',
        role: 'Senior Full Stack Developer',
        location: 'Singapore',
        rating: 4.9,
        skills: ['React', 'Node.js', 'AWS'],
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        verified: true,
    },
    {
        name: 'Marcus Rodriguez',
        role: 'AI/ML Engineer',
        location: 'Madrid, Spain',
        rating: 5.0,
        skills: ['Python', 'TensorFlow', 'PyTorch'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        verified: true,
    },
    {
        name: 'Emily Watson',
        role: 'Product Designer',
        location: 'London, UK',
        rating: 4.8,
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        verified: true,
    },
    {
        name: 'David Kim',
        role: 'DevOps Engineer',
        location: 'Seoul, South Korea',
        rating: 4.9,
        skills: ['Docker', 'Kubernetes', 'CI/CD'],
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        verified: true,
    },
    {
        name: 'Elena Popova',
        role: 'Data Scientist',
        location: 'Berlin, Germany',
        rating: 4.9,
        skills: ['Pandas', 'Scikit-learn', 'SQL'],
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        verified: true,
    },
    {
        name: 'James Wilson',
        role: 'Blockchain Dev',
        location: 'Toronto, Canada',
        rating: 4.8,
        skills: ['Solidity', 'Web3.js', 'Ethereum'],
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
        verified: true,
    },
];

const TalentShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

    return (
        <section id="talent-showcase" ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Minimal Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <m.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto px-6"
            >
                {/* Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        World-Class <span className="text-cyan-400">Talent</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        A curated stream of the top 1% global professionals.
                    </p>
                </m.div>

                {/* Talent Grid - Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {talents.map((talent, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="group"
                        >
                            {/* Minimalist Card */}
                            <div className="relative">
                                {/* Large Avatar */}
                                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                                    <Image
                                        src={talent.image}
                                        alt={talent.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        loading={index < 3 ? "eager" : "lazy"}
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                                    {/* Floating badge */}
                                    <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-white font-medium">Available</span>
                                    </div>

                                    {/* Location tag */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80">
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span className="text-xs font-light">{talent.location}</span>
                                    </div>
                                </div>

                                {/* Info Section - Ultra Minimal */}
                                <div className="space-y-3">
                                    {/* Name */}
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                                            {talent.name}
                                        </h3>
                                        {talent.verified && (
                                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                                        )}
                                    </div>

                                    {/* Role */}
                                    <p className="text-zinc-400 font-light text-sm">
                                        {talent.role}
                                    </p>

                                    {/* Skills - Minimalist Pills */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {talent.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs text-zinc-500 font-light border-b border-zinc-800 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Line Effect */}
                                <div className="absolute -bottom-4 left-0 h-px w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
                            </div>
                        </m.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <div className="inline-flex items-center gap-3">
                        <div className="h-px w-12 bg-zinc-800" />
                        <button className="text-sm text-zinc-400 hover:text-white font-light tracking-wide transition-colors">
                            View all talent
                        </button>
                        <div className="h-px w-12 bg-zinc-800" />
                    </div>
                </m.div>
            </m.div>
        </section>
    );
};

export default TalentShowcase;
