'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { m } from 'motion/react';
import { Menu, X } from 'lucide-react';

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
        { name: 'Case Studies', href: '#' },
        { name: 'About Us', href: '#' },
    ];

    return (
        <m.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    ACube<span className="text-cyan-400">2.0</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                        Join Our Talent Pool
                    </button>

                    <Link
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        className="bg-cyan-400 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-500 transition-all transform hover:scale-105 shadow-lg shadow-cyan-400/20"
                    >
                        Hire Top Talent
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-zinc-900 border-t border-cyan-400/20"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-zinc-300 hover:text-cyan-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="text-left text-zinc-300 hover:text-cyan-400 transition-colors">
                            Join Our Talent Pool
                        </button>
                        <Link
                            href="https://calendly.com/absaarmalik15/30min"
                            target="_blank"
                            className="bg-cyan-400 text-zinc-950 px-5 py-3 rounded-full text-center font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-400/20"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Hire Top Talent
                        </Link>
                    </div>
                </m.div>
            )}
        </m.nav>
    );
};

export default Navbar;
