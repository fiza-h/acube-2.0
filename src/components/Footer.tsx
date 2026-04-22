'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const pathname = usePathname();
  const isVibeSupportPage = pathname === '/vibe-coding';

  return (
    <>
      <footer
        id={isVibeSupportPage ? 'fallback-contact' : undefined}
        className="border-t border-white/10 bg-zinc-950 pt-20 pb-10"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link href="/" className="group mb-6 inline-block">
                <div className="relative h-12 w-48">
                  <Image
                    src="/talspace-brand-logo.png"
                    alt="Talspace"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="mb-4 max-w-md font-light leading-relaxed text-zinc-400">
                {isVibeSupportPage
                  ? 'Real-time engineering help for AI-built products. Book a session, ask a question by email, or use the community path if you prefer a warmer introduction.'
                  : 'Talspace helps startups move faster with flexible engineering support, founder-friendly communication, and a path from urgent help to deeper long-term collaboration.'}
              </p>
              <p className="mb-8 max-w-md text-sm text-zinc-500">
                {isVibeSupportPage
                  ? 'This footer is the fallback contact route for the Vibe Support campaign.'
                  : 'Built for teams that want speed, reliability, and practical technical support.'}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/talspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-medium uppercase tracking-widest text-zinc-300">
                {isVibeSupportPage ? 'Vibe Support' : 'Explore'}
              </h4>
              <ul className="space-y-4">
                {isVibeSupportPage ? (
                  <>
                    <li>
                      <Link
                        href="/vibe-coding#how-it-works"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/vibe-coding#pricing"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/vibe-coding#faq"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        Book call
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/vibe-coding"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        Vibe Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dimension-labs"
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        Dimension Labs
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => setShowContactModal(true)}
                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-300"
                      >
                        Contact us
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-medium uppercase tracking-widest text-zinc-300">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-400">
                  <Mail className="mr-2 h-4 w-4 text-cyan-400" />
                  <a
                    href="mailto:team@talspace.org"
                    className="transition-colors hover:text-cyan-300"
                  >
                    team@talspace.org
                  </a>
                </li>
                <li className="flex items-start text-zinc-400">
                  <MapPin className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span>68 Circular Road, #02-01, 049422, Singapore</span>
                </li>
                <li>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="underline-offset-4 transition-colors hover:text-cyan-300 text-cyan-400 underline decoration-cyan-400/50"
                  >
                    Send us a Message
                  </button>
                </li>
                <li>
                  <a
                    href="https://calendly.com/absaarmalik15/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 text-cyan-400 transition-colors hover:text-cyan-300 underline decoration-cyan-400/50"
                  >
                    Schedule a Call
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/KxJfsyfvcdh3BklH9pWW1z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              © {new Date().getFullYear()} Talspace. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="transition-colors hover:text-cyan-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-cyan-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ContactFormModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
};

export default Footer;
