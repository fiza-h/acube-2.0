'use client';

import Link from 'next/link';
import { m } from 'motion/react';

const Navbar = () => {
    return (
        <m.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-0 z-50 flex items-center justify-between px-10 py-6 border-b border-white/10 bg-black/80 backdrop-blur-md"
        >
            {/* Logo */}
            <Link href="/" className="font-mono text-2xl font-medium tracking-tight">
                tal<span className="text-cyan-400">space</span>
            </Link>

            {/* Nav Links - Desktop */}
            <ul className="hidden md:flex items-center gap-8">
                <li>
                    <Link
                        href="/vibe-coding"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        Vibe Coding
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dimension-labs"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        Dimension Labs
                    </Link>
                </li>
                <li>
                    <a
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                    >
                        Book Call
                    </a>
                </li>
            </ul>
        </m.nav>
    );
};

export default Navbar;
