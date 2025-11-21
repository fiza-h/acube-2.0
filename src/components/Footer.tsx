'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block group">
                            ACube<span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">2.0</span>
                        </Link>
                        <p className="text-zinc-400 max-w-sm mb-8">
                            Connecting startups with world-class remote talent. Build faster, spend smarter, and scale without limits.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center text-zinc-400">
                                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                                team@acube-tech.com
                            </li>
                            <li>
                                <Link
                                    href="https://calendly.com/absaarmalik15/30min"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/50 underline-offset-4"
                                >
                                    Schedule a Call
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} ACube Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
