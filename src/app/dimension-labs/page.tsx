'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { m } from 'motion/react';
import {
    ArrowRight,
    CheckCircle,
    Users,
    Zap,
    Target,
    Search,
    MessageCircle,
    Briefcase,
    Calendar,
    Clock,
    Globe,
    Lock
} from 'lucide-react';

export default function DimensionLabsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 mb-6"
                        >
                            <span className="text-cyan-400 text-sm font-bold tracking-wide uppercase">Spring 2026 Fellowship</span>
                        </m.div>

                        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 tracking-tight text-white leading-tight">
                            Dimension Labs <br />
                            <span className="italic text-cyan-400">Venture Growth Fellowship</span>
                        </h1>

                        <p className="text-xl text-zinc-400 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10">
                            A spring fellowship leading to a summer internship for undergraduate and graduate students who want to be close to founders, product, and deals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScBicV_sE4grM4DE9lPmb-st9jf8KXcZ0eGAv5hgaw8zvkNRQ/viewform"
                                className="px-8 py-4 rounded-full bg-cyan-400 text-zinc-950 font-bold text-lg hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:-translate-y-1 flex items-center gap-2"
                            >
                                Apply to Fellowship
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.dimensionlabs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-lg hover:bg-zinc-800 transition-all hover:-translate-y-1"
                            >
                                Visit Dimension Labs
                            </a>
                        </div>
                    </m.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-zinc-950 relative border-t border-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-zinc-200">
                            <span className="text-cyan-400 font-normal">50 shortlisted fellows</span> will scout early-stage startups, identify their real technical and design pain points, and bring them into Dimension Labs' product studio so we can help them build before they raise.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 bg-zinc-900/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl font-serif font-medium mb-6 text-white">
                                The internship ladder <br />
                                <span className="text-cyan-400 italic">is broken</span>
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                To get a great internship, you’re supposed to already have one. We’re fixing that.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid gap-8">
                            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Zap className="text-cyan-400 w-6 h-6" />
                                    Forget case studies
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    You’ll learn the real job: finding builders, diagnosing bottlenecks, bridging founders with engineers, and staying in the room while all these decisions get made. This is exactly what PMs/VCs do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">What you'll learn in 16 weeks</h2>
                        <p className="text-zinc-400 text-lg">Master the core PM/VC instincts</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Search className="w-6 h-6 text-cyan-400" />,
                                title: "1. Find founders where they actually are",
                                description: "Unleash your creativity to attract high value signals early. Source from Startup clubs, hackerhouses, Discords, GitHub, and X. Find people who are building — not just talking."
                            },
                            {
                                icon: <Target className="w-6 h-6 text-cyan-400" />,
                                title: "2. Diagnose real problems",
                                description: "Learn to ask: What are you building? Where are you stuck? Spot what matters fast and identify what can be outsourced vs what founders must focus on."
                            },
                            {
                                icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
                                title: "3. Turn uncertainty into structure",
                                description: "Take \"we're not sure\" and turn it into specific requirements: \"Design an MVP dashboard\", \"Build a RAG pipeline\", or \"Ship a landing page\"."
                            },
                            {
                                icon: <Users className="w-6 h-6 text-cyan-400" />,
                                title: "4. Stay in the room",
                                description: "Learn the art of selling. Sit in on scoping calls, see how decisions get made, and prove your value by getting involved in operations."
                            }
                        ].map((item, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-500/30 transition-colors"
                            >
                                <div className="p-3 bg-zinc-950 rounded-xl inline-block mb-6 border border-zinc-800">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training & Benefits */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-serif font-medium mb-8">Training you'll get</h3>
                            <ul className="space-y-4">
                                {[
                                    "Technical + product jargon to sound credible",
                                    "How to run founder discovery conversations",
                                    "How to qualify opportunities (and kill weak ones)",
                                    "How to write clean scopes + handoffs",
                                    "How to build and maintain founder relationships"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                                        <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-3xl font-serif font-medium mt-12 mb-8">What you get</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">💼 Skills that transfer everywhere</h4>
                                    <p className="text-zinc-400 text-sm">Source/qualify opportunities, scope work, bridge tech/non-tech conversations.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">🚀 A real founder network</h4>
                                    <p className="text-zinc-400 text-sm">Dozens of conversations with early-stage founders making real decisions.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">🎯 Two paths to Summer 2026</h4>
                                    <p className="text-zinc-400 text-sm">Internship opportunities at our portfolio openings or a direct offer at Dimension Labs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full -z-10" />
                            <h3 className="text-3xl font-serif font-medium mb-8">Program Details</h3>

                            <div className="space-y-6">
                                {[
                                    { icon: <Calendar className="w-5 h-5" />, label: "Timeline", value: "Mid-January to late April 2026 (~14 weeks)" },
                                    { icon: <Clock className="w-5 h-5" />, label: "Time", value: "5–8 hours/week (flexible around classes)" },
                                    { icon: <Globe className="w-5 h-5" />, label: "Format", value: "Remote-first (US time zones; optional city meetups)" },
                                    { icon: <Users className="w-5 h-5" />, label: "Who it's for", value: "US-based students plugged into startup ecosystems" },
                                    { icon: <Lock className="w-5 h-5" />, label: "Confidentiality", value: "Keep founder info private" },
                                ].map((detail, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                        <div className="text-cyan-400 mt-1">{detail.icon}</div>
                                        <div>
                                            <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold mb-1">{detail.label}</p>
                                            <p className="text-white font-medium">{detail.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Apply */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-black p-12 rounded-[3rem] border border-zinc-800 text-center">
                        <h2 className="text-4xl font-serif font-medium mb-8">Who should apply</h2>
                        <p className="text-xl text-zinc-300 mb-12">You don’t need to be technical. You do need to care.</p>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">You're a fit if you:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Love early-stage energy & founders",
                                        "Communicate clearly (writing + calls)",
                                        "Can reach out cold and handle \"no\"",
                                        "Want to learn by doing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-400">
                                            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Bonus points if you:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Are active in startup clubs/communities",
                                        "Have helped a friend build something",
                                        "Have built anything yourself (even if failed)",
                                        "Are considering product, venture, or founding"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-400">
                                            <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Application */}
            <section id="apply" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-950/20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8">The Challenge</h2>
                    <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Record a 1-minute video convincing us you belong in this cohort. <br />
                        <span className="text-cyan-400">You yourself are the 'product' here.</span>
                    </p>

                    <div className="max-w-md mx-auto bg-zinc-950 p-8 rounded-3xl border border-zinc-800 mb-12 text-left">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800">
                            <span className="text-zinc-500">Applications close</span>
                            <span className="text-white font-bold">Jan 21st, 2026</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500">Review Process</span>
                            <span className="text-white font-bold">Rolling Basis</span>
                        </div>
                    </div>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScBicV_sE4grM4DE9lPmb-st9jf8KXcZ0eGAv5hgaw8zvkNRQ/viewform" // Placeholder based on intent
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-zinc-200 transition-all hover:scale-105 shadow-2xl"
                    >
                        Start your application
                        <ArrowRight className="w-6 h-6" />
                    </a>

                    <p className="mt-12 text-zinc-500">
                        Questions? Contact at <a href="mailto:team@dimensionlabs.org" className="text-cyan-400 hover:underline">team@dimensionlabs.org</a>
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
