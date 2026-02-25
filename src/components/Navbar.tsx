'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { m } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import TalentRegistrationModal from './TalentRegistrationModal';

const GlitchLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative group px-4 py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <m.span
                className="relative z-10 text-sm font-bold tracking-wide font-[var(--font-space-grotesk)] text-zinc-100"
                animate={isHovered ? {
                    x: [-1, 1, -1, 1, 0],
                    textShadow: [
                        '2px 0 #06b6d4, -2px 0 #06b6d4',
                        '-2px 0 #06b6d4, 2px 0 #06b6d4',
                        '2px 0 #06b6d4, -2px 0 #06b6d4',
                        '0 0 transparent'
                    ]
                } : {}}
                transition={{ duration: 0.3 }}
            >
                {children}
            </m.span>

            {/* Cyan underline */}
            <m.span
                className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
                initial={{ width: 0, opacity: 0 }}
                animate={isHovered ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />

            {/* Corner accents */}
            <m.span
                className="absolute top-0 right-0 w-1 h-1 bg-cyan-400"
                initial={{ scale: 0 }}
                animate={isHovered ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.2 }}
            />
            <m.span
                className="absolute bottom-0 left-0 w-1 h-1 bg-cyan-400"
                initial={{ scale: 0 }}
                animate={isHovered ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
            />
        </Link>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showTalentForm, setShowTalentForm] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (navRef.current) {
                const rect = navRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const navLinks = [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'About Us', href: '/about' },
        { name: 'Dimension Labs', href: '/dimension-labs' },
    ];

    return (
        <>
            <m.nav
                ref={navRef}
                initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${isScrolled
                    ? 'bg-black/40 backdrop-blur-2xl py-3'
                    : 'bg-transparent py-6'
                    }`}
                style={{
                    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
            >
                {/* Ambient light effect following cursor */}
                <m.div
                    className="absolute w-96 h-96 pointer-events-none opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
                        left: mousePos.x - 192,
                        top: mousePos.y - 192,
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Scanline effect */}
                <m.div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.1) 2px, rgba(6,182,212,0.1) 4px)',
                    }}
                    animate={{
                        y: [0, 8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
                    {/* Logo */}
                    <m.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link href="/" className="relative group flex items-center gap-3">
                            {/* Logo Image */}
                            <div className="relative w-48 h-12 md:w-56 md:h-14">
                                <Image
                                    src="/talspace-brand-logo.png"
                                    alt="Talspace"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </m.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {/* Futuristic container with border animation */}
                        <m.div
                            className="relative px-1 py-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {/* Corner brackets */}
                            <svg className="absolute top-0 left-0 w-3 h-3 text-cyan-400" viewBox="0 0 10 10">
                                <path d="M0,0 L10,0 L10,2 M0,0 L0,10 L2,10" stroke="currentColor" fill="none" strokeWidth="1.5" />
                            </svg>
                            <svg className="absolute top-0 right-0 w-3 h-3 text-cyan-400" viewBox="0 0 10 10">
                                <path d="M0,0 L10,0 L10,10 L8,10 M10,0 L10,2" stroke="currentColor" fill="none" strokeWidth="1.5" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 w-3 h-3 text-cyan-400" viewBox="0 0 10 10">
                                <path d="M0,10 L0,0 L2,0 M0,10 L10,10 L10,8" stroke="currentColor" fill="none" strokeWidth="1.5" />
                            </svg>
                            <svg className="absolute bottom-0 right-0 w-3 h-3 text-cyan-400" viewBox="0 0 10 10">
                                <path d="M10,10 L0,10 L0,8 M10,10 L10,0 L8,0" stroke="currentColor" fill="none" strokeWidth="1.5" />
                            </svg>

                            <div className="flex items-center gap-0">
                                {navLinks.map((link) => (
                                    <GlitchLink key={link.name} href={link.href}>
                                        {link.name}
                                    </GlitchLink>
                                ))}

                                <m.button
                                    onClick={() => setShowTalentForm(true)}
                                    className="relative px-4 py-2 text-sm font-bold tracking-wide font-[var(--font-space-grotesk)] text-zinc-100 group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="relative z-10">Join Talent Pool</span>
                                    <m.span
                                        className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </m.button>
                            </div>
                        </m.div>

                        {/* Gradient animated CTA button - inspired by vector-ai.co */}
                        <Link href="https://calendly.com/absaarmalik15/30min" target="_blank">
                            <m.div
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <m.div
                                    className="relative px-6 py-3.5 font-bold text-sm text-zinc-950 overflow-hidden rounded-lg"
                                    style={{
                                        background: 'linear-gradient(to right, #06b6d4, #22d3ee, #06b6d4, #0891b2)',
                                        backgroundSize: '300% 100%',
                                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                        boxShadow: [
                                            '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)',
                                            '0 0 15px rgba(6, 182, 212, 0.4), 0 0 25px rgba(6, 182, 212, 0.25)',
                                            '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)',
                                        ],
                                    }}
                                    transition={{
                                        backgroundPosition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        },
                                        boxShadow: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                >
                                    <span className="relative z-10 font-[var(--font-space-grotesk)] tracking-wide">
                                        Hire Top Talent
                                    </span>

                                    {/* Inner glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </m.div>

                                {/* Subtle outer glow */}
                                <m.div
                                    className="absolute -inset-1 blur-xl -z-10 rounded-lg"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)',
                                    }}
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </m.div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <m.button
                        className="md:hidden text-white relative p-2 border border-cyan-400/15"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
                        }}
                    >
                        <m.div
                            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </m.div>
                    </m.button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <m.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-cyan-400/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link, i) => (
                                <m.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block text-zinc-300 hover:text-cyan-400 transition-colors font-bold font-[var(--font-space-grotesk)]"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </m.div>
                            ))}
                            <m.button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setShowTalentForm(true);
                                }}
                                className="text-left text-zinc-100 hover:text-cyan-400 transition-colors font-bold font-[var(--font-space-grotesk)]"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Join Talent Pool
                            </m.button>
                            <m.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="https://calendly.com/absaarmalik15/30min"
                                    target="_blank"
                                    className="block bg-cyan-500 text-zinc-950 px-6 py-3 text-center font-bold font-[var(--font-space-grotesk)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                                    }}
                                >
                                    HIRE TOP TALENT
                                </Link>
                            </m.div>
                        </div>
                    </m.div>
                )}
            </m.nav>

            {/* Talent Registration Modal */}
            <TalentRegistrationModal
                isOpen={showTalentForm}
                onClose={() => setShowTalentForm(false)}
            />
        </>
    );
};

export default Navbar;
