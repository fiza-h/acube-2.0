'use client';

import { m, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { MapPin, CheckCircle, Briefcase, GraduationCap, Code, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import ComingSoonModal from './ComingSoonModal';
import ContactFormModal from './ContactFormModal';

const talents = [
    {
        name: 'Maryam',
        role: 'Software Engineer',
        location: 'Islamabad, Pakistan',
        skills: ['React.js', 'Node.js', 'Angular', 'Jest', 'MERN Stack'],
        image: '/maryam.jpeg',
        verified: true,
        experience: '3+ years',
        education: 'BS Computer Science, NUST',
        hourlyRate: '$35/hr',
        projects: 25,
        bio: "Full-stack developer with experience in MERN and MEAN stacks. Building user-focused applications with a focus on scalability and performance.",
        languages: ['English', 'German'],
        timezone: 'GMT+5',
    },
    {
        name: 'Saad',
        role: 'Full Stack Engineer',
        location: 'Lahore, Pakistan',
        skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
        image: '/saad-ali.jpeg',
        verified: true,
        experience: '4+ years',
        education: 'BS Computer Science, PUCIT',
        hourlyRate: '$40/hr',
        projects: 35,
        bio: 'Full Stack Engineer specializing in code splitting, refactoring, and decentralized applications (Dapps). Passionate about innovative solutions and user experience.',
        languages: ['English', 'Urdu'],
        timezone: 'GMT+5',
    },
    {
        name: 'Javeria',
        role: 'Frontend Web Developer',
        location: 'Karachi, Pakistan',
        skills: ['React.js', 'Redux', 'JavaScript', 'Ant Design', 'Bootstrap'],
        image: '/javeria-urooj.png',
        verified: true,
        experience: '2.5+ years',
        education: 'BS Computer Science, Sukkur IBA',
        hourlyRate: '$30/hr',
        projects: 28,
        bio: 'Frontend Developer with thorough knowledge and hands-on experience in React.js and modern JavaScript frameworks. Passionate about creating user-friendly interfaces.',
        languages: ['English', 'Urdu'],
        timezone: 'GMT+5',
    },
    {
        name: 'Kashan',
        role: 'Product Designer',
        location: 'Islamabad, Pakistan',
        skills: ['Figma', 'UI/UX Design', 'Product Design', 'User Research', 'Prototyping'],
        image: '/kashan-ali.jpeg',
        verified: true,
        experience: '3+ years',
        education: 'BS Computer Science, FAST NUCES',
        hourlyRate: '$45/hr',
        projects: 50,
        bio: 'Product Designer with 50+ global app launches and 3M+ downloads. Specialized in research-backed flows and investor-ready visuals. GITEX Dubai 2024 participant.',
        languages: ['English', 'Urdu'],
        timezone: 'GMT+5',
    },
    {
        name: 'Abdullah',
        role: 'Software Engineer',
        location: 'Pakistan',
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
        image: '/abdullah.jpeg',
        verified: true,
        experience: '3+ years',
        education: 'BS Computer Science',
        hourlyRate: '$35/hr',
        projects: 30,
        bio: 'Experienced software engineer specializing in full-stack development with modern web technologies.',
        languages: ['English', 'Urdu'],
        timezone: 'GMT+5',
    },
    {
        name: 'Shahab',
        role: 'Full Stack Developer',
        location: 'Pakistan',
        skills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
        image: '/sahab.jpeg',
        verified: true,
        experience: '4+ years',
        education: 'BS Software Engineering',
        hourlyRate: '$40/hr',
        projects: 35,
        bio: 'Full Stack Developer building scalable web applications with modern technologies and best practices.',
        languages: ['English', 'Urdu'],
        timezone: 'GMT+5',
    },
    {
        name: 'Umer',
        role: 'Backend Engineer',
        location: 'Pakistan',
        skills: ['Python', 'Django', 'FastAPI', 'MySQL', 'Redis'],
        image: '/umer.JPG',
        verified: true,
        experience: '3+ years',
        education: 'BS Computer Science',
        hourlyRate: '$35/hr',
        projects: 28,
        bio: 'Backend engineer passionate about building efficient APIs and scalable systems with Python frameworks.',
        languages: ['English', 'Urdu'],
        timezone: 'GMT+5',
    },
];

type Talent = typeof talents[0];

const DetailPanel = ({ talent, onClose, onNext, onPrev, hasNext, hasPrev, onMessage }: {
    talent: Talent;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
    onMessage: () => void;
}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            window.scrollTo(0, scrollY);
        };
    }, []);

    const handleWheel = (e: React.WheelEvent) => {
        if (sidebarRef.current) {
            sidebarRef.current.scrollTop += e.deltaY;
        }
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            onWheel={handleWheel}
        >
            <m.div
                ref={sidebarRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="h-full w-full max-w-lg bg-zinc-900 border-l border-zinc-800 overflow-y-scroll overscroll-contain shadow-2xl"
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                {/* Header */}
                <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800 p-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-serif font-bold text-white">Talent Profile</h3>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPrev();
                                }}
                                disabled={!hasPrev}
                                className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-zinc-400 hover:text-white"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNext();
                                }}
                                disabled={!hasNext}
                                className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-zinc-400 hover:text-white"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-zinc-400 hover:text-white" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Profile Header */}
                    <div className="flex items-start gap-4">
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-zinc-700">
                            <Image
                                src={talent.image}
                                alt={talent.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-2xl font-serif font-bold text-white">{talent.name}</h4>
                                {talent.verified && (
                                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                                )}
                            </div>
                            <p className="text-cyan-400 font-medium mb-2">{talent.role}</p>
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <MapPin className="w-4 h-4" />
                                <span>{talent.location}</span>
                                <span className="text-zinc-600">•</span>
                                <span>{talent.timezone}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <p className="text-zinc-400 leading-relaxed font-sans font-light">{talent.bio}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                            <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs text-zinc-500 font-medium">Experience</span>
                            </div>
                            <p className="text-xl font-bold text-white">{talent.experience}</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/50">
                        <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-medium text-zinc-500">Education</span>
                        </div>
                        <p className="text-white">{talent.education}</p>
                    </div>

                    {/* Skills */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Code className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-medium text-zinc-500">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {talent.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-lg border border-zinc-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-4">
                        <a
                            href="https://calendly.com/absaarmalik15/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 py-3 rounded-xl font-bold transition-all text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 shadow-cyan-400/20"
                        >
                            Hire Now
                        </a>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onMessage();
                            }}
                            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium border border-zinc-700 transition-colors"
                        >
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
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selectedTalentIndex, setSelectedTalentIndex] = useState<number | null>(null);
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const filteredTalents = talents.filter(t => t.name !== 'Kashan');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 250;
            const newScrollLeft = direction === 'left'
                ? carouselRef.current.scrollLeft - scrollAmount
                : carouselRef.current.scrollLeft + scrollAmount;

            carouselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            checkScroll();
            carousel.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);

            return () => {
                carousel.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const handleNext = () => {
        if (selectedTalentIndex !== null && selectedTalentIndex < filteredTalents.length - 1) {
            setSelectedTalentIndex(selectedTalentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedTalentIndex !== null && selectedTalentIndex > 0) {
            setSelectedTalentIndex(selectedTalentIndex - 1);
        }
    };

    return (
        <section id="talent-showcase" ref={containerRef} className="relative py-24 bg-zinc-950 overflow-hidden">
            {/* Minimal Background - Dark */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-[100px]" />
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
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
                        World-Class <span className="text-cyan-400">Talent</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-sans font-light">
                        Click on cards to explore detailed profiles of our top 1% global professionals.
                    </p>
                </m.div>

                {/* Talent Carousel */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scrollCarousel('left')}
                        disabled={!canScrollLeft}
                        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 text-cyan-400 hover:bg-zinc-800 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-lg"
                        aria-label="Previous talents"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={() => scrollCarousel('right')}
                        disabled={!canScrollRight}
                        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 text-cyan-400 hover:bg-zinc-800 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-lg"
                        aria-label="Next talents"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <div
                        ref={carouselRef}
                        className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory py-8"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        <div className="flex gap-6 px-2 md:px-4">
                            {filteredTalents.slice(0, 6).map((talent, index) => (
                                <m.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                    transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                                    className="group cursor-pointer flex-shrink-0 w-[200px] md:w-[220px] snap-start"
                                    onClick={() => setSelectedTalentIndex(index)}
                                >
                                    {/* Compact Card - Dark Mode */}
                                    <div className="relative bg-zinc-900 p-3 rounded-2xl border border-zinc-800 hover:border-cyan-400/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/5 hover:-translate-y-1">
                                        {/* Avatar */}
                                        <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-zinc-800 border border-zinc-800">
                                            <Image
                                                src={talent.image}
                                                alt={talent.name}
                                                fill
                                                sizes="200px"
                                                loading={index < 6 ? "eager" : "lazy"}
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                            />

                                            {/* Verified Badge */}
                                            {talent.verified && (
                                                <div className="absolute top-2 right-2 bg-zinc-900/90 backdrop-blur-sm rounded-full p-1 shadow-sm border border-zinc-700">
                                                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="space-y-1 px-1">
                                            <h3 className="text-lg font-serif font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                                                {talent.name}
                                            </h3>
                                            <p className="text-xs text-zinc-500 truncate font-medium">
                                                {talent.role}
                                            </p>
                                            <div className="flex items-center gap-1 text-zinc-600">
                                                <MapPin className="w-3 h-3" />
                                                <span className="text-xs truncate">{talent.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays for sliding effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
                </div>

                {/* Bottom CTA */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => setShowComingSoon(true)}
                        className="group relative px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View All Talent
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <p className="text-zinc-500 text-sm mt-4 font-light">Explore our complete pool of 200+ vetted professionals</p>
                </m.div>
            </m.div>

            {/* Detail Panel */}
            <AnimatePresence mode="wait">
                {selectedTalentIndex !== null && (
                    <DetailPanel
                        talent={filteredTalents[selectedTalentIndex]}
                        onClose={() => setSelectedTalentIndex(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        hasNext={selectedTalentIndex < filteredTalents.length - 1}
                        hasPrev={selectedTalentIndex > 0}
                        onMessage={() => setShowContactModal(true)}
                    />
                )}
            </AnimatePresence>

            {/* Coming Soon Modal */}
            <ComingSoonModal
                isOpen={showComingSoon}
                onClose={() => setShowComingSoon(false)}
            />

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={showContactModal}
                onClose={() => setShowContactModal(false)}
            />
        </section>
    );
};

export default TalentShowcase;
