'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
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

// Duplicate data for the stream effect
const streamTalents = [...talents, ...talents, ...talents];

const TalentCard = ({ talent }: { talent: typeof talents[0] }) => (
    <div className="w-full bg-zinc-900/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 group cursor-pointer hover:bg-zinc-800/50 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-600/50 transition-colors">
                    <Image
                        src={talent.image}
                        alt={talent.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                        {talent.name}
                        {talent.verified && <CheckCircle className="w-3.5 h-3.5 text-blue-600 fill-blue-600/10" />}
                    </h3>
                    <p className="text-[10px] text-zinc-400 flex items-center uppercase tracking-wider">
                        <MapPin className="w-2.5 h-2.5 mr-1" />
                        {talent.location}
                    </p>
                </div>
            </div>
            <div className="flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/5">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-xs font-bold text-white">{talent.rating}</span>
            </div>
        </div>

        <div className="mb-4">
            <p className="text-zinc-300 font-medium mb-3 text-sm">{talent.role}</p>
            <div className="flex flex-wrap gap-1.5">
                {talent.skills.slice(0, 3).map((skill) => (
                    <span
                        key={skill}
                        className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-[10px] text-green-400 font-medium flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />
                AVAILABLE
            </span>
            <button className="text-[10px] font-bold text-white flex items-center group-hover:text-blue-600 transition-colors">
                VIEW <ArrowRight className="ml-1 w-3 h-3" />
            </button>
        </div>
    </div>
);

const Column = ({
    data,
    y
}: {
    data: typeof talents,
    y: any
}) => {
    return (
        <motion.div
            style={{ y }}
            className="flex flex-col gap-6 w-full"
        >
            {data.map((talent, i) => (
                <TalentCard key={i} talent={talent} />
            ))}
        </motion.div>
    );
};

const TalentShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Parallax effects: Middle column moves opposite to sides (reduced for smoother feel)
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-600, 0]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-zinc-950 overflow-hidden">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-20 pointer-events-none" />

                {/* Header Content */}
                <div className="absolute top-10 left-0 right-0 z-30 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
                            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">Talent</span>
                        </h2>
                        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base backdrop-blur-sm bg-zinc-950/30 p-2 rounded-xl">
                            A curated stream of the top 1% global professionals.
                        </p>
                    </motion.div>
                </div>

                {/* Columns Container */}
                <div className="container mx-auto px-4 md:px-20 h-[150vh] flex items-start justify-center gap-6 -mt-20">
                    <div className="w-1/3 hidden md:block">
                        <Column data={streamTalents} y={y1} />
                    </div>
                    <div className="w-full md:w-1/3">
                        <Column data={streamTalents} y={y2} />
                    </div>
                    <div className="w-1/3 hidden md:block">
                        <Column data={streamTalents} y={y3} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TalentShowcase;
