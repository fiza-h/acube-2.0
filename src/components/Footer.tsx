'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import TalentRegistrationModal from './TalentRegistrationModal';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
    const [showTalentForm, setShowTalentForm] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <>
            <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="flex items-center gap-3 mb-6 group">
                                <div className="relative w-32 h-10">
                                    <Image
                                        src="/assets/acube-logo-v2.png"
                                        alt="ACube Tech"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </Link>
                            <p className="text-zinc-500 max-w-sm mb-8 font-sans font-light">
                                Connecting startups with world-class remote talent. Build faster, spend smarter, and scale without limits.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com/company/acube-tech" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-cyan-400 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 font-serif">Company</h4>
                            <ul className="space-y-4 font-sans font-light">
                                <li><Link href="/about" className="text-zinc-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
                                <li><Link href="/case-studies" className="text-zinc-400 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                                <li>
                                    <button
                                        onClick={() => setShowTalentForm(true)}
                                        className="text-zinc-400 hover:text-cyan-400 transition-colors"
                                    >
                                        Careers
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 font-serif">Contact</h4>
                            <ul className="space-y-4 font-sans font-light">
                                <li className="flex items-center text-zinc-400">
                                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                                    team@acube-tech.com
                                </li>
                                <li>
                                    <button
                                        onClick={() => setShowContactModal(true)}
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 underline-offset-4"
                                    >
                                        Send us a Message
                                    </button>
                                </li>
                                <li>
                                    <Link
                                        href="https://calendly.com/absaarmalik15/30min"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 underline-offset-4"
                                    >
                                        Schedule a Call
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://chat.whatsapp.com/KxJfsyfvcdh3BklH9pWW1z"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Join Community
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-zinc-600 text-sm mb-4 md:mb-0 font-light">
                            © {new Date().getFullYear()} ACube Tech. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-zinc-600 font-light">
                            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Talent Registration Modal */}
            <TalentRegistrationModal
                isOpen={showTalentForm}
                onClose={() => setShowTalentForm(false)}
            />

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={showContactModal}
                onClose={() => setShowContactModal(false)}
            />
        </>
    );
};

export default Footer;
