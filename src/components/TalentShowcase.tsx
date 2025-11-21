'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

const TalentCard = ({ talent }: { talent: typeof talents[0] }) => (
    <div className="w-[350px] flex-shrink-0 bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-colors group cursor-pointer">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image
                        src={talent.image}
                        alt={talent.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-white flex items-center gap-2">
                        {talent.name}
                        {talent.verified && <CheckCircle className="w-4 h-4 text-white fill-white/20" />}
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {talent.location}
                    </p>
                </div>
            </div>
            <div className="flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/5">
                <Star className="w-3 h-3 fill-white text-white mr-1" />
                <span className="text-xs font-bold text-white">{talent.rating}</span>
            </div>
        </div>

        <div className="mb-4">
            <p className="text-zinc-300 font-medium mb-3">{talent.role}</p>
            <div className="flex flex-wrap gap-2">
                {talent.skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md border border-white/5"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-xs text-zinc-500">Available now</span>
            <button className="text-xs font-bold text-white flex items-center group-hover:translate-x-1 transition-transform">
                View Profile <ArrowRight className="ml-1 w-3 h-3" />
            </button>
        </div>
    </div>
);

const TalentShowcase = () => {
    return (
        <section className="py-32 bg-zinc-950 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-10" />
            </div>

            <div className="container mx-auto px-6 mb-16 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Talent</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Join hundreds of companies building with our vetted professionals.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Row 1 (Left) */}
            <div className="relative flex overflow-hidden mb-8 group">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20" />

                <motion.div
                    className="flex gap-6 px-6"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {[...talents, ...talents, ...talents].map((talent, index) => (
                        <TalentCard key={`${talent.name}-${index}`} talent={talent} />
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2 (Right) */}
            <div className="relative flex overflow-hidden group">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20" />

                <motion.div
                    className="flex gap-6 px-6"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 45,
                    }}
                >
                    {[...talents.reverse(), ...talents, ...talents].map((talent, index) => (
                        <TalentCard key={`${talent.name}-rev-${index}`} talent={talent} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TalentShowcase;
