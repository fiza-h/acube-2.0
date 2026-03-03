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
            <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="inline-block mb-6 group">
                                <div className="relative w-48 h-12">
                                    <Image
                                        src="/talspace-brand-logo.png"
                                        alt="Talspace"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </Link>
                            <p className="text-zinc-500 max-w-sm mb-4 font-light leading-relaxed">
                                Talspace is where the rarest engineering talent operates globally — above the noise, without borders.
                            </p>
                            <p className="text-zinc-600 text-sm max-w-sm mb-8 font-mono">
                                A curated universe. Not a body shop.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com/company/talspace" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-zinc-300 font-medium mb-6 uppercase tracking-widest text-xs">Talspace Operations (Ministries)</h4>
                            <ul className="space-y-4">
                                <li>
                                    <span className="text-zinc-500 text-sm block">Ministry of Entry & Residency</span>
                                    <span className="text-zinc-600 text-xs">Talent acquisition and selection</span>
                                </li>
                                <li>
                                    <span className="text-zinc-500 text-sm block">Ministry of Standards</span>
                                    <span className="text-zinc-600 text-xs">Training, quality, and continuous improvement</span>
                                </li>
                                <li>
                                    <span className="text-zinc-500 text-sm block">Mission Ambassadors</span>
                                    <span className="text-zinc-600 text-xs">Delivery support, QA, and partner success</span>
                                </li>
                                <li>
                                    <span className="text-zinc-500 text-sm block">Central Office of Finance</span>
                                    <span className="text-zinc-600 text-xs">Compensation, pricing, and stability</span>
                                </li>
                                <li>
                                    <span className="text-zinc-500 text-sm block">Mission Control</span>
                                    <span className="text-zinc-600 text-xs">Strategy and long-term direction</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-zinc-300 font-medium mb-6 uppercase tracking-widest text-xs">Connect</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center text-zinc-400">
                                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                                    team@talspace.org
                                </li>
                                <li>
                                    <button
                                        onClick={() => setShowContactModal(true)}
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/50 underline-offset-4"
                                    >
                                        Send us a Message
                                    </button>
                                </li>
                                <li>
                                    <Link
                                        href="https://calendly.com/absaarmalik15/30min"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/50 underline-offset-4"
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

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Talspace. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-500">
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
