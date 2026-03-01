import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Dimension Labs - Talspace',
    description: 'Dimension Labs Venture Growth Fellowship',
};

export default function DimensionLabs() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            <div className="container mx-auto px-6 pt-40 pb-32 max-w-6xl">
                {/* Minimal Hero Section */}
                <div className="mb-32 max-w-4xl">
                    <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                        <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">Spring 2026 Fellowship</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans tracking-tight text-white leading-[1.05] mb-8">
                        Dimension Labs <br />
                        <span className="text-zinc-500">Venture Growth</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-10">
                        A spring fellowship leading to a summer internship for students who want to be close to founders, product, and deals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://forms.gle/EFeSYqkdej6ofXaC8"
                            target="_blank"
                            className="px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center w-fit"
                        >
                            Apply to Fellowship
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <Link
                            href="https://www.dimensionlabs.org/"
                            target="_blank"
                            className="px-8 py-3.5 bg-transparent border border-white/10 text-white font-medium text-sm rounded-full hover:bg-zinc-900 transition-all flex items-center justify-center w-fit"
                        >
                            Visit Dimension Labs
                        </Link>
                    </div>
                </div>

                {/* The Program Section */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
                    <div>
                        <div className="h-px bg-cyan-500/50 w-8 mb-8" />
                        <h2 className="text-2xl font-medium text-white mb-4">The Program</h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed">
                            <strong className="text-white font-medium">50 shortlisted fellows</strong> will scout early-stage startups, identify their real technical and design pain points, and bring them into Dimension Labs&apos; product studio so we can help them build before they raise.
                        </p>
                    </div>
                    <div>
                        <div className="h-px bg-white/20 w-8 mb-8" />
                        <h2 className="text-2xl font-medium text-white mb-4">What is Dimension Labs?</h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed">
                            We act as the technical co-founder for non-technical founders. Founders struggle to find high-quality engineering talent that is affordable. We solve this by connecting them with vetted top 1% talent from emerging markets.
                        </p>
                    </div>
                </div>

                {/* Curriculum List */}
                <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 md:p-16 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-white mb-12">
                            What you&apos;ll learn in 16 weeks
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                { title: "Scouting & Deal Flow", desc: "Identify high-potential early-stage startups and assess their product needs." },
                                { title: "Technical Due Diligence", desc: "Analyze tech stacks, code quality, and engineering architecture." },
                                { title: "Product Strategy", desc: "Translate founder vision into actionable product roadmaps." },
                                { title: "Venture Mechanics", desc: "Learn how venture capital funds operate and support portfolio cos." },
                                { title: "Relationship Building", desc: "Work directly with founders and build your network in the startup ecosystem." },
                                { title: "Product Studio Ops", desc: "See how a product studio operates from the inside, building real software." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                    <div>
                                        <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
                                        <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Requirements */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-sans tracking-tight text-white mb-6">
                            Who fits?
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                            We are looking for builders, curious minds, and those who want to understand how companies are built from the ground up.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l pl-6 border-white/10">
                            <h4 className="text-white font-medium text-lg mb-1">Undergraduate & Graduate Students</h4>
                            <p className="text-zinc-500 font-light text-sm">Currently enrolled in a university program.</p>
                        </div>
                        <div className="border-l pl-6 border-white/10">
                            <h4 className="text-white font-medium text-lg mb-1">Entrepreneurial Mindset</h4>
                            <p className="text-zinc-500 font-light text-sm">You want to build something of your own one day.</p>
                        </div>
                        <div className="border-l pl-6 border-white/10">
                            <h4 className="text-white font-medium text-lg mb-1">Tech Curious</h4>
                            <p className="text-zinc-500 font-light text-sm">Interest in software, product, and venture capital.</p>
                        </div>
                    </div>
                </div>

                {/* Minimal CTA */}
                <div className="text-center pt-24 border-t border-white/5">
                    <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-white mb-8">
                        Join the Dimension.
                    </h2>
                    <Link
                        href="https://forms.gle/EFeSYqkdej6ofXaC8"
                        target="_blank"
                        className="inline-flex px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
