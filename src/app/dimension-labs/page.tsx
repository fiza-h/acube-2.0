import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles, Check, Database, Search, Rocket, Users, Target, Zap } from 'lucide-react';

export const metadata = {
    title: 'Dimension Labs - Talspace',
    description: 'Dimension Labs Venture Growth Fellowship - Spring 2026',
};

export default function DimensionLabs() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30 overflow-x-hidden">
            <Navbar />

            <div className="container mx-auto px-6 py-32 max-w-6xl">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />

                    <div className="inline-flex items-center space-x-2 bg-cyan-950/30 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-bold tracking-wide text-cyan-400 uppercase">Spring 2026 Fellowship</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
                        Dimension Labs <br />
                        <span className="italic text-cyan-400">Venture Growth Fellowship</span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        A spring fellowship leading to a summer internship for undergraduate and graduate students who want to be close to founders, product, and deals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://forms.gle/EFeSYqkdej6ofXaC8"
                            target="_blank"
                            className="px-8 py-4 bg-cyan-400 text-zinc-950 font-bold text-lg rounded-full hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center"
                        >
                            Apply to Fellowship
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="https://www.dimensionlabs.org/"
                            className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-bold text-lg rounded-full hover:bg-zinc-800 transition-all flex items-center"
                        >
                            Visit Dimension Labs
                        </Link>
                    </div>
                </div>

                {/* Intro Stats */}
                <section className="mb-24">
                    <div className="bg-zinc-900/50 border border-zinc-800 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full" />

                        <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200">
                            <span className="text-cyan-400 font-bold">50 shortlisted fellows</span> will scout early-stage startups, identify their real technical and design pain points, and bring them into Dimension Labs&apos; product studio so we can help them build before they raise.
                        </p>
                    </div>
                </section>

                {/* What is Dimension Labs */}
                <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                            What is <span className="text-cyan-400">Dimension Labs?</span>
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300">
                            <p>
                                We are a product studio that helps founders build their MVPs and early product iterations. We act as the technical co-founder for non-technical founders.
                            </p>
                            <p>
                                Founders struggle to find high-quality engineering talent that is affordable. We solve this by connecting them with vetted top 1% talent from emerging markets.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-[2rem] border border-zinc-800 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-50" />
                        <div className="space-y-4 relative z-10">
                            {[
                                "Technical Strategy",
                                "MVP Development",
                                "Product Design",
                                "Growth Engineering"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-4 p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-full bg-cyan-950/50 flex items-center justify-center border border-cyan-900/50">
                                        <Check className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <span className="text-lg font-medium text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Curriculum Grid */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
                        What you&apos;ll learn in <span className="text-cyan-400">16 weeks</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Scouting & Deal Flow",
                                desc: "Learn how to identify high-potential early-stage startups and assess their product needs.",
                                icon: <Search className="w-6 h-6 text-cyan-400" />
                            },
                            {
                                title: "Technical Due Diligence",
                                desc: "Analyze tech stacks, code quality, and engineering architecture.",
                                icon: <Database className="w-6 h-6 text-cyan-400" />
                            },
                            {
                                title: "Product Strategy",
                                desc: "Understand how to translate founder vision into actionable product roadmaps.",
                                icon: <Target className="w-6 h-6 text-cyan-400" />
                            },
                            {
                                title: "Venture Mechanics",
                                desc: "Learn the fundamentals of how venture capital funds operate and support portfolio cos.",
                                icon: <Zap className="w-6 h-6 text-cyan-400" />
                            },
                            {
                                title: "Relationship Building",
                                desc: "Work directly with founders and build your network in the startup ecosystem.",
                                icon: <Users className="w-6 h-6 text-cyan-400" />
                            },
                            {
                                title: "Product Studio Ops",
                                desc: "See how a product studio operates from the inside, building real software.",
                                icon: <Rocket className="w-6 h-6 text-cyan-400" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] hover:bg-zinc-800/80 transition-colors group">
                                <div className="w-12 h-12 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who Fits Section */}
                <section className="bg-zinc-900 border border-zinc-800 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                Who <span className="text-cyan-400">Fits?</span>
                            </h2>
                            <p className="text-lg text-zinc-300 mb-8">
                                We are looking for builders, curious minds, and those who want to understand how companies are built from the ground up.
                            </p>
                            <Link
                                href="https://forms.gle/EFeSYqkdej6ofXaC8"
                                target="_blank"
                                className="inline-flex px-8 py-4 bg-white text-zinc-950 font-bold text-lg rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105"
                            >
                                Apply Now
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Undergraduate & Graduate Students</h4>
                                    <p className="text-zinc-400 text-sm">Currently enrolled in a university program.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Entrepreneurial Mindset</h4>
                                    <p className="text-zinc-400 text-sm">You want to build something of your own one day.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Tech Curious</h4>
                                    <p className="text-zinc-400 text-sm">Interest in software, product, and venture capital.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
