'use client';

import { m, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { MapPin, CheckCircle, Star, Award, Briefcase, GraduationCap, Code, X, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ComingSoonModal from './ComingSoonModal';

const talents = [
    {
        name: 'Sarah Chen',
        role: 'Senior Full Stack Developer',
        location: 'Singapore',
        rating: 4.9,
        skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        verified: true,
        experience: '8 years',
        education: 'MS Computer Science, Stanford',
        hourlyRate: '$85/hr',
        projects: 47,
        bio: 'Passionate about building scalable applications. Previously at Google and Amazon.',
        languages: ['English', 'Mandarin'],
        timezone: 'GMT+8',
    },
    {
        name: 'Marcus Rodriguez',
        role: 'AI/ML Engineer',
        location: 'Madrid, Spain',
        rating: 5.0,
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        verified: true,
        experience: '6 years',
        education: 'PhD Machine Learning, MIT',
        hourlyRate: '$95/hr',
        projects: 32,
        bio: 'Specializing in deep learning and neural networks. Published researcher.',
        languages: ['English', 'Spanish'],
        timezone: 'GMT+1',
    },
    {
        name: 'Emily Watson',
        role: 'Product Designer',
        location: 'London, UK',
        rating: 4.8,
        skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research', 'Design Systems'],
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        verified: true,
        experience: '5 years',
        education: 'BA Design, Royal College of Art',
        hourlyRate: '$75/hr',
        projects: 58,
        bio: 'Creating delightful user experiences for web and mobile. Ex-Airbnb designer.',
        languages: ['English', 'French'],
        timezone: 'GMT+0',
    },
    {
        name: 'David Kim',
        role: 'DevOps Engineer',
        location: 'Seoul, South Korea',
        rating: 4.9,
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins'],
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        verified: true,
        experience: '7 years',
        education: 'BS Software Engineering, KAIST',
        hourlyRate: '$80/hr',
        projects: 41,
        bio: 'Infrastructure expert focused on automation and reliability. Former Netflix engineer.',
        languages: ['English', 'Korean'],
        timezone: 'GMT+9',
    },
    {
        name: 'Elena Popova',
        role: 'Data Scientist',
        location: 'Berlin, Germany',
        rating: 4.9,
        skills: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Data Visualization'],
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        verified: true,
        experience: '6 years',
        education: 'MS Data Science, ETH Zurich',
        hourlyRate: '$90/hr',
        projects: 39,
        bio: 'Transforming data into actionable insights. Specialized in predictive analytics.',
        languages: ['English', 'German', 'Russian'],
        timezone: 'GMT+1',
    },
    {
        name: 'James Wilson',
        role: 'Blockchain Developer',
        location: 'Toronto, Canada',
        rating: 4.8,
        skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi'],
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
        verified: true,
        experience: '4 years',
        education: 'BS Computer Science, University of Toronto',
        hourlyRate: '$100/hr',
        projects: 28,
        bio: 'Building the future of decentralized finance. Smart contract security expert.',
        languages: ['English'],
        timezone: 'GMT-5',
    },
];

type Talent = typeof talents[0];

const DetailPanel = ({ talent, onClose }: { talent: Talent; onClose: () => void }) => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <m.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="h-full w-full max-w-lg bg-zinc-900/95 backdrop-blur-xl border-l border-cyan-400/20 overflow-y-auto"
            >
                {/* Header */}
                <div className="sticky top-0 bg-zinc-900/90 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between z-10">
                    <h3 className="text-xl font-bold text-white">Talent Profile</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-zinc-400" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Profile Header */}
                    <div className="flex items-start gap-4">
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                            <Image
                                src={talent.image}
                                alt={talent.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-2xl font-bold text-white">{talent.name}</h4>
                                {talent.verified && (
                                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                                )}
                            </div>
                            <p className="text-cyan-400 font-medium mb-2">{talent.role}</p>
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <MapPin className="w-4 h-4" />
                                <span>{talent.location}</span>
                                <span className="text-zinc-600">•</span>
                                <span>{talent.timezone}</span>
                            </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-2xl font-bold text-white">{talent.rating}</span>
                        </div>
                        <div className="text-sm text-zinc-400">
                            Based on {talent.projects} projects
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <p className="text-zinc-300 leading-relaxed">{talent.bio}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 rounded-xl border border-cyan-400/20">
                            <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs text-zinc-400">Experience</span>
                            </div>
                            <p className="text-xl font-bold text-white">{talent.experience}</p>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 rounded-xl border border-cyan-400/20">
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs text-zinc-400">Projects</span>
                            </div>
                            <p className="text-xl font-bold text-white">{talent.projects}</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-medium text-zinc-400">Education</span>
                        </div>
                        <p className="text-white">{talent.education}</p>
                    </div>

                    {/* Skills */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Code className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-medium text-zinc-400">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {talent.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-cyan-400/10 text-cyan-400 text-xs font-medium rounded-lg border border-cyan-400/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <MessageSquare className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-medium text-zinc-400">Languages</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {talent.languages.map((lang) => (
                                <span
                                    key={lang}
                                    className="px-3 py-1.5 bg-white/5 text-zinc-300 text-xs font-medium rounded-lg border border-white/10"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hourly Rate */}
                    <div className="p-6 bg-gradient-to-br from-cyan-400/20 to-cyan-400/10 rounded-2xl border border-cyan-400/30 text-center">
                        <p className="text-sm text-cyan-400 mb-1">Hourly Rate</p>
                        <p className="text-3xl font-bold text-white">{talent.hourlyRate}</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-zinc-950 py-3 rounded-xl font-bold transition-colors">
                            Hire Now
                        </button>
                        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium border border-white/10 transition-colors">
                            Message
                        </button>
                    </div>
                </div>
            </m.div>
        </m.div>
    );
};

const TalentShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

    return (
        <section id="talent-showcase" ref={containerRef} className="relative py-16 bg-zinc-950 overflow-hidden">
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
                        Hover over cards to explore detailed profiles of our top 1% global professionals.
                    </p>
                </m.div>

                {/* Talent Grid - Smaller Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {talents.map((talent, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                            className="group cursor-pointer"
                            onMouseEnter={() => setSelectedTalent(talent)}
                        >
                            {/* Compact Card */}
                            <div className="relative">
                                {/* Avatar */}
                                <div className="relative aspect-square mb-3 overflow-hidden rounded-xl">
                                    <Image
                                        src={talent.image}
                                        alt={talent.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                        loading={index < 6 ? "eager" : "lazy"}
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    {/* Verified Badge */}
                                    {talent.verified && (
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                                        </div>
                                    )}

                                    {/* Rating */}
                                    <div className="absolute bottom-2 left-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs text-white font-bold">{talent.rating}</span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                                        {talent.name}
                                    </h3>
                                    <p className="text-xs text-zinc-500 truncate">
                                        {talent.role}
                                    </p>
                                    <div className="flex items-center gap-1 text-zinc-600">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-xs truncate">{talent.location}</span>
                                    </div>
                                </div>

                                {/* Hover Line */}
                                <div className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
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
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3">
                        <div className="h-px w-12 bg-zinc-800" />
                        <button
                            onClick={() => setShowComingSoon(true)}
                            className="text-sm text-zinc-400 hover:text-white font-light tracking-wide transition-colors"
                        >
                            View all talent
                        </button>
                        <div className="h-px w-12 bg-zinc-800" />
                    </div>
                </m.div>
            </m.div>

            {/* Detail Panel */}
            <AnimatePresence>
                {selectedTalent && (
                    <DetailPanel
                        talent={selectedTalent}
                        onClose={() => setSelectedTalent(null)}
                    />
                )}
            </AnimatePresence>

            {/* Coming Soon Modal */}
            <ComingSoonModal
                isOpen={showComingSoon}
                onClose={() => setShowComingSoon(false)}
            />
        </section>
    );
};

export default TalentShowcase;
