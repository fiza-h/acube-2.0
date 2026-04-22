'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const TalentRegistrationModal = dynamic(() => import('./TalentRegistrationModal'), {
  loading: () => null,
});

const NavLink = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
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
  const isVibeSupportPage = pathname === '/vibe-coding';
  const shouldHideLogo = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isVibeSupportPage
    ? [
        { name: 'How It Works', href: '/vibe-coding#how-it-works' },
        { name: 'Pricing', href: '/vibe-coding#pricing' },
        { name: 'FAQ', href: '/vibe-coding#faq' },
        { name: 'About Us', href: '/about' },
      ]
    : [
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
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'border-b border-white/5 bg-black/75 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center overflow-hidden">
              <m.div
                initial={false}
                animate={{
                  width: !shouldHideLogo ? '128px' : '0px',
                  opacity: !shouldHideLogo ? 0.9 : 0,
                  marginRight: !shouldHideLogo ? '24px' : '0px',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative h-8 transition-opacity group-hover:opacity-100"
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

            <div className="hidden items-center space-x-1 text-zinc-400 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {isVibeSupportPage ? (
              <>
                <a
                  href="mailto:team@talspace.org?subject=Talspace%20Vibe%20Support"
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Email Team
                </a>
                <a
                  href="https://calendly.com/absaarmalik15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  Book Call
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowTalentForm(true)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Join Talent Pool
                </button>
                <a
                  href="https://calendly.com/absaarmalik15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  Book Call
                </a>
              </>
            )}
          </div>

          <button
            className="text-zinc-400 transition-colors hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/5 bg-black md:hidden"
            >
              <div className="flex flex-col space-y-4 px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-zinc-300 transition-colors hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="my-2 h-px bg-white/5" />

                {isVibeSupportPage ? (
                  <>
                    <a
                      href="mailto:team@talspace.org?subject=Talspace%20Vibe%20Support"
                      className="text-left text-base font-medium text-zinc-300 transition-colors hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Email Team
                    </a>
                    <a
                      href="https://calendly.com/absaarmalik15/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-full justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Call
                    </a>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowTalentForm(true);
                      }}
                      className="text-left text-base font-medium text-zinc-300 transition-colors hover:text-white"
                    >
                      Join Talent Pool
                    </button>
                    <a
                      href="https://calendly.com/absaarmalik15/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-full justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Call
                    </a>
                  </>
                )}
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
