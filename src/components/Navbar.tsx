'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <>
            <m.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl py-3 border-gray-100 shadow-sm'
                    : 'bg-transparent py-5 border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="relative w-48 h-12">
                            <Image
                                src="/assets/acube-logo.png"
                                alt="ACube Tech"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-gray-600 hover:text-deep-twilight transition-colors font-sans group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-french-blue transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <Link
                            href="/join"
                            className="relative text-sm font-medium text-gray-600 hover:text-deep-twilight transition-colors font-sans group"
                        >
                            Join Talent Pool
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-french-blue transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <div className="h-6 w-px bg-gray-200" />

                        <Link
                            href="https://calendly.com/absaarmalik15/30min"
                            target="_blank"
                            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-deep-twilight text-white text-sm font-bold hover:bg-french-blue transition-all duration-300 font-sans shadow-lg shadow-deep-twilight/20 hover:shadow-xl hover:shadow-french-blue/20 hover:-translate-y-0.5"
                        >
                            Hire Top Talent
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-deep-twilight p-2 relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <m.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '100vh' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="fixed inset-0 top-0 pt-24 bg-white z-40 md:hidden overflow-hidden flex flex-col"
                        >
                            <div className="flex flex-col p-8 space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-serif font-medium text-deep-twilight border-b border-gray-100 pb-4"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/join"
                                    className="text-left text-2xl font-serif font-medium text-deep-twilight border-b border-gray-100 pb-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Join Talent Pool
                                </Link>

                                <div className="pt-8">
                                    <Link
                                        href="https://calendly.com/absaarmalik15/30min"
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-deep-twilight text-white text-lg font-bold shadow-xl"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Hire Top Talent
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </m.nav>
        </>
    );
};

export default Navbar;
