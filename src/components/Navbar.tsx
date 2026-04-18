'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import TalentRegistrationModal from './TalentRegistrationModal';

const NavLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
        >
            {children}
        </Link>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showTalentForm, setShowTalentForm] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';
    const shouldHideLogo = isHomePage && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Vibe Coding', href: '/vibe-coding' },
        { name: 'About Us', href: '/about' },
        { name: 'Dimension Labs', href: '/dimension-labs' },
    ];

    return (
        <>
            <m.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled
                    ? 'bg-black/70 backdrop-blur-md border-b border-white/5'
                    : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 h-14 flex items-center justify-between">
                    {/* Left: Logo + Links */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group overflow-hidden">
                            <m.div
                                initial={false}
                                animate={{
                                    width: !shouldHideLogo ? '128px' : '0px',
                                    opacity: !shouldHideLogo ? 0.9 : 0,
                                    marginRight: !shouldHideLogo ? '24px' : '0px'
                                }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="relative h-8 group-hover:opacity-100 transition-opacity"
                            >
                                <Image
                                    src="/talspace-brand-logo.png"
                                    alt="Talspace"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </m.div>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-1 text-zinc-400">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} href={link.href}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Right: CTAs */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setShowTalentForm(true)}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
                        >
                            Apply as Talnaut
                        </button>
                        <Link
                            href="https://calendly.com/absaarmalik15/30min"
                            target="_blank"
                            className="text-sm font-medium text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-full transition-colors"
                        >
                            Hire Talnauts
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <m.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black border-t border-white/5 overflow-hidden"
                        >
                            <div className="flex flex-col px-6 py-4 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-base font-medium text-zinc-300 hover:text-white transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-white/5 my-2" />
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setShowTalentForm(true);
                                    }}
                                    className="text-left text-base font-medium text-zinc-300 hover:text-white transition-colors"
                                >
                                    Apply as Talnaut
                                </button>
                                <Link
                                    href="https://calendly.com/absaarmalik15/30min"
                                    target="_blank"
                                    className="inline-flex justify-center text-sm font-medium text-black bg-white hover:bg-zinc-200 px-4 py-2.5 rounded-full transition-colors w-full mt-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Hire Talnauts
                                </Link>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </m.nav>

            <TalentRegistrationModal
                isOpen={showTalentForm}
                onClose={() => setShowTalentForm(false)}
            />
        </>
    );
};

export default Navbar;
